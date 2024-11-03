const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const createHttpError = require('http-errors');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'StronaGlowna.html'));
});

router.get('/o-nas', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'ONas.html'));
});

router.get('/oferta', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'Oferta.html'));
});

router.get('/kontakt', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'Kontakt.html'));
});

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'paw_db'
});

router.get('/api/contact-messages', (req, res) => {
  const query = 'SELECT * FROM messages';

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Błąd serwera' });
    }
    res.json(results);
  });
});

router.get('/api/contact-messages/:id', (req, res, next) => {
  const messageId = req.params.id;
  const query = 'SELECT * FROM messages WHERE id = ?';

  db.query(query, [messageId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Server error' });
    }

    if (results.length === 0) {
      return next(createHttpError(404, 'Message not found'));
    }
    res.json(results[0]);
  });
});

module.exports = router;
