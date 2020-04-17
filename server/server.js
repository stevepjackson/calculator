const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('Server started on port:', PORT);
});

operations = [];

app.post('/calc', (req, res) => {
    console.log('In calculate POST');
    let answer = Number(req.body.firstNumber) + Number(req.body.secondNumber);
    let operation = `${req.body.firstNumber} + ${req.body.secondNumber} = ${answer}`;
    // let operation = req.body.firstNumber + '+' + req.body.secondNumber + '=' + answer;
    operations.push(operation);
    res.sendStatus(200);
    console.log(operations);
});

app.get('/calc', (req, res) => {
    console.log('In calculate GET');
    res.send(numbers);
})
