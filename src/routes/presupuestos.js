var express = require('express');
var router = express.Router();

const presupuestosController = require('../controllers/presupuestosController');
const excelController = require('../controllers/excelController');

/* GET presupuestos. */
router.get('/', presupuestosController.list); //Muestra los registros
router.post('/add', presupuestosController.save);
router.get('/delete/:id', presupuestosController.delete);

router.get('/create', presupuestosController.listClients);

router.get('/update/:id', presupuestosController.edit_list);
router.post('/update/:id', presupuestosController.edit_update);

router.get('/excel', excelController.excelPresupuestos);

module.exports = router;
