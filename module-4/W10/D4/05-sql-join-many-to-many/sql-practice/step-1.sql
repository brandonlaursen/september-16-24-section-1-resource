-- Step 1
-- Connecting both sides of a many-to-many relationship involves JOINing the
-- join table on to one side of the relationship, then JOINing the other side
-- on to the join table.
-- Your code here

-- SELECT bands.name, albums.title
-- FROM albums
-- JOIN bands
-- ON albums.band_id = bands.id;


-- MANY TO MANY
SELECT musicians.first_name, instruments.type
FROM musicians
JOIN musician_instruments
ON musicians.id = musician_instruments.musician_id
JOIN instruments
On instruments.id = musician_instruments.instrument_id


-- SELECT musicians.first_name, instruments.type
-- FROM musicians
-- JOIN instruments
-- On instruments.id = musician_instruments.instrument_id
-- JOIN musician_instruments
-- ON musicians.id = musician_instruments.musician_id


-- SELECT musicians.first_name, instruments.type
-- FROM musicians
-- JOIN instruments
-- ON musicians.id = musician_instruments.musician_id
-- JOIN musician_instruments
-- On instruments.id = musician_instruments.instrument_id


SELECT musicians.first_name, instruments.type
FROM musicians
JOIN instruments
ON musician_instruments.musician_id = musicians.id
JOIN musician_instruments
On instruments.id = musician_instruments.instrument_id
