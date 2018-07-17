const express = require('express');
const app = express();
//const mysql = require('mysql');
const bodyParser = require('body-parser');
/*const connect = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'gcz_test'
});*/
const api = require('./router/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//connect.connect();

app.use('/api', api);

/*app.put('/api/list', function(req ,res){
    const sql = 'INSERT INTO list(id,content) VALUES(?,?)';
    const sqlParam = [req.body.id, req.body.content];
    connect.query(sql, sqlParam, function(err, result){
        if(err){
            res.send({
                success: false,
                message: err.message,
                data: null
            });
        }else{
            res.send({
                success: true,
                data: result
            });
        }
    })
})

app.delete('/api/list', function(req ,res){
    const sql = "DELETE FROM list where id="+ req.body.id +"";
    connect.query(sql, function(err, result){
        if(err){
            res.send({
                success: false,
                message: err.message
            });
        }else{
            res.send({
                success: true,
                message: result.message
            });
        }
    })
})*/

const server = app.listen(3000, function(){
    console.log('listen')
    const host = server.address().address;
    const port = server.address().port;
})