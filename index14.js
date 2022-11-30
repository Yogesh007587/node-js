const { application } = require('express');
const express =require('express');
const app =express();
app.get('',(req,res)=>{
    console.log("data sent by browser",req.query.name)   //get data or routing with express js
    res.send(`
    <h1>Hello Kakarot, Welcome to home </h1><a href="/about">Go to About</a>
    
    `);
});

app.get('/about',(req,res)=>{

    res.send(`
    <input type="text" placeholder="User name" value="${req.query.name}"/>
    <button>Click Me</button><a href="/help">Go to help</a>

    `);
});
app.get('/help',(req,res)=>{
    res.send({
        name:'kooky',
        email:'ajaf',
    });
});
app.get('/game',(req,res)=>{
    res.send('Lets play game')
});
app.listen(4223);