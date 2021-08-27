# NodeGento

NodeJS implementation of the Magento 2 ORM without using legacy PHP

This repo uses Sequelize to connect to the Magento 2 database directly without invocation of the broken MAgento 2 PHP framework, so we won’t have to write any MYSQL queries.

![NodeGento](https://raw.githubusercontent.com/Genaker/nodegento/main/nodegento-logo.png)

Sequelize is a pretty great ORM. From their website:

“Sequelize is a promise-based ORM for Node.js and io.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite and MSSQL and features solid transaction support, relations, read replication and more.”

# Concept
Models are the essence of Sequelize. A model is an abstraction that represents a table in your Magento 2,1 database. In Sequelize, it is a class that extends Model.

The model tells Sequelize several things about the entity it represents, such as the name of the table in the database and which columns it has (and their data types).

A model in Sequelize has a name. This name does not have to be the same name of the table it represents in the Magento database. Usually, models have singular names (such as User) while tables have pluralized names (such as Users), although this is fully configurable.

You can simply tell Sequelize the name of the table directly as well.

# Code Example

```
async function getProduct(){

// Get Product By SKU
var Product = await magentoModels.CatalogProductEntity.findOne({ where: {'sku': '24-MB01'}});
console.log(Product);

// get Product EAV Varchar attributes
var ProductEAV = await Product.getCatalogProductEntityVarchars();

console.log(ProductEAV);

// get Product with All EAV attributes
Product = await magentoModels.CatalogProductEntity.findOne({ where: {'sku': '24-MB01'},
include: [
          { model: magentoModels.CatalogProductEntityVarchar, as: 'CatalogProductEntityVarchars' },
          { model: magentoModels.CatalogProductEntityInt, as: 'CatalogProductEntityInts' },
          { model: magentoModels.CatalogProductEntityText, as: 'CatalogProductEntityTexts' },
	        { model: magentoModels.CatalogProductEntityDecimal, as: 'CatalogProductEntityDecimals'},
	        { model: magentoModels.CatalogProductEntityDatetime, as: 'CatalogProductEntityDatetimes'},
        ]
});

console.log(Product);
}
```

## Nodegento Express.JS Microservices  
The Magento less microservice can be built using two primary packages – Sequelize Magento ORM and Express. 

The Sequelize package connects microservices to the Magento MySQL Database dirrectly using ORM models. The Express.js is a web application server framework, designed for building web applications. It is the de facto standard server framework for Node.js.
```
const express = require('express')
const { Sequelize } = require('sequelize');
var magentoModels = require("./Models/init-models");

const app = express()
const port = 3000
const sequelize = new Sequelize(
    'magento',
    'root',
    'password',
    {
        host: '127.0.0.1',
        dialect: 'mysql',
        freezeTableName: true
    });

app.get('/nodegento', async (req, res) => {
  let Product = await magentoModels.CatalogProductEntity.findOne({ where: {'sku': '24-MB01'}});
  res.send(Product.toJSON())
})

app.listen(port, () => {
  console.log(`Magento Node JS microservice listening at http://localhost:${port}`)
})
```
# Executing RAW SQL queries agains Magento Database

As there are often use cases in which it is just easier to execute raw / already prepared SQL queries, you can use the sequelize.query method.

By default the function will return two arguments - a results array, and an object containing metadata (such as amount of affected rows, etc). Note that since this is a raw query, the metadata are dialect specific. Some dialects return the metadata "within" the results object (as properties on an array). However, two arguments will always be returned, but for MSSQL and MySQL it will be two references to the same object.

```
const [results, metadata] = await sequelize.query("UPDATE users SET y = 42 WHERE x = 12");
// Results will be an empty array and metadata will contain the number of affected rows.
```

In cases where you don't need to access the metadata you can pass in a query type to tell sequelize how to format the results. For example, for a simple select query you could do:

```
const { QueryTypes } = require('sequelize');
const users = await sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT });
// We didn't need to destructure the result here - the results were returned directly
```

Several other query types are available. Peek into the source for details.

A second option is the model. If you pass a model the returned data will be instances of that model.

```
// Callee is the model definition. This allows you to easily map a query to a predefined model
const products = await sequelize.query('SELECT * FROM category_product_entity', {
  model: Product
});
// Each element of `products` is now an instance of Product
```

![NodeGento2](https://raw.githubusercontent.com/Genaker/nodegento/main/nodegento-magento2.png)
