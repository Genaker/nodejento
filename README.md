# Nodejento (formerly known as NodeGento)

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

## Nodejento Express.JS Microservices  
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
	//prevent sequelize from pluralizing table names
        freezeTableName: true
    });

app.get('/nodejento', async (req, res) => {
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

# Eager Loading

The associated models will be added by Sequelize in appropriately named, automatically created field(s) in the returned objects.

In Sequelize, eager loading is mainly done by using the include option on a model finder query (such as findOne, findAll, etc).

```
const products = await Product.findAll({ include: CatalogProductEntityVarchar, as: 'attribute'  });
console.log(JSON.stringify(products));
```

Above, the associated model was added to a new field called attribute in the fetched products.

When you perform an **include** in a query, the included data will be added to an extra field in the returned objects, according to the following rules:

When including something from a single association (hasOne or belongsTo) - the field name will be the singular version of the model name;
When including something from a multiple association (hasMany or belongsToMany) - the field name will be the plural form of the model.
In short, the name of the field will take the most logical form in each situation.

Examples:
```
// Assuming Foo.hasMany(Bar)
const foo = Foo.findOne({ include: Bar });
// foo.bars will be an array
// foo.bar will not exist since it doens't make sense

// Assuming Foo.hasOne(Bar)
const foo = Foo.findOne({ include: Bar });
// foo.bar will be an object (possibly null if there is no associated model)
// foo.bars will not exist since it doens't make sense

// And so on
```

Overriding singulars and plurals when defining aliases
When defining an alias for an association, instead of using simply { as: 'myAlias' }, you can pass an object to specify the singular and plural forms:
```
Project.belongsToMany(User, {
  as: {
    singular: 'líder',
    plural: 'líderes'
  }
});
```

If you know that a model will always use the same alias in associations, you can provide the singular and plural forms directly to the model itself:
```
const User = sequelize.define('user', { /* ... */ }, {
  name: {
    singular: 'líder',
    plural: 'líderes',
  }
});
Project.belongsToMany(User);
```

# Use together with the KNEX.JS

"Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use. It features both traditional node style callbacks as well as a promise interface for cleaner async flow control, a stream interface, full-featured query and schema builders, transaction support (with savepoints), connection pooling and standardized responses between different query clients and dialects."

```
const knex = require('knex')(dbConfig)
knex('table').insert({a: 'b'}).returning('*').toString();

knex({ a: 'table', b: 'table' })
  .select({
    aTitle: 'a.title',
    bTitle: 'b.title'
  })
  .whereRaw('?? = ??', ['a.column_1', 'b.column_2'])
  
knex('users')
  .where('id')
  .first();
  
knex.column('entity_id', 'sku', 'created_at').select().from('catalog_product_entity');
```
# Use Magento NodeJS with AWS Lambda Serverless

You can use a Lambda function to process requests from an Application Load Balancer (ELB) and API Geteway 

Elastic Load Balancing supports Lambda functions as a target for an Application Load Balancer. Use load balancer rules to route HTTP requests to a function, based on path or header values. Process the request and return an HTTP response from your Lambda function.

Elastic Load Balancing invokes your NodeJS Magento Lambda function synchronously with an event that contains the request body and metadata.

Example Application Load Balancer request event
```
{
    "requestContext": {
        "elb": {
            "targetGroupArn": "arn:aws:elasticloadbalancing:us-east-2:123456789012:targetgroup/lambda-279XGJDqGZ5rsrHC2Fjr/49e9d65c45c6791a"
        }
    },
    "httpMethod": "GET",
    "path": "/lambda",
    "queryStringParameters": {
        "query": "1234ABCD",
	"sku": "24-MB01"
    },
    "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "accept-encoding": "gzip",
        "accept-language": "en-US,en;q=0.9",
        "connection": "keep-alive",
        "host": "lambda-alb-123578498.us-east-2.elb.amazonaws.com",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
        "x-amzn-trace-id": "Root=1-5c536348-3d683b8b04734faae651f476",
        "x-forwarded-for": "72.12.164.125",
        "x-forwarded-port": "80",
        "x-forwarded-proto": "http",
        "x-imforwards": "20"
    },
    "body": "",
    "isBase64Encoded": false
}
```

## Example of the Magento Lumbda with ELB or API Gataway:

```
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
        freezeTableName: true
    }
);

var magentoModels = initModels(sequelize);

exports.handler = async function (event, context) {

    console.log(event);
    // Get Product Record By SKU GET parameter
    var Product = await magentoModels.CatalogProductEntity.findOne({ where: {'sku': event.queryStringParameters.sku}});
    console.log(Product);

    return {
        "isBase64Encoded": false,
        "statusCode": 200,
        "statusDescription": "200 OK",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(Product)
    }
}
```

![NodeJento2](https://raw.githubusercontent.com/Genaker/nodegento/main/nodegento-magento2.png)
