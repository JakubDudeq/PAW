var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(express.static(path.join(__dirname, 'static')));

  // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

app.post('/kontaktForm', (req, res) => {
  const { inp1, inp2, inp3, inp4 } = req.body;

  // Wyświetlenie danych w konsoli
  console.log(`Imię: ${inp1}`);
  console.log(`Nazwisko: ${inp2}`);
  console.log(`Email: ${inp3}`);
  console.log(`Treść wiadomości: ${inp4}`);

  // Przekierowanie na stronę główną
  res.redirect('/');
});

module.exports = app;