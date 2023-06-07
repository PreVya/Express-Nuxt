const express=require("express");
const app=express();
const mysql=require("mysql");
const mysql2=require("mysql2");
const bodyParser=require("body-parser");
const router = express.Router();
// const usersRouter = require('/myApp/routing');

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

let connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"lovemysql",
    database:"newApp",
});

app.get("/",(req,res)=>{
    console.log("Basic one");
    res.send("Index page");
});

// app.use('/links', usersRouter);

app.get("/insert",(res,req)=>{
    const {id,name,email}=req.body;
    connection.connect((err)=>{
        if (err) throw err;
        connection.query(`INSERT INTO user VALUES ('${id}','${name}','${email}')`,
        function (err,data,fields){
            if (err) throw err;
            res.send("insert pg...");
        });
    });
});
// app.get("/select",(res,req)=>{
//     connection.connect((err)=>{
//         if (err) throw err;
//         connection.query(`SELECT * FROM user`,
//         function (err,data,fields){
//             if (err) throw err;
//         });
//     });
// });

// app.connection.connect((err)=>{
//     if(err) throw err;
//     console.log("Connected!!!");
// });

app.listen(3001,()=>{
    console.log("server is running....");
});