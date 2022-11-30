const { application } = require('express');
const express =require('express');
const app =express();
app.get('',(req,res)=>{
    console.log("data sent by browser",req.query.name)   //get data or routing with express
    res.send('Hello Kakarot, Welcome to home '+req.query.name);
});

app.get('/about',(req,res)=>{
    res.send('Hello Kakarot, Lets go to about');
});
app.get('/help',(req,res)=>{
    res.send('Hello kakarot,help me');
});
app.get('/game',(req,res)=>{
    res.send('Lets play game')
});
app.listen(4222);