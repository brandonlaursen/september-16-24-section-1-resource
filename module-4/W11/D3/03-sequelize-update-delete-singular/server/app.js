// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Error handling, env variables, and json middleware - DO NOT MODIFY
require('express-async-errors');
require('dotenv').config();
app.use(express.json());

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require('./db/models');

// Index of all puppies - DO NOT MODIFY
app.get('/puppies', async (req, res, next) => {
    const allPuppies = await Puppy.findAll({order: [['name', 'ASC']]});

    res.json(allPuppies);
});


// STEP 1: Update a puppy by id
app.put('/puppies/:puppyId', async (req, res, next) => {

    // extract the data the req.body
    // find the puppy in the database
    // console.log(req.params.puppyId)
    const puppy = await Puppy.findByPk(req.params.puppyId);
    // console.log(puppy)
    // key into puppy objects and updates values
    // console.log(req.body)
    const {ageYrs, weightLbs, microchipped} = req.body;
    // console.log('==>', ageYrs)

    if(ageYrs !== undefined) puppy.ageYrs = ageYrs;
    if(weightLbs !== undefined) puppy.weightLbs = weightLbs;
    if(microchipped !== undefined) puppy.microchipped = microchipped;

    // console.log(puppy)
    // save the puppy
    await puppy.save();

    // .save()
    res.json({
        message:'puppy was updated',
        puppy
    })

})


// STEP 2: Delete a puppy by id
app.delete('/puppies/:puppyId', async (req, res, next) => {
    // Your code here

    // find the puppy - findByPk
    // destroy()
    const puppy = await Puppy.findByPk(req.params.puppyId);

    await puppy.destroy();

    res.json({
        message:'puppy was ADOPTED',
        puppy
    })

})


// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
if (require.main === module) {
    const port = 8000;
    app.listen(port, () => console.log('Server is listening on port', port));
} else {
    module.exports = app;
}
