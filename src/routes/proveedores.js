var express = require('express');
var router = express.Router();

const proveedoresController = require('../controllers/proveedoresController');
const excelController = require('../controllers/excelController');

/* GET proveedores. */
router.get('/', proveedoresController.list); //Muestra los registros
router.post('/add', proveedoresController.save);
router.get('/delete/:id', proveedoresController.delete);

router.get('/create', (req,res) => {
    res.render('proveedores_create');
});

router.get('/update/:id', proveedoresController.edit_list);
router.post('/update/:id', proveedoresController.edit_update);

router.get('/excel', excelController.excelProveedores);


module.exports = router;
