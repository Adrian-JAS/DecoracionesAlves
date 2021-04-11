var mysqldump = require('mysqldump');
const controller = {};


controller.backupDatabase = function(req, res, next) {
    if(mysqldump){
        mysqldump({
            connection: {
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'decoracionesalves',
            },
            dump: { schema: { table: { dropIfExist: true } } },
            dumpToFile: './DecoracionesAlves.sql',
        });
        
    }else{
        //Hacer algo aqui.
    }
};


module.exports = controller;
