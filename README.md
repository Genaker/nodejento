# NodeGento

NodeJS implementation of the Magento 2 ORM without using legacy PHP

This repo uses Sequelize to connect to the MAgento 2 database directly without invocation of the broken MAgento 2 PHP framework, so we won’t have to write any MYSQL queries.


Sequelize is a pretty great ORM. From their website:

“Sequelize is a promise-based ORM for Node.js and io.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite and MSSQL and features solid transaction support, relations, read replication and more.”

# Concept
Models are the essence of Sequelize. A model is an abstraction that represents a table in your Magento 2,1 database. In Sequelize, it is a class that extends Model.

The model tells Sequelize several things about the entity it represents, such as the name of the table in the database and which columns it has (and their data types).

A model in Sequelize has a name. This name does not have to be the same name of the table it represents in the Magento database. Usually, models have singular names (such as User) while tables have pluralized names (such as Users), although this is fully configurable.

# Providing MAgento table name directly
You can simply tell Sequelize the name of the table directly as well:
