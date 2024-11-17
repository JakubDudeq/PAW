const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'views', 'StronaGlowna.html'));
});

router.get('/o-nas', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'views', 'ONas.html'));
});

router.get('/oferta', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'views', 'Oferta.html'));
});

router.get('/kontakt', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'views', 'Kontakt.html'));
});

module.exports = router;
