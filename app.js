const { log } = require('console');
const express = require('express');
const path = require('path');
const app = express();
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/login',(req,res)=>{
    res.render('login');
});
app.get('/service',(req,res)=>{
    res.render('Service');
});
app.get('/test',(req,res)=>{
    res.render('Test');
}); 
app.get('/about',(req,res)=>{
    res.render('aboutus');
});
app.get('/contact',(req,res)=>{
    res.render('contactus');
});
app.get('/offered',(req,res)=>{
    res.render('offered');
});
app.get('/doctor',(req,res)=>{
    res.render('doctor');
});
app.get('/blood',(req,res)=>{
    res.render('blood');
});
app.get('/urine',(req,res)=>{
    res.render('urine');
});
app.get('/imaging',(req,res)=>{
    res.render('imaging');
});
app.get('/micro',(req,res)=>{
    res.render('microbiology');
});
app.get('/patho',(req,res)=>{
    res.render('pathology');
});
app.get('/genetic',(req,res)=>{
    res.render('genetic');
});
app.get('/cardiac',(req,res)=>{
    res.render('cardiac');
});
app.get('/infectious',(req,res)=>{
    res.render('infectious');
});
app.get('/result',(req,res)=>{
    res.render('result');
});
app.get('/role',(req,res)=>{
    res.render('Labrole');
});
app.get('/map',(req,res)=>{
    res.render('map');
});
app.get('/sample',(req,res)=>{
    res.render('sample');
});












