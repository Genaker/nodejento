# NodeJento (formerly known as NodeGento)

NodeJS implementation of the Magento 2 ORM and Microservice Framework components without using legacy PHP.
 
NodeJento is a NodeJs service providing an additional API surface that makes product, category, and any other data retrieval faster. 

Delivering great shopping experiences with Magento can be tricky, involving many factors. But two are undoubtedly part of the equation: Customers need to find what they’re looking for and they need to do it quickly. That’s why we developed NodeJento for Adobe Commerce.

NodeJento is written in a highly scalable event-driven NodeJS/JavaScript. JavaScript is one of the most popular programming languages and nearly every developer is familiar with it.

This repo uses the Sequelize library to connect to the Magento 2 database directly without invocation of the Magento 2 PHP framework, so we won’t have to write any MYSQL queries.

![Laragento](https://raw.githubusercontent.com/Genaker/nodegento/main/nodegento-logo.png)

Sequelize is a pretty great ORM. From their website:

“Sequelize is a promise-based ORM for Node.js and io.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite and MSSQL and features solid transaction support, relations, read replication and more.”

Sequilize ORM is really popular and has 25K stars on GitHub:

![Squilize ORM](https://user-images.githubusercontent.com/9213670/139718372-90124eeb-85bf-4b54-a556-aadf7895c765.png)
Sequilize has 1M+ weekly downloads:
![Sequlize Downlods](https://user-images.githubusercontent.com/9213670/153321396-ce7126c4-546c-4237-b233-252f25367ba3.png)

In 2024 this number is 2M+ downloads and 28.9K stars:
![image](https://github.com/Genaker/nodejento/assets/9213670/f84b77a4-95b4-44d1-8dbb-49d6f7f52082)

# Installation
Go to the magento root directory 
 	
```
apt install npm #if not installed
npm install https://github.com/Genaker/nodejento/
node node_modules/nodejento/config-test.js
```
you will see the results of DB connection array

Make raw DB query with Knex:
```
nodejs
const DB = require('nodejento/config')
let connection = require('knex')({client: 'mysql', connection: DB.getDBConfig()});
connection.raw("select 1+1 as result").then((e) => console.log(e))
connection.select('*').from('core_config_data').then((r) => console.log(r))
```
All functions are async but with the console, it works ok ;)

## Using Sequelize Laragento ORM Product model
```
const { Sequelize } = require('sequelize');
var magentoModels = require("./Models/init-models");
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

magentoModels.CatalogProductEntity.findOne({ where: {'sku': '24-MB01'}}).then((p) => console.log(p.toJSON()));
```
# Concept
Models are the essence of Sequelize. A model is an abstraction that represents a table in your Magento 2,1 database. In Sequelize, is a class that extends Model.

The model tells Sequelize several things about the entity it represents, such as the name of the table in the database and which columns it has (and their data types).

A model in Sequelize has a name. This name does not have to be the same name as the table it represents in the Magento database. Usually, models have singular names (such as User) while tables have pluralized names (such as Users), although this is fully configurable.

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

## Magento/Adobe Commerce edition Node JS Support 
If you have any issues and Enterprise (Adobe Commerce) Version support create a ticket or drop me email at: yegorshytikov@gmail.com

## Nodejento Express.JS Microservices  
The Magento less microservice can be built using two primary packages – Sequelize Magento ORM and Express or Fastify. 

The Sequelize package connects microservices to the Magento MySQL Database directly using ORM models. The Express.js/Fastify is a web application server framework, designed for building web applications. It is the de facto standard server framework for Node.js.
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

# Live Express server reloading 

**Nodemon** is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development.

Swap nodemon instead of node to run your code, and now your process will automatically restart when your code changes. To install, get node.js, then from your terminal run:

```
npm install nodemon --save
```
Now run **nodemon app.js** and you never have to restart again!

In the package.json you can use: 

```
scripts:{
"start":"node app.js",
"dev": "nodemon app.js"
}
```

# Sequilize Performance improvement

options.include.separate	boolean	
If true, runs a separate query to fetch the associated instances, only supported for hasMany associations.

Sequelize has a parameter called **separate**. Separate parameters were crucial in optimizing complex queries where you want to include associated nested data.

It’s only available for **hasMany** (Only HasMany associations support include.separate) associations, it takes those previously nested queries and performs them individually or separately using **WHERE IN([])** SQL condition. As a bonus, the results from each query are joined together later in memory, so we were able to maintain the same response and not have to alter how we were setting the data.
What this meant for our situation: we were able to decouple our queries, perform them separately from one another and get a huge boost in efficiency. Measuring the before and after performance of a few endpoints, we estimated a 10x improvement. We were also able to target other queries with similar methods and associations and gain performance optimizations there as well.

Previous default joining approach takes: ORM: 57.209ms
Separate approach takes: ORM: 15.439ms

For the huge collection 2100 Products: before 12s after 1.029s

Result SQL query will look like:
```
SELECT `value_id`, `store_id`, `value`, `attribute_id`, `entity_id` FROM `catalog_product_entity_varchar` AS `CatalogProductEntityVarchar` WHERE (`CatalogProductEntityVarchar`.`entity_id` IN (57, 58, 77, 89);
```

# Executing RAW SQL queries against Magento Database

As there are often use cases in which it is just easier to execute raw / already prepared SQL queries, you can use the sequelize.query method.

By default, the function will return two arguments - a results array, and an object containing metadata (such as amount of affected rows, etc). Note that since this is a raw query, the metadata are dialect-specific. Some dialects return the metadata "within" the results object (as properties on an array). However, two arguments will always be returned, but for MSSQL and MySQL it will be two references to the same object.

```
const [results, metadata] = await sequelize.query("UPDATE users SET y = 42 WHERE x = 12");
// Results will be an empty array and metadata will contain the number of affected rows.
```

In cases where you don't need to access the metadata, you can pass in a query type to tell sequelize how to format the results. For example, for a simple select query you could do:

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

The associated models will be added by Sequelize inappropriately named, automatically created field(s) in the returned objects.

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
// foo.bar will not exist since it doesn't make sense

// Assuming Foo.hasOne(Bar)
const foo = Foo.findOne({ include: Bar });
// foo.bar will be an object (possibly null if there is no associated model)
// foo.bars will not exist since it doesn't make sense

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

You can use a Lambda function to process requests from an Application Load Balancer (ELB) and API Gateway 

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

# Run Magento with Express on AWS Lambda

Preparing the Express app
Your Express application no longer needs to listen on a TCP port – API Gateway will handle the web requests. Remove the usual call to app.listen, and just export the application from the module, so it can be used in a Lambda function.
```
// app.listen(3000) // <-- find this line and delete it or comment it out
module.exports = app; // add this line
```


![NodeJento2](https://raw.githubusercontent.com/Genaker/nodegento/main/nodegento-magento2.png)

# Run Magento Microservice with Fastyfy 

Why Fastyfy.
An efficient server implies a lower cost of the infrastructure, a better responsiveness under load and happy users. How can you efficiently handle the resources of your server, knowing that you are serving the highest number of requests possible, without sacrificing security validations and handy development?

Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture. It is inspired by Hapi and Express and as far as we know, it is one of the fastest web frameworks in town.

```
// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
   // your logic here 
   reply.send('NodeJS with fastify.io')
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
```

# Magento API using Next.JS amd NodeJento

API routes provide a solution to build a public API with Next.js.

Any file inside the folder **pages/api** is mapped to **/api/*** and will be treated as an API endpoint instead of a page. <br />
OR you can create **pages/api/product/route.js** <br />
A route file allows you to create custom request handlers for a given route. The following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.


## Lets Create Product Data API 
Create file **pages/api/product.js**
```
const initModels = require("./Models/init-models");
// Magento DB connection here 
conconst conection = require("../connection");

let allMagentoModels = initModels(connection);
let {catalogProductEntity} = allMagentoModels;

const handler = async (req, res) => {
  try {
      if( req.method === "GET") {
        var Product = await catalogProductEntity.findOne({ where: {'sku': req.query.sku}});
        res.status(200).json({product: Product});
      } else {
	res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${method} Not Allowed With NextJS Magento Product API`);
    }
  } catch (err) {
    res.status(400).json({
      error_code: "product_api_error",
      message: err.message,
    });
  }
};
export default handler;

```
Now You have Product API at http://localhost:3000/api/product?sku=testSku
The next step is to move it to **pages/API/product/[sku].js** to remove query parameters. 


# Magento microservices using Metarhia Stack

Server init file: server.js

```
'use strict';

require('impress');
```

API endpoint example: application/api/nodejento/example.js
```
async () => {
  return { result: 'success', data };
};
```

## GraphQL support
Use graphql-sequelize Resolve helpers
```
import { resolver } from "graphql-sequelize";

resolver(SequelizeModel[, options]);

```
A helper for resolving GraphQL queries targeted at Magento Sequelize models or associations. 
Please take a look at the documentation to best get an idea of implementation: https://github.com/mickhansen/graphql-sequelize

# Fetch Magento app/etc/env.php config as a JSON 

To make it simple, we configure it to JSON and use it, and read config.json from the original config

```
php -r '$x = include("app/etc/env.php"); echo json_encode($x);' > config.json
```

Now we can use the magento env.php configuration file to fetch database credentials.

Example: 

```
const magentoConfig = require('./config.js');
magentoConfig.BP = "/var/www/html/magento/";
magentoConfig.getBasePath();
magentoConfig.getDBConfig().then((p)=> console.log(p));

```

Result: 

![image](https://user-images.githubusercontent.com/9213670/153312851-9c95e513-c403-4ed1-9662-0720a90b91e9.png)

## Standalone `.env` configuration (no PHP/Magento bootstrap required)

The original `config.js` shells out to PHP to read a real Magento install's
`app/etc/env.php`, which only works from inside a full Magento codebase.
`config/db.js` adds a second, independent path that reads plain `.env`
variables via `dotenv` and builds the Sequelize connection directly -- no
PHP, no Magento bootstrap, just a MySQL host/port/user/password/db. This is
what `import_products.js`, `server.js`, and the test suite all use.

```
cp .env.example .env   # then edit DB_HOST/DB_PORT/DB_NAME/DB_USER/DB_PASSWORD
```

## Magmi-Style Bulk Import

`import_products.js` is a Magmi-style batched CSV importer, matching the
same pattern used by the sibling Go, Rust, Laravel (laragento), and Python
(PyGento) implementations: resolve existing SKUs in one batched query,
bulk-insert new `catalog_product_entity` rows (relying on MySQL/InnoDB's
consecutive-auto-increment-lock guarantee for a single multi-row `INSERT`),
bucket attribute values by EAV `backend_type`, and batch-upsert each of the
5 value tables via `Model.bulkCreate(rows, { updateOnDuplicate: ['value'] })`
-- which Sequelize compiles into one genuine multi-row
`INSERT ... ON DUPLICATE KEY UPDATE` per chunk on MySQL, not N separate
statements.

```
node import_products.js products.csv --batch-size 500 --store 0 --attribute-set 4
```

Same 1000-row/13-attribute-column CSV used across this project family,
measured back-to-back in the same session as Laravel and PyGento against
the same real Magento database (see the cross-language table and
methodology note in [gogento-rust's README](https://github.com/Genaker/gogento-rust)):

| | Import (1000 rows) | Max RSS |
|---|---|---|
| Laravel, Eloquent `upsert()` | ~6.9s | 47.5 MB |
| Node.js, Sequelize `bulkCreate` upsert | ~6.9s | ~90 MB |
| Python, SQLAlchemy Core `upsert` | ~7.7s | 46.9 MB |

All three are within noise of each other on timing. Node's memory is still
somewhat higher than Laravel/PyGento (V8's baseline heap plus Sequelize's
own per-model bookkeeping for the 7 tables actually used), but is no longer
the outlier it originally was -- see below.

### Lazy model loading for the CLI (`getLiteModels`)

The importer originally called the same `getModels()` the storefront uses,
which runs `Models/init-models.js`: `require()`s all 347
sequelize-auto-generated model files and `sequelize.define()`s + associates
every one of them, regardless of which tables the caller touches. That's a
reasonable cost for `server.js` -- a long-lived process that loads it once
and keeps every model in memory for as long as the server runs -- but
`import_products.js` is a short-lived CLI process that pays that cost fresh
on *every single invocation* and only ever touches 7 of the 347 tables
(`catalog_product_entity`, its 5 EAV value tables, `eav_attribute`).

Measured in isolation (3 runs each, same host, same DB connection setup):

| | Time | 
|---|---|
| `initModels()` (full graph, 347 tables) | ~1,330ms |
| `getLiteModels([...7 tables])` (new) | ~20ms |

`config/db.js` now exposes `getLiteModels(names)`, which requires and
defines only the named models directly from their individual
sequelize-auto files (each is a self-contained
`(sequelize, DataTypes) => sequelize.define(...)` factory with no
cross-file requires) -- skipping `init-models.js` and its association
wiring entirely. `import_products.js` uses this; `server.js` is unchanged
and still uses the full `getModels()`, since a web server process
genuinely does benefit from loading the full model graph once and reusing
it for the rest of its life, rather than needing it lazy.

This is a real, verified ~65x cut in the CLI's fixed per-run overhead, and
it shows up cleanly in memory (Max RSS dropped from ~155MB to ~90MB across
5 repeated end-to-end 1000-row import runs). It does *not* show up cleanly
in the end-to-end wall-clock numbers in the table above, though -- those
are dominated by DB round-trip time on the same shared, real, actively-used
MySQL instance discussed throughout this project family's benchmarks, and
that noise (which moved the whole ORM-tier group from ~4.4-4.5s in one
session to ~6.9-7.7s in another, see gogento-rust's README) is larger than
the ~1.3s this fix saves. The fix is real and worth keeping regardless --
memory is a clean, low-noise signal for it even when total time isn't.

## Storefront

`server.js` is a small Express + EJS storefront exercising the same
read path the ORM layer is meant for: `/` (category list), `/category/:id`
(paginated product grid, real DB-level `LIMIT`/`OFFSET` via the
`catalog_category_product` link table, not in-memory pagination), and
`/product/:id` (detail page with a category breadcrumb).

```
node server.js
```

`utils/eav.js` provides the batched attribute-flattening helper
(`flattenProducts`/`flattenCategories`) used by every route: one query per
EAV value table for the *whole* batch of entity ids, never one query per
row -- the same N+1-avoidance shape as laragento's `EavFlattener` and
PyGento's `utils/eav.py`.

## Testing

```
npm test
```

12 tests via Node's built-in `node:test` runner, covering model loading,
EAV batching (including a live query-count regression test), the importer
(create + re-import-updates-in-place + missing-file), and two direct
regression tests for real bugs found in `app.js` (below). Tests that need
the database skip cleanly (rather than failing) when it isn't reachable.

## Bugs Found and Fixed

Reviewing the existing `app.js` demo route surfaced several real bugs,
independent of anything new added above:

1. **Broken response cache -- wrong key on write, and no `return` on hit.**
   The cache was written as `requestCache[req] = json` (the `req` object
   stringifies to the same key, `"[object Object]"`, on every request,
   regardless of URL) but read as `requestCache.hasOwnProperty(req.url)` (a
   different key) -- so the cache could never hit, silently defeating its
   own purpose. Even if the keys had matched, the cache-hit branch called
   `res.send(json)` with no `return`, so execution would have fallen
   through into the rest of the handler and sent a second response
   (Express raises "Cannot set headers after they are sent" in that case).
   Fixed: consistent `req.url` key on both read and write, plus a `return`
   after the cache-hit send. Regression test:
   `tests/app.test.js` ("caches by request URL and serves the cached
   response on the second call").

2. **Startup race condition on global EAV state.** `EAV`, `EavOptionsValues`,
   and `VisibleOnFront` were populated by an unawaited `Promise.all(...)`
   fired at module load, while the `/nodejento` route read them
   synchronously with no wait -- any request arriving before that promise
   resolved would crash with a `TypeError` reading a property of
   `undefined`. Fixed via an explicit `ready` promise the route `await`s
   before touching any of the three.

3. **`transpond()` crashed on any product with tier prices.** It initialized
   `dataValues.tier_price = {}` but then pushed onto `product.tier_price`
   (missing the `dataValues.` prefix, and pushing onto a plain object
   besides) -- always `undefined`, so `.push()` always threw. Fixed to
   build the array directly and assign it to `dataValues.tier_price`.
   Regression test: `tests/app.test.js` ("does not crash on a product with
   tier prices").

4. **`fetchAttributeOptionValues()`'s leftover, misleading filter.** The
   query was `select * from eav_attribute_option_value where value_id `
   -- a dangling `WHERE value_id` with nothing after it, left over from a
   commented-out `in (5459,5471)` filter. In MySQL's boolean-context
   truthiness rule this excludes rows where `value_id = 0` only (none, since
   it's an auto-increment PK starting at 1), so it silently loaded the
   *entire* table while reading like a real filter. Fixed to drop the dead
   clause and load the table explicitly, matching what it actually did.

5. **`utils/eav.js`'s own category/product mixup (caught while building
   the storefront above, not in the pre-existing code).** An early version
   of the flatten helper had one shared attribute-id cache and one shared
   `flatten()` reused for both products and categories. Product and
   category entity ids overlap numerically (both start at 1), and `name`
   has a different `attribute_id` per `entity_type_id` (73 for products, 45
   for categories in this database) with entirely separate value tables --
   so category page `/category/2` silently rendered a *product's* name
   instead of throwing or erroring. Fixed by splitting into
   type-keyed caches and separate `flattenProducts`/`flattenCategories`
   entry points. Regression test: `tests/eav.test.js` ("flattenCategory
   resolves the category name attribute, not a same-numbered product's
   name").
