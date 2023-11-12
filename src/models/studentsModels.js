// My Frist Make Schema Model

// import mongooge
const mongoose= require('mongoose')

/*
// Make mongooge schema 
const DataSchema= mongoose.Schema({
    Name: String,
    Roll:String,
    Class:String
})

// mongoose Theke Model a convart 
const  StudentsModel= mongoose.model('Student', DataSchema);
module.exports=StudentsModel;

*/




// Make mongooge schema 
const DataSchema= mongoose.Schema({
    Name: {type:String},
    Roll:{type:String},
    Class:{type:String},
    Mobail:{type:String,
        validator:{
            validator: function (value) {
                return /^(?:(?:\+|00)88|01)?\d{11}$/.test(value)
            },
            message: "Please Give a 11 Digit mobail numbar"
        }
    }
    
},{versionKey:false});

// mongoose Theke Model a convart 
const  StudentsModel= mongoose.model('Student', DataSchema);
module.exports=StudentsModel;

