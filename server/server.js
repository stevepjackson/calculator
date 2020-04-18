const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('Server started on port:', PORT);
});

operations = [];

app.post('/calculations', (req, res) => {
    console.log('In calculate POST');
    if (req.body.operator === '+') {
        let answer = Number(req.body.firstNumber) + Number(req.body.secondNumber);
        let operation = `${req.body.firstNumber} + ${req.body.secondNumber} = ${answer}`;
        operations.push(operation);
    } else if (req.body.operator === '-') {
        let answer = Number(req.body.firstNumber) - Number(req.body.secondNumber);
        let operation = `${req.body.firstNumber} - ${req.body.secondNumber} = ${answer}`;
        operations.push(operation);
    } else if (req.body.operator === '*') {
        let answer = Number(req.body.firstNumber) * Number(req.body.secondNumber);
        let operation = `${req.body.firstNumber} * ${req.body.secondNumber} = ${answer}`;
        operations.push(operation);
    } else {
        let answer = Number(req.body.firstNumber) / Number(req.body.secondNumber);
        let operation = `${req.body.firstNumber} / ${req.body.secondNumber} = ${answer}`;
        operations.push(operation);
    }
    
    res.sendStatus(200);
    console.log(operations);
});

app.get('/calculations', (req, res) => {
    console.log('In calculate GET');
    res.send(operations);
})
