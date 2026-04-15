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
    res.json({name: "deepak" });
})

const uiBuildPath = path.join(__dirname, "public")

app.use(express.static(uiBuildPath));

const port = Process.env.PORT || 7000

app.listen(port, () => console.log("server started..."))