const express = require('express');
const {Sequelize, QueryTypes} = require('sequelize');
const magentoModels = require("nodejento/Models/init-models");

const connectionString = 'mysql://user:password@host:port/db'

let requestCache = {};

const myKnex = require('knex')({
    client: 'mysql',
    connection: connectionString,
    pool: {
        min: 0,
        max: 1
    }
});

const app = express()
const port = 3000
const debug = false

const sequelize = new Sequelize(
    connectionString, {
        //prevent sequelize from pluralizing table names
        freezeTableName: true,
        dialect: 'mysql',
        logging: false,
        pool: {
            max: 15,
            min: 2,
            acquire: 30000,
            idle: 10000
        }
    });

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const models = magentoModels.initModels(sequelize);

let CatalogProductEntity = models.CatalogProductEntity;

//console.log(models)
const ORMTrash = []

var Product = models.CatalogProductEntity.findOne({
    where: {
        'sku': '24-MB01'
    }
});

// Global Eav configuration 
let EAV = models.EavAttribute.findAll({
    raw: true,
    plain: false,
});
let EavLabels = models.EavAttributeLabel.findAll();
//Replaced with Knex -> let EavCatalog = sequelize.query("select * from eav_attribute as eav left join catalog_eav_attribute as catalog on eav.attribute_id = catalog.attribute_id", {type: sequelize.QueryTypes.SELECT })
let EavCatalog = myKnex.select().from(models.CatalogEavAttribute.tableName)
let VisibleOnFront = sequelize.query("select attribute_id from catalog_eav_attribute where is_visible_on_front = 1 or is_html_allowed_on_front = 1 or is_visible = 1 ", {
    type: QueryTypes.SELECT
})
let EavOptionsValues = fetchAttributeOptionValues()

Promise.all([EAV, EavLabels, EavCatalog, VisibleOnFront, EavOptionsValues]).then(([eav, labels, catalog, visible, values]) => {
    console.log("Promise is resolved")
    EAV = eav
    EAV['id_code'] = []
    EAV.forEach(function(a) {
        EAV['id_code']["attr_" + a.attribute_id.toString()] = {
            code: a.attribute_code,
            data: a
        }
    })
    console.log("Attribute count: " + EAV.length)
    // console.log(EAV)
    EavLabels = labels
    EavCatalog = catalog
    EavOptionsValues = {}
    values.forEach((v) => {
        EavOptionsValues[v.value_id] = {
            [v.store_id]: v
        }
    })
    VisibleOnFront = []

    visible.forEach((v) => {
        VisibleOnFront.push(v.attribute_id)
    })
    //EavLabels.forEach(function (a) { EAV['id_code']["attr_" + a.attribute_id.toString()] = a.attribute_code})
})

app.get('/nodejento', async (req, res) => {
    req.id = (Date.now() % 1000);
    console.time("request-" + req.id);

    console.time("ORM-" + req.id);

    if (requestCache.hasOwnProperty(req.url)) {
        console.timeEnd("request-" + req.id);
        res.send(json)
    }

    let Product = await CatalogProductEntity.findAll({
        where: {
            'sku': ['24-MB01', '24-MB04', '24-WG084', '24-WG085']
        },
        include: [{
                model: models.CatalogProductEntityVarchar,
                as: 'CatalogProductEntityVarchars',
                where: {
                    attribute_id: VisibleOnFront,
                    store_id: [0, 1]
                },
                required: false,
                attributes: ['store_id', 'value', 'attribute_id'],
                separate: true
            },
            {
                model: models.CatalogProductEntityInt,
                as: 'CatalogProductEntityInts',
                where: {
                    attribute_id: VisibleOnFront,
                    store_id: [0, 1]
                },
                required: false,
                attributes: ['store_id', 'value', 'attribute_id'],
                separate: true
            },
            {
                model: models.CatalogProductEntityText,
                as: 'CatalogProductEntityTexts',
                where: {
                    attribute_id: VisibleOnFront,
                    store_id: [0, 1]
                },
                required: false,
                attributes: ['store_id', 'value', 'attribute_id'],
                separate: true
            },
            {
                model: models.CatalogProductEntityDecimal,
                as: 'CatalogProductEntityDecimals',
                where: {
                    attribute_id: VisibleOnFront,
                    store_id: [0, 1]
                },
                required: false,
                attributes: ['store_id', 'value', 'attribute_id'],
                separate: true
            },
            {
                model: models.CatalogProductEntityDatetime,
                as: 'CatalogProductEntityDatetimes',
                where: {
                    attribute_id: VisibleOnFront,
                    store_id: [0, 1]
                },
                required: false,
                attributes: ['store_id', 'value', 'attribute_id'],
                separate: true
            },
            {
                model: models.CatalogProductEntityMediaGallery,
                required: false,
                raw: true,
                attributes: ['value', 'media_type']
            },
            {
                model: models.CataloginventoryStockItem,
                as: 'CataloginventoryStockItems',
                required: false,
                separate: true
            },
            {
                model: models.CatalogProductEntityTierPrice,
                as: 'CatalogProductEntityTierPrices',
                required: false,
                separate: true
            }
        ]
        //plain: false,
        //raw: true
        //limit: 10
    });

    let ProductIDs = []
    Product.forEach((p, i) => {
        ProductIDs.push({
            [p.entity_id]: i
        })
    })

    console.timeEnd("ORM-" + req.id);
    //console.log(Product);
    console.time("transpond-" + req.id);
    Product.__proto__['transpond'] = () => {
        transpond(Product)
    }
    Product.transpond()
    console.timeEnd("transpond-" + req.id);
    //console.log(Product["attributes"])

    console.time("json-" + req.id);
    let json = JSON.stringify({
        result: Product,
        ids: ProductIDs,
        count: ProductIDs.length
    }, null, 1)
    requestCache[req] = json;
    console.timeEnd("json-" + req.id);

    console.timeEnd("request-" + req.id);
    res.send(json)
})

