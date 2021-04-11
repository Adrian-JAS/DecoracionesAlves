var bcryptjs = require('bcryptjs');
const controller = {};

controller.list = function(req, res, next) {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuarios', (err, usuario) => { // usuario es un nombre generico para hacer referencia a los datos, se pudo poner o row(filas) o usuarios
            if(err) {
                res.json(err);
            }
            //console.log(usuario); Verifica si los datos estan entrando.
            if(req.session.loggedin) {
                res.render('usuarios', {
                    data: usuario,
                    login: true,
                    nombre: req.session.nombre
                });
            }else{
                return res.redirect('/admin');
            }
        });
    });
};

controller.save = async function(req, res, next) {
    const nombre = req.body.nombre;
    const rol = req.body.rol;
    const correo = req.body.correo;
    const estatus = req.body.estatus;
    const contraseña = req.body.contraseña;
    let contraseñaHash = await bcryptjs.hash(contraseña, 8);
    req.getConnection((err, conn) => {
        conn.query('SELECT correo FROM usuarios WHERE correo = ?', [correo], (err, row) =>{
            if(row.length == 0){
                conn.query('INSERT INTO usuarios set ?', [{nombre: nombre, rol: rol, contraseña: contraseñaHash, correo: correo, estatus: estatus}], async (err, row) => {
                    res.redirect('/usuarios'); 
                });
            } else {
                res.render('usuarios_create', {
                    alert: true,
                    alertTitle: "Advertencia",
                    alertMessage: "¡El correo ingresado ya esta en uso!",
                    alertIcon: "warning",
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'usuarios/create'
                })
                console.log('El correo ingresado ya se encuentra registrado')
                
            }
            
        });
    });
};

controller.edit_list = function(req, res, next) {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, row) => {
            res.render('usuarios_edit', {
                data: row[0]
            });
        });
    });
};

controller.edit_update = async function(req, res, next) {
    const { id } = req.params;
    //const newInfo = req.body;   Obtiene toda la informacion de una vez
    const nombre = req.body.nombre;
    const rol = req.body.rol;
    const correo = req.body.correo;
    const estatus = req.body.estatus;
    req.getConnection((err, conn) => {
        conn.query('UPDATE usuarios set ? WHERE id = ?', [{nombre: nombre, rol: rol, correo: correo, estatus: estatus}, id], async (err, row) => {
            res.redirect('/usuarios');
        });
    });
};

controller.delete = function(req, res, next) {
    const { id } = req.params;
    //var bool = true;
    //var activo = "Activo";
    //var inactivo= "Inactivo";
    req.getConnection((err, conn) => {
        /*if(bool){                         // Boton que cambia de estado, revisar luego.
            conn.query('UPDATE usuarios set ? WHERE id = ?', [{estatus: activo}, id], (err, row) => {
                res.redirect('/usuarios');
            });
        }else{
            conn.query('UPDATE usuarios set ? WHERE id = ?', [{estatus: inactivo}, id], (err, row) => {
                res.redirect('/usuarios');
            });
        }*/
        conn.query('DELETE FROM usuarios WHERE id = ?', [id], (err, row) => {
            res.redirect('/usuarios');
        });
    });
};

module.exports = controller;