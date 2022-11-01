const express = require('express');
const students = require('./router/student.router');
const teachers = require('./router/teacher.router');
const app = express();

app.use(express.json());

app.use('/student',students);
app.use('/teacher',teachers);


app.listen(2000);