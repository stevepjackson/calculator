console.log('js ready');

$(document).ready(readyNow);

function readyNow() {
    console.log('jquery ready');
    $('#equals').on('click', calculate)
    $('#clear').on('click', clear);
}

function clear() {
    console.log('In clear.');
    $('#inputOne').val('');
    $('#inputTwo').val('');
    console.log('Input cleared!');
}

function calculate() {
    let objectToSend = {
        firstNumber: $('#inputOne').val(),
        secondNumber: $('#inputTwo').val()
    }
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
