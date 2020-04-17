const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('Server started on port:', PORT);
});

numbers = [];

app.post('/calc', (req, res) => {
    console.log('In calculate POST');
    let number = Number(req.body.firstNumber) + Number(req.body.secondNumber)
    numbers.push(number);
    res.send(req.body);
    console.log(numbers);
});

app.get('/calc', (req, res) => {
    console.log('In calculate GET');
    res.send(numbers);
})
