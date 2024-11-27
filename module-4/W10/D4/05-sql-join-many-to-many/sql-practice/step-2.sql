-- Step 2
-- Just like with one-to-many relationships, you can filter one table by any
-- associated data on a connected table.
-- Your code here


SELECT musicians.first_name, musicians.last_name, instruments.type
FROM musicians
JOIN musician_instruments
ON musicians.id = musician_instruments.musician_id
JOIN instruments
On instruments.id = musician_instruments.instrument_id
WHERE instruments.type = 'piano';


SELECT first_name, last_name, type
FROM musicians
JOIN musician_instruments
ON musicians.id = musician_id
JOIN instruments
On instruments.id = instrument_id
WHERE type = 'piano';
