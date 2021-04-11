var express = require('express');
var router = express.Router();

const clientesController = require('../controllers/clientesController');
const excelController = require('../controllers/excelController');

/* GET clientes. */
router.get('/', clientesController.list); //Muestra los registros
router.post('/add', clientesController.save);
router.get('/delete/:id', clientesController.delete);

router.get('/create', (req,res) => {
    res.render('clientes_create');
});

router.get('/update/:id', clientesController.edit_list);
router.post('/update/:id', clientesController.edit_update);

router.get('/excel', excelController.excelClientes);

module.exports = router;