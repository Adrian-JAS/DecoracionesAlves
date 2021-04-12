const controller = {};

controller.list = function(req, res, next) {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM registromateriales', (err, row) => { // usuario es un nombre generico para hacer referencia a los datos, se pudo poner o row(filas) o usuarios
            if(err) {
                res.json(err);
            }
            //console.log(usuario); Verifica si los datos estan entrando.
            if(req.session.loggedin) {
                res.render('registroMateriales', {
                    data: row,
                    login: true,
                    nombre: req.session.nombre
                });
            }else{
                return res.redirect('/admin');
            }
        });
    });
  };

controller.save = function(req, res, next) {
    const nombre = req.body.nombre;
    const estatus = req.body.estatus;
    const cantidad = req.body.cantidad;
    const fecha = req.body.fecha;
    var totalEntrada = totalEntrada + cantidad;
    var totalSalida = totalSalida - cantidad
    var total = totalEntrada - totalSalida;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO registromateriales set ?', [{nombre: nombre, estatus: estatus, cantidad: cantidad, fecha: fecha}], (err, row) => {
            if(row.estatus == 'Entrada'){
                conn.query('UPDATE productos set remanente = ? WHERE descripcion = ?', [totalEntrada, nombre]);

            } else if(row.estatus == 'Salida') {
                conn.query('UPDATE productos set remanente = ? WHERE descripcion = ?', [total, nombre]);

            }
            res.redirect('/registroMateriales');
        });
    });
};

controller.edit_list = function(req, res, next) {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM registromateriales WHERE id = ?', [id], (err, row) => {
            res.render('registroMateriales_edit', {
                data: row[0]
            });
        });
    });
};

controller.edit_update = function(req, res, next) {
    const { id } = req.params;
    const newInfo = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE registromateriales set ? WHERE id = ?', [newInfo, id], (err, row) => {
            res.redirect('/registroMateriales');
        });
    });
};

controller.delete = function(req, res, next) {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM registromateriales WHERE id = ?', [id], (err, row) => {
            res.redirect('/registroMateriales');
        });
    });
};

controller.materialesList = function(req, res, next) {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM productos', (err, row) => {
            res.render('registroMateriales_create', {
                datos: row
            });
        });
    });
}

module.exports = controller;