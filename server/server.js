const express=require('express');
const app=express();
const path = require('path');

app.use((req, res, next) => {
    res.setHeader("Allow-Control-Origin", "http://localhost:3000");
    res.setHeader("Allow-Control-Origin-Methods", "GET");
    res.setHeader("Allow-Control-Origin-Headers", "Content-Type");
    next();
})

app.use("/api/name",(req,res) => {
    res.json({name: "deepak", path: path.join(__dirname, "..","ui","build")});
})

const uiBuildPath = path.join(__dirname, "..","ui","build")

app.use(express.static(uiBuildPath));

app.listen(3100, () => console.log("server started..."))