var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql2');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post('/kontaktForm', (req, res) => {
  const { inp1, inp2, inp3, inp4 } = req.body;

  console.log(`Imię: ${inp1}`);
  console.log(`Nazwisko: ${inp2}`);
  console.log(`Email: ${inp3}`);
  console.log(`Treść wiadomości: ${inp4}`);

  const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'paw_db'
  });

  const query = "INSERT INTO messages (message, name, surname, email) VALUES (?, ?, ?, ?)";
  const values = [inp4, inp1, inp2, inp3];

  db.query(query, values)

  res.redirect('/');

});





app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
