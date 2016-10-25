var express = require('express');
var router = express.Router();

var ctrlMain =  require('../controllers/main');//importando os métodos contidos no main.js
var ctrlEntregas =  require('../controllers/entregas');//importando os métodos contidos no entregas.js
var ctrlContato =  require('../controllers/contato');//importando os métodos contidos no contato.js


/* GET home page. */  
router.get('/', ctrlMain.index);

/* GET Entregas page. */  
router.get('/entregas', ctrlEntregas.entregaList);

/* GET Contato page. */  
router.get('/contato', ctrlContato.contato);

module.exports = router;
