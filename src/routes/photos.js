const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
//   res.send('<h1>PHOTOS PAGE!!</h1>');
  res.render('photos'); 
});

module.exports = router;