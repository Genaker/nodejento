const {exec} = require("child_process");
const util = require('util');
const fs = require('fs');

const execp = util.promisify(exec);


let BP = '/var/www/html/magento/';

function getBasePath(){
    console.log(this.BP);
}

async function getMagentoConfig(scope = this){

let magentoFonfigFile = scope.BP + "app/etc/env.php";

if (!fs.existsSync(magentoFonfigFile)) {
    throw new Error("Magento configuration file doesn't exist");
}

const cmd = `php -r 'echo json_encode(include "${magentoFonfigFile}");'`; 
let result = await execp(cmd);
result = result.stdout;
//console.log(result);
return result;
}


async function getDBConfig(){
    //If BP was changed outside the module we need pass scope(this) of the functin to the child getMagentoConfig
    return JSON.parse(await getMagentoConfig(this)).db.connection.default;
}

module.exports = {BP, getDBConfig, getMagentoConfig, getBasePath}
