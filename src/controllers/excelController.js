const excel = require('exceljs');

const controller = {};


controller.excelUsuarios = function(req, res, next) {
    //Open the MySQL connection
    req.getConnection((err, con) => {
        if (err) throw err;
    
        // -> Query data from MySQL
        con.query("SELECT * FROM usuarios", function (err, usuario, fields) {
            const jsonUsuarios = JSON.parse(JSON.stringify(usuario));
            //console.log(jsonCustomers);
            /**
                [ { id: 1, address: 'Jack Smith', age: 23, name: 'Massachusetts' },
                { id: 2, address: 'Adam Johnson', age: 27, name: 'New York' },
                { id: 3, address: 'Katherin Carter', age: 26, name: 'Washington DC' },
                { id: 4, address: 'Jack London', age: 33, name: 'Nevada' },
                { id: 5, address: 'Jason Bourne', age: 36, name: 'California' } ]
            */
            
            let workbook = new excel.Workbook(); //creating workbook
            let worksheet = workbook.addWorksheet('Usuarios'); //creating worksheet
        
            //  WorkSheet Header
            worksheet.columns = [
                { header: 'ID', key: 'id', width: 10 },
                { header: 'NOMBRE', key: 'nombre', width: 30 },
                { header: 'CONTRASEÑA', key: 'contraseña', width: 60},
                { header: 'ROL', key: 'rol', width: 30 },
                { header: 'CORREO', key: 'correo', width: 60 },
                { header: 'ESTATUS', key: 'estatus', width: 30 },
            ];
        
            // Add Array Rows
            worksheet.addRows(jsonUsuarios);
        
            // Write to File
            workbook.xlsx.writeFile("usuarios.xlsx")
            .then(function() {
                console.log("file saved!");
            });
            
            // -> Check 'customer.csv' file in root project folder
        });
    });
    
}; 

controller.excelProveedores = function(req, res, next) {
    //Open the MySQL connection
    req.getConnection((err, con) => {
        if (err) throw err;
    
        // -> Query data from MySQL
        con.query("SELECT * FROM proveedores", function (err, proveedor, fields) {
            const jsonProveedores = JSON.parse(JSON.stringify(proveedor));
            //console.log(jsonCustomers);
            /**
                [ { id: 1, address: 'Jack Smith', age: 23, name: 'Massachusetts' },
                { id: 2, address: 'Adam Johnson', age: 27, name: 'New York' },
                { id: 3, address: 'Katherin Carter', age: 26, name: 'Washington DC' },
                { id: 4, address: 'Jack London', age: 33, name: 'Nevada' },
                { id: 5, address: 'Jason Bourne', age: 36, name: 'California' } ]
            */
            
            let workbook = new excel.Workbook(); //creating workbook
            let worksheet = workbook.addWorksheet('Proveedores'); //creating worksheet
        
            //  WorkSheet Header
            worksheet.columns = [
                { header: 'ID', key: 'id', width: 10 },
                { header: 'NOMBRE', key: 'nombre', width: 30 },
                { header: 'TELÉFONO', key: 'telefono', width: 60},
                { header: 'DIRECCIÓN', key: 'direccion', width: 100 },
                { header: 'ESTATUS', key: 'estatus', width: 30 },
            ];
        
            // Add Array Rows
            worksheet.addRows(jsonProveedores);
        
            // Write to File
            workbook.xlsx.writeFile("proveedores.xlsx")
            .then(function() {
                console.log("file saved!");
            });
            
            // -> Check 'customer.csv' file in root project folder
        });
    });
    
}; 


controller.excelMateriales = function(req, res, next) {
    //Open the MySQL connection
    req.getConnection((err, con) => {
        if (err) throw err;
    
        // -> Query data from MySQL
        con.query("SELECT * FROM productos", function (err, producto, fields) {
            const jsonProductos = JSON.parse(JSON.stringify(producto));
            //console.log(jsonCustomers);
            /**
                [ { id: 1, address: 'Jack Smith', age: 23, name: 'Massachusetts' },
                { id: 2, address: 'Adam Johnson', age: 27, name: 'New York' },
                { id: 3, address: 'Katherin Carter', age: 26, name: 'Washington DC' },
                { id: 4, address: 'Jack London', age: 33, name: 'Nevada' },
                { id: 5, address: 'Jason Bourne', age: 36, name: 'California' } ]
            */
            
            let workbook = new excel.Workbook(); //creating workbook
            let worksheet = workbook.addWorksheet('Materiales'); //creating worksheet
        
            //  WorkSheet Header
            worksheet.columns = [
                { header: 'ID', key: 'id', width: 10 },
                { header: 'NOMBRE', key: 'descripcion', width: 30 },
                { header: 'COSTO', key: 'costo', width: 20},
                { header: 'CANTIDAD DE ENTRADA', key: 'entrada', width: 20 },
                { header: 'CANTIDAD DE SALIDA', key: 'salida', width: 20 },
                { header: 'CANTIDAD RESTANTE', key: 'remanente', width: 20 },
                { header: 'ESTATUS', key: 'estatus', width: 30 },
            ];
        
            // Add Array Rows
            worksheet.addRows(jsonProductos);
        
            // Write to File
            workbook.xlsx.writeFile("materiales.xlsx")
            .then(function() {
                console.log("file saved!");
            });
            
            // -> Check 'customer.csv' file in root project folder
        });
    });
    
}; 

