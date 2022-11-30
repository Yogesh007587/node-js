const { application } = require('express');
const express =require('express');
const app =express();
app.get('',(req,res)=>{
    res.send('Hello Kakarot, Welcome to home');
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