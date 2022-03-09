// import module express
const express = require('express')
// default port server 
const port = 3000;

// creat express app
const app = express();

// creat routing / bisa menggunakan express middleware
app.get('/', (req, res)=>{
    res.send('Helo Guys');
})

app.listen(port);