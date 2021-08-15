const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/new-student", { useNewUrlParser: true , useUnifiedTopology: true}).then(()=>{
    console.log("Connection Successfull");
}).catch(()=>{
    console.log("There is some Error");
})