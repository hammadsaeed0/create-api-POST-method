const mongoose = require('mongoose');
const validator = require('validator');


const student = new mongoose.Schema({
    name : {
        type : String,
        require : true,
    }, 
    email : {
        type : String, 
        require : true,
        unique : true,
    }
});

const StudetModel = new mongoose.model("StudentModel", student);

module.exports = StudetModel;
