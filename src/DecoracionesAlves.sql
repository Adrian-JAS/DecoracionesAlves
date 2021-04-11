/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: clientes
# ------------------------------------------------------------

DROP TABLE IF EXISTS `clientes`;
CREATE TABLE `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
  `direccion` text NOT NULL,
  `telefono` varchar(35) NOT NULL,
  `estatus` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = latin1;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: presupuestos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `presupuestos`;
CREATE TABLE `presupuestos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cliente` varchar(150) NOT NULL,
  `direccion` text NOT NULL,
  `telefono` varchar(35) NOT NULL,
  `emision` text NOT NULL,
  `descripcion` text NOT NULL,
  `total` decimal(11, 2) NOT NULL,
  `estatus` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = latin1;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: productos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `productos`;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(800) NOT NULL,
  `costo` decimal(11, 2) NOT NULL,
  `entrada` int(11) NOT NULL,
  `salida` int(11) NOT NULL,
  `remanente` int(11) NOT NULL,
  `estatus` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 15 DEFAULT CHARSET = latin1;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: proveedores
# ------------------------------------------------------------

DROP TABLE IF EXISTS `proveedores`;
CREATE TABLE `proveedores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(500) NOT NULL,
  `telefono` varchar(35) NOT NULL,
  `direccion` text NOT NULL,
  `estatus` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = latin1;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: usuarios
