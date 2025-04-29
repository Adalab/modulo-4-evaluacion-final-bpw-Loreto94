CREATE DATABASE friends;

USE friends;

CREATE TABLE characters (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    age INT UNSIGNED
);

INSERT INTO characters (name, age)
VALUES ("Ross Gueller", 30);

INSERT INTO characters (name, age)
VALUES ("Raquel Green", 26);

INSERT INTO characters (name, age)
VALUES ("Phoebe Buffay", 34);