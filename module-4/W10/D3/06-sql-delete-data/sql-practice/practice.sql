



SELECT * FROM puppies WHERE id = 9;

DELETE FROM puppies WHERE id = 9;

DELETE FROM puppies WHERE microchipped = 0;



-- update!

UPDATE puppies
SET weight_lbs = 30
WHERE id = 2;


UPDATE puppies
SET name = 'SCOOBY'
WHERE name = 'Zoe'
AND age_yrs = 0.8;
