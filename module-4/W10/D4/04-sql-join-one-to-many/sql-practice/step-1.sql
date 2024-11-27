-- Step 1
-- JOIN the tables, matching FOREIGN KEYs to the corresponding PRIMARY KEY.





SELECT bands.name AS bandName, albums.title AS albumTitle
FROM albums
JOIN bands
ON albums.band_id = bands.id;