controller.excelPresupuestos = function(req, res, next) {
    //Open the MySQL connection
    req.getConnection((err, con) => {
        if (err) throw err;
    
        // -> Query data from MySQL
        con.query("SELECT * FROM presupuestos", function (err, presupuesto, fields) {
            const jsonPresupuestos = JSON.parse(JSON.stringify(presupuesto));
            //console.log(jsonCustomers);
            /**
                [ { id: 1, address: 'Jack Smith', age: 23, name: 'Massachusetts' },
                { id: 2, address: 'Adam Johnson', age: 27, name: 'New York' },
                { id: 3, address: 'Katherin Carter', age: 26, name: 'Washington DC' },
                { id: 4, address: 'Jack London', age: 33, name: 'Nevada' },
                { id: 5, address: 'Jason Bourne', age: 36, name: 'California' } ]
            */
            
            let workbook = new excel.Workbook(); //creating workbook
            let worksheet = workbook.addWorksheet('Presupuestos'); //creating worksheet
        
            //  WorkSheet Header
            worksheet.columns = [
                { header: 'ID', key: 'id', width: 10 },
                { header: 'CLIENTE', key: 'cliente', width: 30 },
                { header: 'DIRECCION', key: 'direccion', width: 60},
                { header: 'TELÉFONO', key: 'telefono', width: 20 },
                { header: 'EMISIÓN', key: 'emision', width: 20 },
                { header: 'DESCRIPCIÓN', key: 'descripcion', width: 50 },
                { header: 'TOTAL', key: 'total', width: 14 },
                { header: 'ESTATUS', key: 'estatus', width: 30 },
            ];
        
            // Add Array Rows
            worksheet.addRows(jsonPresupuestos);
        
            // Write to File
            workbook.xlsx.writeFile("presupuestos.xlsx")
            .then(function() {
                console.log("file saved!");
            });
            
            // -> Check 'customer.csv' file in root project folder
        });
    });
    
}; 


controller.excelClientes = function(req, res, next) {
    //Open the MySQL connection
    req.getConnection((err, con) => {
        if (err) throw err;
    
        // -> Query data from MySQL
        con.query("SELECT * FROM clientes", function (err, cliente, fields) {
            const jsonClientes = JSON.parse(JSON.stringify(cliente));
            //console.log(jsonCustomers);
            /**
                [ { id: 1, address: 'Jack Smith', age: 23, name: 'Massachusetts' },
                { id: 2, address: 'Adam Johnson', age: 27, name: 'New York' },
                { id: 3, address: 'Katherin Carter', age: 26, name: 'Washington DC' },
                { id: 4, address: 'Jack London', age: 33, name: 'Nevada' },
                { id: 5, address: 'Jason Bourne', age: 36, name: 'California' } ]
            */
            
            let workbook = new excel.Workbook(); //creating workbook
            let worksheet = workbook.addWorksheet('Clientes'); //creating worksheet
        
            //  WorkSheet Header
            worksheet.columns = [
                { header: 'ID', key: 'id', width: 10 },
                { header: 'NOMBRE', key: 'nombre', width: 30 },
                { header: 'DIRECCION', key: 'direccion', width: 60},
                { header: 'TELÉFONO', key: 'telefono', width: 20 }, 
                { header: 'ESTATUS', key: 'estatus', width: 30 },
            ];
        
            // Add Array Rows
            worksheet.addRows(jsonClientes);
        
            // Write to File
            workbook.xlsx.writeFile("clientes.xlsx")
            .then(function() {
                console.log("file saved!");
            });
            
            // -> Check 'customer.csv' file in root project folder
        });
    });
    
}; 


module.exports = controller;

