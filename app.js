const express = require('express');
const mongoose =require('mongoose');

const app=express();
const port=4000;

const url='mongodb://127.0.0.1/express';
mongoose.connect(url,{useNewUrlParser:true});


