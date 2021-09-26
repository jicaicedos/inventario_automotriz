CREATE TABLE `inventario_automotriz_db`.`vehiculo` ( 
    `placa` VARCHAR(6) NOT NULL , 
    `marca` VARCHAR(15) NULL , 
    `linea` VARCHAR(15) NULL , 
    `modelo` VARCHAR(15) NULL , 
    `cilindrada` INT NULL , 
    `color` VARCHAR(10) NULL , 
    `tipo` VARCHAR(10) NULL , 
    `clase` VARCHAR(15) NULL , 
    `propietario` VARCHAR(40) NOT NULL , 
    `identificacion` INT NOT NULL , 
    PRIMARY KEY (`placa`(6))
) ENGINE = InnoDB;

-- llenar base de datos
INSERT INTO vehiculo 
VALUES('JYI34E', 'HONDA', 'DREAM NEO', '2017', 110, 'NEGRA', 'Particular', 'solo', 'JAVIER CAICEDO', 83040450)