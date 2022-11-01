const express = require('express');
const {v4:uuid} = require('uuid');
const router = express.Router();
let teachers = [];
//const id = uuid();
//let data;
router.get('/',(req,res)=>{
    res.send(teachers);
});
router.post('/',(req,res)=>{
    const data = req.body;
    teachers.push({id:uuid(), ...data});
    res.send(`Hello ${data.Name},Your data Save in DataBase`)
});

router.get('/:id',(req,res)=>{
    const {id} = req.params;
    user = teachers.find((data)=>data.id == id);
    res.send(user);
});

router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    teachers = teachers.filter(data => data.id != id);
    res.send(`${id} deleted`);
});

module.exports = router;