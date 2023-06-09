const express=require("express");
const app=express();
const mysql=require("mysql");
const mysql2=require("mysql2");
const bodyParser=require("body-parser");
const router = express.Router();
const axios=require("axios");
const cors = require('cors');
// const usersRouter = require('/myApp/routing');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

// axios.get("http://localhost3001").then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// });

let connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"lovemysql",
    database:"newApp",
});

app.get("/view", cors(), (req,res) => {
    const sqlGet = "SELECT * FROM user";
    connection.query(sqlGet, (error, result) => {
      res.send(result);
      console.log("View Data",result.body)
    });
  });

  app.post("/insert", cors(), (req,res) => {
    const userDetail = [Object.values(req.body)]; 
     const sqlGet = "INSERT INTO user (Id,Name,Email) VALUES ?";
    connection.query(sqlGet, [userDetail], (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }
      res.send(result.body);
      console.log(req.body);
    });
  });

app.listen(3001,()=>{
    console.log("server is running....");
});





// app.get("/",(req,res)=>{
//     console.log("Basic one");
//     res.send("Index page");
// });

// // app.use('/links', usersRouter);

// app.get("/insert",(res,req)=>{
//     const {id,name,email}=req.body;
//     connection.connect((err)=>{
//         if (err) throw err;
//         connection.query(`INSERT INTO user VALUES ('${id}','${name}','${email}')`,
//         function (err,data,fields){
//             if (err) throw err;
//             res.send("insert pg...");
//         });
//     });
// });
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

