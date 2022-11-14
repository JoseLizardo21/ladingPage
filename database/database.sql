USE Preregistro;
--users table
CREATE TABLE usersPre (
    id INT(11) NOT NULL,
    username VARCHAR(22) NOT NULL,
    email VARCHAR(100) NOT NULL
);

ALTER TABLE users 
    ADD PRIMARY KEY  (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE usersPre;
