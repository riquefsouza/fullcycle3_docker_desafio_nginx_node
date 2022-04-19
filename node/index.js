const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')


app.get('/', (req,res) => {

    const connection = mysql.createConnection(config)

    const sql0 = `DROP TABLE IF EXISTS people`
    connection.query(sql0)

    const sql1 = `CREATE TABLE people(id int not null auto_increment, name varchar(255), primary key(id))`
    connection.query(sql1)

    const sql2 = `INSERT INTO people(name) values('Henrique')`
    connection.query(sql2)

    const sql3 = `INSERT INTO people(name) values('Rafael')`
    connection.query(sql3)

    const sql4 = `INSERT INTO people(name) values('Paulo')`
    connection.query(sql4)

    const sql5 = `INSERT INTO people(name) values('Fabricio')`
    connection.query(sql5)

    const sql6 = `INSERT INTO people(name) values('Alexandre')`
    connection.query(sql6)

    connection.query('SELECT * FROM people',  (error, data, fields)=>{
        var shtml = '<h1>Full Cycle Rocks!</h1>';

        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            shtml += '<p>' + element.name + '</p>';
        }  

        res.send(shtml); 
    });

    connection.end();
    
})



app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})

