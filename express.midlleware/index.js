require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const midlleware1 = require("./middleware/headers");
const middleware2 = require("./middleware/body");

// pemanggilan midlleware


// middleware pertama
app.use("/", bodyParser.json(), midlleware1);

// middleware untuk method POST pada url 
app.post("/", bodyParser.urlencoded({extended:true}), middleware2);

app.listen(process.env.PORT, () => {
    console.log("server berjalan di port" + process.env.PORT);
});