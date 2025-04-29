CREATE TABLE actors (
	character_id INT PRIMARY KEY,
    name_actor VARCHAR(50) NOT NULL,
    FOREIGN KEY (character_id) REFERENCES characters(id)
		ON DELETE CASCADE
        ON UPDATE CASCADE
);

INSERT INTO actors (character_id, name_actor)
VALUES
(1, 'David Schwimmer'),
(2, 'Jennifer Aniston'),
(3, 'Lisa Kudrow');