app.get('/', (req, res) => {
    console.time("request");
    res.send('Hello World!')
    console.timeEnd("request");
})

app.listen(port, () => {
    console.log(`Magento Express app listening at http://localhost:${port}`)
})

const transpond = function(Product = null) {
    let collection = true;

    if (!Array.isArray(Product)) {
        collection = false
        Product = [Product]
    }
    let aliases = ['CatalogProductEntityVarchars', 'CatalogProductEntityInts', 'CatalogProductEntityTexts', 'CatalogProductEntityDecimals', 'CatalogProductEntityDatetimes', 'WronG_Attribute']
    let coreAttributes = ['entity_id', 'sku', 'attribute_set_id', 'type_id', 'created_at', 'updated_at', 'has_options']
    aliases.forEach((ormAttr) => {
        Product.forEach((product, index, products) => {

            if (!products[index]['dataValues'].hasOwnProperty('attributes'))
                products[index]['dataValues']['attributes'] = {}

            coreAttributes.forEach(c => products[index]['dataValues']['attributes'][c] = products[index]['dataValues'][c])

            if (products[index].hasOwnProperty(ormAttr)) {
                products[index][ormAttr].forEach((a) => {
                    let attributeCode = EAV['id_code']['attr_' + a.dataValues.attribute_id]['code']

                    if (!products[index]['dataValues']['attributes'].hasOwnProperty(attributeCode) || a.dataValues.store_id > 0) {
                        if (debug) {
                            products[index]['dataValues']['attributes'][attributeCode] = a.dataValues
                        } else {
                            products[index]['dataValues']['attributes'][attributeCode] = {
                                value: a.dataValues.value
                            }

                        }
                        let attributeValue = a.dataValues.value
                        let storeId = a.dataValues.store_id

                        let frontent_input = EAV['id_code']['attr_' + a.dataValues.attribute_id]['data']['frontend_input']
                        let source_model = EAV['id_code']['attr_' + a.dataValues.attribute_id]['data']['source_model']
                        products[index]['dataValues']['attributes'][attributeCode]['frontend_input'] = frontent_input
                        let types = ['select', 'multiselect']

                        if (types.includes(frontent_input) && source_model === null) {
                            let resultValue = []

                            let values = String(attributeValue).split(",");
                            if (values.length > 1) {
                                values.forEach((val) => {
                                    resultValue.push(EavOptionsValues[val][storeId])
                                })
                            } else {
                                if (EavOptionsValues.hasOwnProperty(attributeValue))
                                    resultValue = EavOptionsValues[attributeValue][storeId]
                            }
                            products[index]['dataValues']['attributes'][attributeCode]['optionValues'] = resultValue
                        }
                    }
                })
                delete products[index][ormAttr]
                delete products[index]["dataValues"][ormAttr]
            }

            if (products[index].hasOwnProperty('CatalogProductEntityMediaGalleries')) {
                products[index]['dataValues']['gallery'] = []
                products[index].CatalogProductEntityMediaGalleries.forEach((gal) => {
                    delete gal.dataValues.CatalogProductEntityMediaGalleryValueToEntity
                    products[index]['dataValues']['gallery'].push(gal.dataValues)
                })
                delete products[index].CatalogProductEntityMediaGalleries
                delete products[index]["dataValues"]["CatalogProductEntityMediaGalleries"]
            }

            if (products[index].hasOwnProperty('CataloginventoryStockItems')) {
                products[index]['dataValues']['stock'] = {}
                if (typeof products[index].CataloginventoryStockItems[0] !== 'undefined')
                    products[index]['dataValues']['stock'] = products[index].CataloginventoryStockItems[0].dataValues
                delete products[index].CataloginventoryStockItems
                delete products[index]["dataValues"]["CataloginventoryStockItems"]
            }

            if (products[index].hasOwnProperty('CatalogProductEntityTierPrices')) {
                products[index]['dataValues']['tier_price'] = {}
                products[index].CatalogProductEntityTierPrices.forEach((tier) => {
                    products[index]['tier_price'].push(tier.dataValues)
                })
                delete products[index].CatalogProductEntityTierPrices
                delete products[index]["dataValues"]["CatalogProductEntityTierPrices"]
            }
        })
    })

    if (!collection)
        Product = Product[0]
        //console.log(Product)
}

function fetchAttributeOptionValues() {
    let sql = "select * from eav_attribute_option_value where value_id "; // in (5459,5471);
    return sequelize.query(sql, {
        type: QueryTypes.SELECT
    })
}
