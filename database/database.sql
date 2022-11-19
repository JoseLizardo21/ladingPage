USE Preregistro;
--users table
CREATE TABLE usersPre (
    id INT(11) NOT NULL,
    username VARCHAR(22) NOT NULL,
    email VARCHAR(100) NOT NULL,
    numberTel VARCHAR(9) NOT NULL
);

ALTER TABLE usersPre 
    ADD PRIMARY KEY  (id);

ALTER TABLE usersPre
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE usersPre;