# ------------------------------------------------------------

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(500) NOT NULL,
  `contraseña` varchar(500) NOT NULL,
  `rol` varchar(500) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `estatus` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 115 DEFAULT CHARSET = latin1;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: ventas
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ventas`;
CREATE TABLE `ventas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(800) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` decimal(6, 2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = latin1;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: clientes
# ------------------------------------------------------------

INSERT INTO
  `clientes` (`id`, `nombre`, `direccion`, `telefono`, `estatus`)
VALUES
  (
    1,
    'Adrian Alves',
    'Municipio Maneiro. El Retiro. Casa: \"C-1\"',
    '04248214892',
    'Activo'
  );
INSERT INTO
  `clientes` (`id`, `nombre`, `direccion`, `telefono`, `estatus`)
VALUES
  (
    2,
    'Rosa Saenz',
    'Av.Terranova',
    '04145689456',
    'Activo'
  );
INSERT INTO
  `clientes` (`id`, `nombre`, `direccion`, `telefono`, `estatus`)
VALUES
  (
    3,
    'Antonio Dos Reis',
    'Porlamar',
    '04267982412',
    'Activo'
  );
INSERT INTO
  `clientes` (`id`, `nombre`, `direccion`, `telefono`, `estatus`)
VALUES
  (4, 'Oriana', 'Juan Girego', '04248214892', 'Activo');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: presupuestos
# ------------------------------------------------------------

INSERT INTO
  `presupuestos` (
    `id`,
    `cliente`,
    `direccion`,
    `telefono`,
    `emision`,
    `descripcion`,
    `total`,
    `estatus`
  )
VALUES
  (
    1,
    'Adrian Alves',
    'Municipio Maneiro. El Retiro. Casa: \"C-1\"',
    '04248214892',
    '2021-01-13',
    'Retapizado de sofa',
    50000000.00,
    'Inactivo'
  );
INSERT INTO
  `presupuestos` (
    `id`,
    `cliente`,
    `direccion`,
    `telefono`,
    `emision`,
    `descripcion`,
    `total`,
    `estatus`
  )
VALUES
  (
    2,
    'Rosa Saenz',
    'Municipio Mariño. El no Retiro. Casa: \"C-6\"',
    '04247654856',
    '2021-04-10',
    'Arreglo de sofacama',
    200000.66,
    'Inactivo'
  );
INSERT INTO
  `presupuestos` (
    `id`,
    `cliente`,
    `direccion`,
    `telefono`,
    `emision`,
    `descripcion`,
    `total`,
    `estatus`
  )
VALUES
  (
    3,
    'Antonio Alves',
    'Municipio Maneiro. El Retiro. Casa: \"C-1\"',
    '04243478953',
    '2021-06-16',
    'Tapizado de sillas',
    1000000.99,
    'Activo'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: productos
# ------------------------------------------------------------

INSERT INTO
  `productos` (
    `id`,
    `descripcion`,
    `costo`,
    `entrada`,
    `salida`,
    `remanente`,
    `estatus`
  )
VALUES
  (1, 'Madera', 20000.00, 50, 30, 20, 'Activo');
INSERT INTO
  `productos` (
    `id`,
    `descripcion`,
    `costo`,
    `entrada`,
    `salida`,
    `remanente`,
    `estatus`
  )
VALUES
  (2, 'Tela', 30000.37, 35, 30, 5, 'Activo');
INSERT INTO
  `productos` (
    `id`,
    `descripcion`,
    `costo`,
    `entrada`,
    `salida`,
    `remanente`,
    `estatus`
  )
VALUES
  (3, 'Tornillos', 50000.00, 100, 90, 10, 'Activo');
INSERT INTO
  `productos` (
    `id`,
    `descripcion`,
    `costo`,
    `entrada`,
    `salida`,
    `remanente`,
    `estatus`
  )
VALUES
  (4, 'Grapas', 70000.00, 500, 200, 300, 'Activo');
INSERT INTO
  `productos` (
    `id`,
    `descripcion`,
    `costo`,
    `entrada`,
    `salida`,
    `remanente`,
    `estatus`
  )
VALUES
  (6, 'Hilos', 15.35, 40, 20, 20, 'Activo');
INSERT INTO
  `productos` (
    `id`,
    `descripcion`,
    `costo`,
    `entrada`,
    `salida`,
    `remanente`,
    `estatus`
  )
VALUES
  (8, 'Semi-Cuero', 100.00, 50, 20, 30, 'Activo');
INSERT INTO
  `productos` (
    `id`,
    `descripcion`,
    `costo`,
    `entrada`,
    `salida`,
    `remanente`,
    `estatus`
  )
VALUES
  (14, 'Cuero', 13.00, 200, 0, 200, 'Activo');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: proveedores
# ------------------------------------------------------------

INSERT INTO
  `proveedores` (`id`, `nombre`, `telefono`, `direccion`, `estatus`)
VALUES
  (
    1,
    'Adrian Alves',
    '04145789034',
    'Municipio Maneiro. El Retiro. Casa: \"C-1\"',
    'Activo'
  );
INSERT INTO
  `proveedores` (`id`, `nombre`, `telefono`, `direccion`, `estatus`)
VALUES
  (
    2,
    'Rosa de Alves',
    '04248214892',
    'Municipio Mariño. El Retiro. Casa: \"C-6\"',
    'Activo'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: usuarios
# ------------------------------------------------------------

INSERT INTO
  `usuarios` (
    `id`,
    `nombre`,
    `contraseña`,
    `rol`,
    `correo`,
    `estatus`
  )
VALUES
  (
    103,
    'Admin',
    '$2a$08$5MlWEIgGyLRo0RubZwB2Pu5dmEK1e0Dq.1CV0GWYWTRDxpga/3AnC',
    'Admin',
    'admin@gmail.com',
    'Activo'
  );
INSERT INTO
  `usuarios` (
    `id`,
    `nombre`,
    `contraseña`,
    `rol`,
    `correo`,
    `estatus`
  )
VALUES
  (
    104,
    'Adrian',
    '$2a$08$2aqbNGLilXzeB.pp8GEwNuVtTiOOzy.VqrpArPDjavD3YIwmvhvGG',
    'Asistente de admin',
    'adriancito1999@hotmail.com',
    'Inactivo'
  );
INSERT INTO
  `usuarios` (
    `id`,
    `nombre`,
    `contraseña`,
    `rol`,
    `correo`,
    `estatus`
  )
VALUES
  (
    105,
    'Rosa',
    '$2a$08$g7Rd0IPqMbLiLJzyEt7fROtY1t65V3A9EUIotWQVrOryx7V4n7Wj2',
    'Admin',
    'rosa@gmail.com',
    'Activo'
  );
INSERT INTO
  `usuarios` (
    `id`,
    `nombre`,
    `contraseña`,
    `rol`,
    `correo`,
    `estatus`
  )
VALUES
  (
    106,
    'Antonio',
    '$2a$08$8ylilzfrK7GCYSyUKQNfveNccUfuzYF20EbyajyvcMdMRqjX2cN8q',
    'Admin',
    'antonio@gmail.com',
    'Activo'
  );
INSERT INTO
  `usuarios` (
    `id`,
    `nombre`,
    `contraseña`,
    `rol`,
    `correo`,
    `estatus`
  )
VALUES
  (
    114,
    'Adrian',
    '$2a$08$In/HT3rQYyoaK.UzHyY7lu/i3A6IrmpX3LQxyrEjijQP.FgrduBIq',
    'Admin',
    'admin@gmail.com',
    'Activo'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: ventas
# ------------------------------------------------------------

INSERT INTO
  `ventas` (`id`, `descripcion`, `cantidad`, `precio`)
VALUES
  (1, 'Mueble', 5, 50.55);
INSERT INTO
  `ventas` (`id`, `descripcion`, `cantidad`, `precio`)
VALUES
  (2, 'Tornillo', 344, 400.00);

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
