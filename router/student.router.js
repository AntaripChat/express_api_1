const express = require('express');
const {v4:uuid} = require('uuid');
const router = express.Router();
let students = [];
//const id = uuid();
router.get('/',(req,res)=>{
    res.send(students);
});

//------ Create data ------

router.post('/',(req,res)=>{
    const data = req.body;
    students.push({id:uuid(), ...data });
    res.send(`Hello ${data.Name},Your data Save in DataBase`)
});
//------ Get data By ID ------
router.get('/:id',(req,res)=>{
    const {id} = req.params;
    user = students.find((data)=>data.id == id);
    res.send(user);
});

//------ Delete Data-----

router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    students = students.filter(data => data.id != id);
    res.send(`${id} deleted`);
});
//console.log(id);
module.exports = router;