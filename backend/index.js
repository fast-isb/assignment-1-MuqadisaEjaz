/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

//const express = require('express')
import express from 'express'; // <-- Module Style import
import bodyParser from 'body-parser';

// Importing user route
import router from './routes/users.js';
// const router = require('router')

// const bodyParser = require('body-parser')

const app = express()
import cors from 'cors'
app.use(cors());
app.use(express.static("public"));
app.use(express.json()); //important for recieving api calls
const port = 5000

import AnnoucementRouter from './routes/Annoucement.js'
app.use('/api/Annoucement',AnnoucementRouter);
import ComplaintRouter from './routes/Complaint.js'
app.use('/api/Complaint',ComplaintRouter);


app.listen(port, () => {
    console.log(` app listening on port ${port}`)
})