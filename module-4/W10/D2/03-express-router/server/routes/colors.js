const express = require('express');

const router = express.Router();

router.get("/", async(req, res) => {

  const data = await fetch();
  
  res.json("GET /colors");
});

router.get("/:name", (req, res) => {
  // console.log('do we make it?')
  res.json(`GET /colors/${req.params.name}`);
});


module.exports = router;
