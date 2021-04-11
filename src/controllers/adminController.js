var bcryptjs = require('bcryptjs');
const controller = {};

controller.auth = async function(req, res, next) {
    const nombre = req.body.nombre;
    const contraseña = req.body.contraseña;
    req.getConnection((err, conn) => {
        if(nombre && contraseña){
            conn.query('SELECT * FROM usuarios WHERE nombre = ?', [nombre], async (err, row) =>{
                if(row.length == 0 || !(await bcryptjs.compare(contraseña, row[0].contraseña))){
                    res.render('admin',{
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "Usuario y/o Contraseña Incorrectas.",
                        alertIcon: "error",
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'admin'
                    });
                }else{
                    req.session.loggedin = true;
                    req.session.nombre = row[0].nombre;
                    res.render('admin',{
                        alert: true,
                        alertTitle: "Conexión Exitosa",
                        alertMessage: "¡Inicio de sesión correcto!",
                        alertIcon: "success",
                        showConfirmButton: false,
                        timer: 2000,
                        ruta: 'usuarios'
                    });
                }
            });
        }else{
            res.render('admin',{
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "¡Por favor, ingrese un Usuario y/o Contraseña!",
                alertIcon: "warning",
                showConfirmButton: true,
                timer: false,
                ruta: 'admin'
            });
        }
    });
};

controller.forgot_auth = function(req, res, next){
    const correo = req.body.correo;
    req.getConnection((err, conn) => { 
        if(correo){
            conn.query('SELECT correo FROM usuarios WHERE correo = ?', [correo], (err, result) =>{
                if(result.length == 0){
                    res.render('admin_forgot_auth',{
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "Correo electrónico incorrecto, intentelo de nuevo.",
                        alertIcon: "error",
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'admin/forgot'
                    });

                }else{
                    res.render('admin_forgot_auth',{
                        alert: true,
                        alertTitle: "Correo Electrónico Verificado.",
                        alertMessage: "¡El correo electrónico ha sido verificado!",
                        alertIcon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                        ruta: 'admin/forgot/change'          //buscar la forma de psar el id
                    });
                }
            });
        }else{
            res.render('admin_forgot_auth',{
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "¡Por favor, ingrese un Correo Electrónico!",
                alertIcon: "warning",
                showConfirmButton: true,
                timer: false,
                ruta: 'admin/forgot'
            }); 
        }
    });
};

controller.forgot_change = async function(req, res, next){
    const correo = req.body.correo;
    const nombre = req.body.nombre;
    const contraseña = req.body.contraseña;
    let contraseñaHash = await bcryptjs.hash(contraseña, 8);
    req.getConnection((err, conn) => {
        conn.query('UPDATE usuarios set ? WHERE correo = ?', [{nombre: nombre, contraseña: contraseñaHash}, correo], async (err, row) => {
            if(err) {
                res.json(err);
            }else{
                res.render('admin_forgot_change',{
                    alert: true,
                    alertTitle: "¡Usuario Actualizado!",
                    alertMessage: "¡El usuario, la contraseña y el correo electrónico han sido restablecidos!",
                    alertIcon: "success",
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'admin'
                });
            }
        });
    });
};

module.exports = controller;