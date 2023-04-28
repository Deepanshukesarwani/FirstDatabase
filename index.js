//to create package.json we use npm init -y
//installing express by npm i express
//then creating a js folder to write a code
const express= require('express');
const mongoose = require('mongoose');
const userModel = require('./models/userModel');
//above we create express instance
const app= express();
app.use(express.json())
// above we create express single instance which has name app
const connection_url = 'mongodb+srv://deepanshu21153034:Cp4xVwXi3cV1PID8@cluster0.gga3l86.mongodb.net/test'
// app.use(bodyParser.urlencoded({ extended: true }));
mongoose.set('strictQuery', true);
mongoose.connect(connection_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected");
    })
app.post('/api/postdata',async(req,res)=>{
    const {name, email, phnnumber,address}=req.body;
    const newuser = await userModel({
        name,
        email,
        phnnumber,
        address
    })
    const saveuser = await newuser.save()
    res.status(200).json({
        msg:"Data submitted successfully!"
    })
 })
 app.listen(3000, ()=>{
    console.log("server Started at port no. 3000")
 });
//above we informing express to run at port number 3000

 //above we create route of our server

