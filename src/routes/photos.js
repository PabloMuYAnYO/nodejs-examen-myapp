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

router.get('/addphotos',(req, res, next) =>{
  res.render('addphotos');
});


router.post('/addphotos',(req, res, next) =>{
  console.log(req.body);
  const {titulo, url, fecha, descripcion} = req.body;
  console.log(titulo);
  console.log(url);
  console.log(fecha);
  console.log(descripcion);
  dataConnection.query(
    'INSERT INTO fotos (titulo, url, fecha, descripcion) values(?,?,?,?)', [titulo, url, fecha, descripcion],
    function(err, results, fields) {
      console.log(results); 
      res.redirect('/photos');
    }
  )
});

router.get('/editphoto/:id',(req, res, next) =>{
  let id = req.params.id;
  console.log(id);
  dataConnection.query(
    'SELECT * FROM fotos WHERE id = ?',[id],
    function(err, results, fields) {
      console.log(results);
      res.render('editphoto', {foto:results[0]});
    }
  )

});

router.post('/editphoto/:id',(req, res, next) =>{
  let id = req.params.id;
  const {titulo, url, fecha, descripcion} = req.body;
  console.log(titulo);
  console.log(url);
  console.log(fecha);
  console.log(descripcion);
  dataConnection.query(
    'UPDATE fotos SET titulo = ?, url = ?, fecha = ?, descripcion = ? WHERE id = ?', [titulo, url, fecha, descripcion, id],
    function(err, results, fields) {
      console.log(results); 
      res.redirect('/photos');
    }
  )
});


router.get('/deletephoto/:id',(req, res, next) =>{
    let id = req.params.id;
    console.log(id);
    dataConnection.query(
        'DELETE FROM fotos WHERE id = ?', [id],
        function(err, results, fields) {
            console.log(results); 
            res.redirect('/photos');
          }
    );
});

module.exports = router;