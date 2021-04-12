var express = require('express');
var router = express.Router();

const productosController = require('../controllers/productosController');
const excelController = require('../controllers/excelController');
const registroMaterialesController = require('../controllers/registroMaterialesController');

/* GET productos. */
router.get('/', registroMaterialesController.list); //Muestra los registros
router.post('/add', registroMaterialesController.save);
router.get('/delete/:id', registroMaterialesController.delete);

router.get('/create', registroMaterialesController.materialesList);

router.get('/update/:id', registroMaterialesController.edit_list);
router.post('/update/:id', registroMaterialesController.edit_update);

router.get('/excel', excelController.excelMateriales);

module.exports = router;