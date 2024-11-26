
-- .mode table

-- DROP TABLE IF EXISTS tableName;

-- CREATE TABLE tableName (id INTEGER PRIMARY KEY, name VARCHAR(50));

-- INSERT INTO tableName (name) VALUES ('brandon'),('maica');

-- SELECT * FROM tableName

DROP TABLE IF EXISTS puppies;

CREATE TABLE puppies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(50),
  age_yrs NUMERIC(3,1),
  breed VARCHAR(100),
  weight_lbs INTEGER,
  microchipped BOOLEAN
);
