// How to fetch Magento 2 config (DB) using node JS 

const magentoConfig = require('./config.js');

magentoConfig.BP = "/var/www/html/magento/";

magentoConfig.getBasePath();

magentoConfig.getDBConfig().then((p)=> console.log(p));
