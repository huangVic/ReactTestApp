var express = require('express');
var router = express.Router();
var UsersModel = require('../models/UsersModel.js');


var getGuestUserData = function getGuestUserData(params) {
    return {
        id: "",
        session_token: "",
        user_name: "",
        email: "",
        logged_in: false
    };
}


/*************
 * 登入頁面
 * */
router.get('/', function (req, res, next) {
    if (req.session.user && req.session.user.logged_in) {
        res.redirect('/');
        return;
    }
    var cssList = [{ src: "/assets/css/auth.css" }];
    var jsList = [{ src: "/assets/js/authentication.js" }];
    res.render('auth', { page_title: '登入', cssList: cssList, jsList: jsList });
});


/*************
 * 取得使用者登入資訊
 * */
router.get('/getUserData', function (req, res, next) {

    var user;
    if (req.session.user && req.session.user.logged_in) {
        user = req.session.user;
    } else {
        user = getGuestUserData();
    }

    res.json({ success: 'ok', user: user });
});


/******************
 * [POST] 登入
 * ***************/
router.post('/login', function (req, res, next) {
    console.log(" ---- auth/login ----")
    console.log(" username: " + req.body.username)
    console.log(" password: " + req.body.password)

    if (req.body.password != undefined) {
        console.log(" password decode: " + new Buffer(req.body.password, 'base64').toString('binary'))
        req.body.password = new Buffer(req.body.password, 'base64').toString('binary')
    }

    if (req.session.user && req.session.user.logged_in) {
        res.redirect('/');
        return;
    }

    if (!req.body.username || !req.body.password) {
        res.json({ success: 'ok', is_login: false, status: 990, msg: "username or password not empty." })
    }
    else {
        var UsersStore = new UsersModel();
        var params = {
            username: req.body.username,
            password: req.body.password
        }
        UsersStore.login(params, function (result) {
            if (!result) {
                res.json({ success: 'ok', is_login: false, status: 991, msg: "login fail." })
            }
            else {
                console.log(" ---- UsersStore.login ----")
                var data = {
                    id: result.id,
                    sessionToken: result._sessionToken,
                    user_name: result.get("username"),
                    email: result.get("email"),
                    logged_in: true
                }
                req.session.user = data;
                res.json({ success: 'ok', is_login: true, status: 100, msg: "login success.", user: data })
            }
        })
    }
});


/******************
 * [GET] 登出
 * ***************/
router.get('/logout', function (req, res, next) {
    if (req.session.user) {
        req.session.user = getGuestUserData();
    }

    res.redirect('/');
    return;
})


module.exports = router;
