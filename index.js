const express = require('express');
const dbConection = require('./src/connectDB')
const path = require('path');

//usyguydsgfsdgf


//incializar express
const app=express();

//settings

//app.use('/public',express.static('/src/public/index.html'));

//Base de datos
dbConection();


//lecturra y parseo del body 
    app.use(express.json());


//path
const pathUser = '/user';
const pathMessage = '/msm';
const pathGroup = '/group';

//routes crud usuarios, mensajes y grupos 
app.use(pathUser, require('./src/routes/userRoutes'));
app.use(pathMessage, require('./src/routes/messageRoutes'))
app.use(pathGroup, require('./src/routes/groupRoutes'))




//listen
app.listen(3000);


console.log('listening on port 3000');