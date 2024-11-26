
.mode table

DROP TABLE IF EXISTS samples;

CREATE TABLE samples (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);

INSERT INTO samples (name)
VALUES ('You found me!'), ('Yippee!!'), ('Yay!!!');

SELECT * FROM samples;

-- sqlite3 databaseName.db
-- .open databaseName.db
-- .read sqlFile.sql
-- .database
-- .table
-- .schema
-- .exit
-- .help

-- SQL
-- CREATE TABLE
-- INSERT INTO
