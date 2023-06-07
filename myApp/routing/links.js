const express=require("express");
const app=express();
const mysql=require("mysql");
const mysql2=require("mysql2");
const bodyParser=require("body-parser");

app.get("/insert",(res,req)=>{
    const {id,name,email}=req.body;
    connection.connect((err)=>{
        if (err) throw err;
        connection.query(`INSERT INTO user VALUES ('${id}','${name}','${email}')`,
        function (err,data,fields){
            if (err) throw err;
            console.log(req.body);
        });
    });
});

app.get("/select",(res,req)=>{
    connection.connect((err)=>{
        if (err) throw err;
        connection.query(`SELECT * FROM user`,
        function (err,data,fields){
            if (err) throw err;
        });
    });
});