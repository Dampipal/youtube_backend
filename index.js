const express = require('express');

const app = express();

// Port 
const PORT = 3000

// routes 

app.get('/',(req,res) =>{
    res.send("WELCOME TO YOUTUBE BACKEND SERVER");
})

app.get('/list',(req,res) => {
    res.send("All list is coming .....")
})
app.get('/*',(req,res) =>{
    res.send('This Route not avilable')
})

app.listen(PORT,()=>{
    console.log(`Server run on Port ${PORT}`)
})