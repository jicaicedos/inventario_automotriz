const mysql = require('mysql')

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'inventario_automotriz_db',
    user: 'root',
    password: ''
});

conexion.connect(function (error){
    if (error) {
        throw error
    } else {
        console.log("conexión exitosa")
    }
});

conexion.query('SELECT * from vehiculo', function(error, vehiculos, fields){
    if(error) throw error
    else {
        vehiculos.forEach(vehiculo => {
            console.log(vehiculo)
        });
    }
})

conexion.end();