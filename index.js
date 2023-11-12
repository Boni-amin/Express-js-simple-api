// import app
const app = require("./app");

// import dotenv middleware
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const port = process.env.RUNNING_PORT || 5500;


// Listen app
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});





// require("dotenv").config();
// const port = process.env.RUNNING_PORT || 5500;

// Connect to DB and start server
// mongoose
//     .connect(process.env.DATABASE)
//     .then(() => {
//         console.log("DB Connected")
//         app.listen(port, () => {
//             console.log(`Server Running on port ${port}`);
//         });
//     })
//     .catch((err) => console.log(err));  