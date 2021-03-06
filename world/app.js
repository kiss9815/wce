
// git remote
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//img js 등 경로설정
app.use('/img',express.static('public/img'));
app.use('/css',express.static('public/css'));
app.use('/js',express.static('public/js'));
app.use('/plugins', express.static('public/plugins'))
app.use('/less', express.static('public/less'))
app.use('/switcher', express.static('public/switcher'))


app.get('/wce', function(req, res){
  res.render('blogwce');
});



app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


///////코드 넣은거

app.set('port',process.env.PORT || 3000); //포트 번호 지정

var server = app.listen(app.get('port'),function(){
  console.log("Server listening on port" + server.address().port);
})
////////

module.exports = app;
