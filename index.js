require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const dbConnection = require('./config/db');
const router = require('./src/router');

dbConnection();
app.use(express.json());
app.use(express.urlencoded({urlencoded:true}));

app.use('/',router);
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'src/views'));

app.listen(process.env.PORT,()=>{
    console.log(`listening to port ${process.env.PORT}`);
});