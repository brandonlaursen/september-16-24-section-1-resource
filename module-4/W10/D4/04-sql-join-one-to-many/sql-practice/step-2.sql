-- Step 2
-- A WHERE clause can filter across any JOINed table, even if it's not in the
-- final output of what is being SELECTed for.
-- Your code here

SELECT bands.name AS bandName, albums.title
FROM albums
JOIN bands
ON band_id = bands.id
WHERE num_sold < 20000;


-- WHERE bandName LIKE "The%"

--
