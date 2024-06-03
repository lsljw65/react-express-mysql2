const express=require('express');
const app=express();
const PORT=process.env.PORT||8000;
// const db=require('./config/db.js');
const bodyParser=require('body-parser');

// config body-parser
app.use(bodyParser.json());



app.listen(PORT,()=>{
    console.log("서버실행")
    console.log(`Server On : htte://localhost:${PORT}/`);
})

// 서버 실행 node server.js