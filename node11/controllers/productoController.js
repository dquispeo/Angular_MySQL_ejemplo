let db = require('../models/dbconexion');

let productos = {
  listar( req, res ){
    let sql = "SELECT * FROM productos";
    db.query(sql,function(err, result){
      if( err ){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(result);
      }
    });
  },
  store( req, res ){
    val_nombre = req.body.nombre;    
    val_precio = req.body.precio;
    val_marca = req.body.marca;
    val_cantidad = req.body.cantidad;
    let sql = "INSERT INTO productos(nombre,precio,marca,cantidad) VALUES(?,?,?,?)";
    db.query(sql,[val_nombre,val_precio,val_marca,val_cantidad],function(err, newData){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(newData);
      }
    });
  },
  show( req, res ){
    val_id = req.params.id;
    let sql = "SELECT * FROM productos WHERE id=?";
    db.query(sql,[val_id],function(err, rowData){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(rowData);
      }
    });
  },
  edit( req, res ){
    val_id = req.body.id;
    val_nombre = req.body.nombre;    
    val_precio = req.body.precio;
    val_marca = req.body.marca;
    val_cantidad = req.body.cantidad;
    let sql = "UPDATE productos SET nombre=?, precio=?, marca=?, cantidad=? WHERE id=?";
    db.query(sql,[val_nombre,val_precio,val_marca,val_cantidad,val_id],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.json(newData);
      }
    });
  },
  delete( req, res ){
    val_id = req.params.id;
    let sql = "DELETE FROM productos WHERE id=?";
    db.query(sql,[val_id],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.sendStatus(200);
      }
    });
  }
}

module.exports = productos;
