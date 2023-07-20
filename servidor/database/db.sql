-- creamos la base de datos
CREATE DATABASE sistema_2,;

--para eliminar una base de datos es
DROP DATABASE sistema_2;
--para entrar o aser uso de la tabla para poder despues crerar tablas es
USE sistema_2;
-- para crear una tabla es 
CREATE TABLE libros(
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NULL,
    trama TEXT NULL,
    n_paginas int(11) NULL,
    create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP NULL
)