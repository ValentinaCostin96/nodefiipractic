const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.user(bodyParser.json());

app.get('/users',(req,res) =>{
    req.statusCode(200).json({
        users: [{id:1,email:"frs"}]
    });
})

app.post('/users',(req,res) =>{
    console.log(req.body);
    res.statusCode(201).json({
        success:true,
        users:req.body

    })
})

app.listen(8000, () => console.log("port 8000"));