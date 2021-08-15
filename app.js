const express = require('express');
require("./db/connect");
const Student = require("./model/student");
const app = express();



app.use(express.json());
app.post("/student", async(req , res)=>{
    const user = new Student(req.body);
    try {
        const createUser = await user.save();
    res.status(201).send(createUser);
    } catch (error) {
        res.status(404).send(e)
    }

})





app.listen(8000, ()=>{
    console.log("Hello");
})