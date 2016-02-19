var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var SessionFilter = require('./common/SessionFilter');  //登入驗證

/**
 * Express 模組
 */
var app = express();


/**
 * 模板引擎
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ resave: true, saveUninitialized: true, secret: 'ab1ced3fghi4jklmnopqrstuwvxyz', cookie: { maxAge: 60000*30 } }));
app.use(express.static(path.join(__dirname, 'src')));


/**
 * Express 路由器
 */
//app.use(SessionFilter);
app.use(require('./controllers'));



/**
 * [ error handlers ]
 * 捕捉 404 錯誤
 */
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



/**
 * [ error handlers ]
 * 顯示錯誤訊息 (開發模式)
 */
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}


/**
 * [ error handlers ]
 * 顯示錯誤訊息 (正式)
 */
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
