const express = require('express');
const router = express.Router();
const dataConnection = require('../config/databaseConn');


// router.get('/', (req, res, next) => {

// });

router.get('/', (req, res, next) =>{
  dataConnection.query( 
    'SELECT * FROM fotos;', 
      (err, results, fields) =>{
        console.log(results);
        // console.log(fields);
        //   res.send('<h1>PHOTOS PAGE!!</h1>');
        res.render('photos', {fotos: results});
      }
    );
});

module.exports = router;