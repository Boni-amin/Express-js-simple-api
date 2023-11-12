// Require express
const express = require('express');
// Make app object
const app = new express();
// import Router
const router = require('./src/routes/api');

// All Security Middleware Import
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const expressSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const validator = require('validator');
const jsonwebtoken = require('jsonwebtoken');
const mongoose= require('mongoose');

// Security Middleware Implement
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());



// Requset Security Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,

});
// Apply the Security rate limiting middleware to all requests
app.use(limiter);





// Mongoodb Database Connection
const URI= 'mongodb://localhost:27017/Schools';
// let OPTION={user:'',pass:''};
// mongoose.connect(URI)
//   .then(() => console.log('Connection Success Mongooges'));
mongoose
    .connect(URI)
    .then(() => {
        console.log('Connection Success Mongooges')
    })
    .catch((err) => console.log(err)); 


// Create Api router paths
app.use("/api", router);



// Home page Route
app.get("/", (req, res) => {
    res.status(200).json({status:"success",data:"This is Home Page"});
});

// Undefined route
app.get("*", (req, res) => {
    res.status(404).json({
        status: "error",
        message: "Route not found"
    });
});


// Export app
module.exports= app;