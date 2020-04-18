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
    $('#one').on('click', one);
    $('#two').on('click', two);
    $('#three').on('click', three);
    $('#four').on('click', four);
    $('#five').on('click', five);
    $('#six').on('click', six);
    $('#seven').on('click', seven);
    $('#eight').on('click', eight);
    $('#nine').on('click', nine);
    $('#zero').on('click', zero);
    $('#dot').on('click', dot);
}

function one() {
    $('#input').val($('#input').val()+$(this).val());
}
function two() {
    $('#input').val($('#input').val()+$(this).val());
}
function three() {
    $('#input').val($('#input').val()+$(this).val());
}
function four() {
    $('#input').val($('#input').val()+$(this).val());
}
function five() {
    $('#input').val($('#input').val()+$(this).val());
}
function six() {
    $('#input').val($('#input').val()+$(this).val());
}
function seven() {
    $('#input').val($('#input').val()+$(this).val());
}
function eight() {
    $('#input').val($('#input').val()+$(this).val());
}
function nine() {
    $('#input').val($('#input').val()+$(this).val());
}
function zero() {
    $('#input').val($('#input').val()+$(this).val());
}
function dot() {
    $('#input').val($('#input').val()+$(this).val());
}

let operator = '';

function add() {
    console.log('add');
    $('#input').val($('#input').val()+$(this).val());
    operator = '+';
}

function subtract() {
    console.log('subtract');
    $('#input').val($('#input').val()+$(this).val());
    operator = '-';
}

function multiply() {
    console.log('multiply');
    $('#input').val($('#input').val()+$(this).val());
    operator = '*';
}

function divide() {
    console.log('divide');
    $('#input').val($('#input').val()+$(this).val());
    operator = '/';
}

function clear() {
    $('#input').val('');
}

function calculate() {
    let string = $('#input').val();
    let stringArray = string.split(' ');
    console.log(stringArray);
    let objectToSend = {
        operation: stringArray,
    }
    // if (newString[1] === '+') {
    //     let answer = Number(newString[0]) + Number(newString[2]);
    //     console.log(answer);
    // }
    // let objectToSend = {
    //     firstNumber: $('#input').val(),
    //     operator: operator,
    // }

    if ($('#input').val() === '') {
        alert('Please input two numbers!');
        return;
    } else if (operator === '') {
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
    console.log(response);
    for (let i = 0; i < response.length; i++) {
        $('#display').append(`
        <li>${response[i]}</li>
        `);
    }
}
