-- BASIC PHASE 1A - DROP and CREATE table
--!!START
DROP TABLE IF EXISTS trees;

CREATE TABLE trees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tree VARCHAR(32) UNIQUE,
    location VARCHAR(64),
    height_ft FLOAT,
    ground_circumference_ft FLOAT
);
--!!END

-- BASIC PHASE 1B - INSERT seed data
--!!START
INSERT INTO trees (tree, location, height_ft, ground_circumference_ft)
VALUES
  ('General Sherman', 'Sequoia National Park', 274.9, 102.6),
  ('General Grant', 'Kings Canyon National Park', 268.1, 107.5),
  ('President', 'Sequoia National Park', 240.9, 93),
  ('Lincoln', 'Sequoia National Park', 255.8, 98.3),
  ('Stagg', 'Private Land', 243, 109);
--!!END