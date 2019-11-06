const express = require('express');
const router = express.Router();
const { User } = require('../app/models/index');


router.get('/', async (req, res) => {
  const rp = await User.findAll();
  res.send(rp);
});

module.exports = router;
