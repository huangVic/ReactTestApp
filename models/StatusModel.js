var DB = require('../common/DB');


var STATUS = function STATUS() {
    var exports = {}
    
    
    var getDefaultList = exports.getDefaultList = function getDefaultList(callback) {
         var StatusList = DB.Object.extend("StatusList");
         var query = new DB.Query(StatusList);
         query.ascending("status");
         query.find({
             success: function (results) {
                console.log("<< getDefaultList >> Successfully retrieved " + results.length + " scores.");
                if (callback) {
                    callback(results);
                }
            },
            error: function (error) {
                console.log("<< getDefaultList >> Error: " + error.code + " " + error.message);
                if (callback) {
                    callback(null);
                }
            }
         })
    }
    
    
    return exports;
}

module.exports = STATUS;