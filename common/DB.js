var db = require('avoscloud-sdk');

var config = {
    appId: process.env.AVOS_CLOUD_APP_ID || 'master-app-id',
    key: process.env.AVOS_CLOUD_MASTER_KEY || 'master-key'
};

console.log(" ==================================== ");
console.log(" AVOS: " + config.appId + " | " + config.key);
console.log(" ==================================== ");


db.initialize(config.appId, config.key);
module.exports = db;
