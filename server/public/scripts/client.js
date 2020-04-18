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
            url: '/add',
            data: objectToSend
        }).then (function(response) {
            console.log('Back from POST:', response);
        }).catch (function(error) {
            alert('Error! Check console.', error);
        });
    }
    //  else if (operator === '-') {
    //     $.ajax({
    //         type: 'POST',
    //         url: '/subtract',
    //         data: objectToSend
    //     }).then (function(response) {
    //         console.log('Back from POST:', response);
    //     }).catch (function(error) {
    //         alert('Error! Check console.', error);
    //     });
    // } else if (operator === '*') {
    //     $.ajax({
    //         type: 'POST',
    //         url: '/multiply',
    //         data: objectToSend
    //     }).then (function(response) {
    //         console.log('Back from POST:', response);
    //     }).catch (function(error) {
    //         alert('Error! Check console.', error);
    //     });
    // } else if (operator === '/') {
    //     $.ajax({
    //         type: 'POST',
    //         url: '/divide',
    //         data: objectToSend
    //     }).then (function(response) {
    //         console.log('Back from POST:', response);
    //     }).catch (function(error) {
    //         alert('Error! Check console.', error);
    //     });
    // }

    clear();
    
  
}
