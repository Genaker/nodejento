# NodeGento

NodeJS implementation of the Magento 2 ORM without using legacy PHP

This repo using Sequelize to connect to the MAgento 2 database diractly without invocation o the broken MAgento 2 PHP framework, so we won’t have to write any MYSQL queries.


Sequelize is pretty great ORM. From their website:

“Sequelize is a promise-based ORM for Node.js and io.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite and MSSQL and features solid transaction support, relations, read replication and more.”

# Concept
Models are the essence of Sequelize. A model is an abstraction that represents a table in your Magento 2,1 database. In Sequelize, it is a class that extends Model.

The model tells Sequelize several things about the entity it represents, such as the name of the table in the database and which columns it has (and their data types).

A model in Sequelize has a name. This name does not have to be the same name of the table it represents in the Magento database. Usually, models have singular names (such as User) while tables have pluralized names (such as Users), although this is fully configurable.

# Providing MAgento table name directly
You can simply tell Sequelize the name of the table directly as well:


```
sequelize.define('User', {
  // ... (attributes)
}, {
  tableName: 'Customers'
});
```

# Support of the Magento Commerce/Eterprise and Customisation also avalable

if you need customisation and mucroservice for Magento Enterprise send me an email: (yegorshytikov@gmail.com)

# Install

```
npm i sequelize
# And one of the following:
npm i mysql2
npm i mariadb
```



# The Connection
Connecting to a database
To connect to the database, you must create a Sequelize instance. This can be done by either passing the connection parameters separately to the Sequelize constructor or by passing a single connection URI:



```
const { Sequelize } = require('sequelize');

Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  'database', 
  'username', 
  'password', 
  {host: 'localhost',
   dialect:'mysql',
    define: {
      timestamps: false,
      freezeTableName: true,
    }
});

```
## Testing the connection
You can use the .authenticate() function to test if the connection is OK:

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

## Closing the connection
Sequelize will keep the connection open by default, and use the same connection for all queries. If you need to close the connection, call sequelize.close() (which is asynchronous and returns a Promise).

# Logging
By default, Sequelize will log to console every SQL query it performs. The options.logging option can be used to customize this behavior, by defining the function that gets executed every time Sequelize would log something. The default value is console.log and when using that only the first log parameter of log function call is displayed. For example, for query logging the first parameter is the raw query and the second (hidden by default) is the Sequelize object.

Common useful values for options.logging:
```
const sequelize = new Sequelize('mysql', {
  // Choose one of the logging options
  logging: console.log,                  // Default, displays the first parameter of the log function call
  logging: (...msg) => console.log(msg), // Displays all log function call parameters
  logging: false,                        // Disables logging
  logging: msg => logger.debug(msg),     // Use custom logger (e.g. Winston or Bunyan), displays the first parameter
  logging: logger.debug.bind(logger)     // Alternative way to use custom logger, displays all messages
  
 ```

# MAgento Models init script
NodeGento generates an initialization file, ./Models/init-models.js, which contains the code to load each model definition into Sequelize:

This makes it easy to import all your models into Sequelize by calling initModels(sequelize).
```
var initModels = require("./models/init-models");
...
var magentoModels = initModels(sequelize);

magentoModels.User.findAll({ where: { username: "tony" }}).then(...);
```
Alternatively, you can Sequelize.import each model (for Sequelize versions < 6), or require each file and call the returned function:

var User = require('path/to/user')(sequelize, DataTypes);

# Promises and async/await
Most of the methods provided by Sequelize are asynchronous and therefore return Promises. They are all Promises , so you can use the Promise API (for example, using then, catch, finally) out of the box.

Of course, using async and await works normally as well.

Fetching associations - Eager Loading vs Lazy Loading
The concepts of Eager Loading and Lazy Loading are fundamental to understand how fetching associations work in Sequelize. Lazy Loading refers to the technique of fetching the associated data only when you really want it; Eager Loading, on the other hand, refers to the technique of fetching everything at once, since the beginning, with a larger query.

# Lazy Loading example
const Product = await magentoModels.CatalogProductEntity.findOne(
{where: {'sku': '10665'}}
);

const hisShip = await Product.getCatalogProductEntityVarchar();


Observe that in the example above, we made two queries, only fetching the associated ship when we wanted to use it. This can be especially useful if we may or may not need the ship, perhaps we want to fetch it conditionally, only in a few cases; this way we can save time and memory by only fetching it when necessary.

Note: the getCatalogProductEntityVarchar() instance method used above is one of the methods Sequelize automatically adds to Captain instances. There are others. You will learn more about them later in this guide.

Eager Loading Example
const Product = await CatalogProductEntity.findOne({
  where: {
    sku: "10665"
  },
  include: CatalogProductEntityVarchar
});

As shown above, Eager Loading is performed in Sequelize by using the include option. Observe that here only one query was performed to the database (which brings the associated data along with the instance).

This was just a quick introduction to Eager Loading in Sequelize. There is a lot more to it, which you can learn at the dedicated guide on Eager Loading.

# Example
See test.js script
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
        // stop the auto-pluralization performed by Sequelize using the freezeTableName: true option
        freezeTableName: true
    });


var magentoModels = initModels(sequelize);

async function getProduct(){
var Product = await magentoModels.CatalogProductEntity.findOne({ where: {'sku': '24-MB01'}});
console.log(Product);

var EAV_VAR = await Product.getCatalogProductEntityVarchar();
console.log(EAV_VAR);
}

getProduct();

```

