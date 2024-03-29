var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');

require('dotenv').config();
var bugsRouter = require('./routes/bugs');
var usersRouter = require('./routes/users');
var projectsRouter = require('./routes/projects')
var app = express();
app.use(
  cors({
    origin: 'http://localhost:4700',
    credentials: true,
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/bugs', bugsRouter);
app.use('/users', usersRouter);
app.use('/projects', projectsRouter);

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, keepAlive: 1});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongoose')
});







// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;
