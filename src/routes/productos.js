var express = require('express');
var router = express.Router();

const productosController = require('../controllers/productosController');
const excelController = require('../controllers/excelController');

/* GET productos. */
router.get('/', productosController.list); //Muestra los registros
router.post('/add', productosController.save);
router.get('/delete/:id', productosController.delete);

router.get('/create', (req,res) => {
    res.render('productos_create');
});

router.get('/update/:id', productosController.edit_list);
router.post('/update/:id', productosController.edit_update);

router.get('/excel', excelController.excelMateriales);

module.exports = router;