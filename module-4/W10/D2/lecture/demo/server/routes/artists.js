

const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {

  res.send('artists')
})

router.get('/:id', (req, res) => {

  res.send('artists')
})


router.post('/', (req, res) => {

  res.send('artists')
})


router.patch('/', (req, res) => {

  res.send('artists')
})


module.exports = router;
