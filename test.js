const { Sequelize } = require('sequelize');
var initModels = require("./Models/init-models");

const sequelize = new Sequelize(
    'magento',
    'root',
    '',
    {
        host: '127.0.0.1',
        dialect: 'mysql',
        logging: console.log,
        // stop the auto-pluralization performed by Sequelize using the freezeTableName: true option
        freezeTableName: true
    });


var magentoModels = initModels(sequelize);


async function getProduct(){
var Product = await magentoModels.CatalogProductEntity.findOne({ where: {'sku': '24-MB01'}});
console.log(Product);

var EAV_VAR = await Product.getCatalogProductEntityVarchars();

console.log(EAV_VAR);
}

getProduct();
//console.log(EAV_VAR);
