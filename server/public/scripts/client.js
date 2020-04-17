console.log('js ready');

$(document).ready(readyNow);

function readyNow() {
    console.log('jquery ready');
    $('#equals').on('click', calculate);
    $('#clear').on('click', clear);
    $('#add').on('click', add);
    $('#subtract').on('click', subtract);
    $('#multiply').on('click', multiply);
    $('#divide').on('click', divide);
}

let operator = '';

function add() {
    console.log('add');
    operator = '+';
}

function subtract() {
    console.log('subtract');
    operator = '-';
}

function multiply() {
    console.log('multiply');
    operator = '*';
}

function divide() {
    console.log('divide');
    operator = '/';
}

function clear() {
    $('#inputOne').val('');
    $('#inputTwo').val('');
}

function calculate() {
    if (operator === '') {
        alert('Please select an operator!');
        return;
    }
    if ($('#inputOne').val() === '' || $('#inputTwo').val() === '') {
        alert('Please input two numbers!');
    }

    let objectToSend = {
        firstNumber: $('#inputOne').val(),
        operator: operator,
        secondNumber: $('#inputTwo').val()
    }
    clear();
    $.ajax({
        type: 'POST',
        url: '/calc',
        data: objectToSend
    }).then (function(response) {
        console.log('Back from POST:', response);
    }).catch (function(error) {
        alert('Error! Check console.', error);
    });
}
