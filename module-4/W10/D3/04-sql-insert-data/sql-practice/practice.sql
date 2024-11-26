DROP TABLE IF EXISTS friends;

CREATE TABLE friends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

INSERT INTO friends (first_name, last_name)
VALUES ('Amy', 'Pond'),
       ('Rose', 'Tyler'),
       ('Martha', 'Jones'),
       ('Donna', 'Noble'),
       ('River', 'Song');


SELECT * FROM friends;


SELECT first_name, last_name FROM friends;

SELECT first_name FROM friends WHERE id = 2


SELECT id FROM friends WHERE first_name = "Rose"

SELECT first_name FROM friends WHERE id >= 3 AND id <= 5

DELETE FROM friends WHERE id > 2;


SELECT first_name, last_name FROM friends WHERE id>1 AND id<4


SELECT * FROM friends;
-- INSERT INTO friends (first_name)
-- VALUES ('Amy');

-- INSERT INTO friends (first_name, last_name)
-- VALUES ('Jenny', 'Who');
