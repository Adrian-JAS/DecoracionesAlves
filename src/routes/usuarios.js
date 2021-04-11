var express = require('express');
var router = express.Router();

const usuariosController = require('../controllers/usuariosController');
const backupController = require('../controllers/backupController');
const restoreController = require('../controllers/restoreController');
const excelController = require('../controllers/excelController');


/* GET usuarios. */
router.get('/', usuariosController.list); //Muestra los registros

router.get('/create', (req,res) => {
    res.render('usuarios_create');
});
router.post('/add', usuariosController.save);

router.get('/delete/:id', usuariosController.delete);

router.get('/update/:id', usuariosController.edit_list);
router.post('/update/:id', usuariosController.edit_update);

router.get('/backup', backupController.backupDatabase);

router.get('/restore', restoreController.restoreDatabase);

router.get('/excel', excelController.excelUsuarios);

module.exports = router;
