console.log('js ready');

$(document).ready(readyNow);

function readyNow() {
    console.log('jquery ready');
    getCalculations();
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
    let objectToSend = {
        firstNumber: $('#inputOne').val(),
        operator: operator,
        secondNumber: $('#inputTwo').val()
    }

    if ($('#inputOne').val() === '' || $('#inputTwo').val() === '') {
        alert('Please input two numbers!');
        return;
    }

    if (operator === '') {
        alert('Please select an operator!');
        return;
    } else {
        $.ajax({
            type: 'POST',
            url: '/calculations',
            data: objectToSend
        }).then (function(response) {
            console.log('Back from POST:', response);
        }).catch (function(error) {
            alert('Error! Check console.', error);
        });
    }
    getCalculations();
    clear();
}

function getCalculations() {
    $.ajax({
        type: 'GET',
        url: '/calculations'
    }).then (function(response) {
        console.log('Back from GET:', response);
        append(response);
    }).catch (function(error) {
        console.log('Error! Check console.', error);
    });
}

function append(response) {
    $('#display').empty();
    for (let i = 0; i < response.length; i++) {
        $('#display').append(`
        <li>${response[i]}</li>
        `);
    }
}
