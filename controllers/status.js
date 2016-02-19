var express = require('express');
var router = express.Router();
var StatusModel = require('../models/StatusModel.js');


/*************
 * 取得預設簽核清單
 * */
router.get('/defaultList', function (req, res, next) {

    var StatusStore = new StatusModel();

    StatusStore.getDefaultList(function (result) {
        if (!result) {
            res.json({ success: 'ok', status: 990, msg: "return null." })
        } 
        else {
           //console.log(result)
           res.json({ success: 'ok', status: 100, msg: "get result.", list: result })
        }
    });
})



module.exports = router;