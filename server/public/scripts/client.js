console.log('js ready');

$(document).ready(readyNow);

function readyNow() {
    console.log('jquery ready');
    // $('#equals').on('click', calculate)
    $('#clear').on('click', clear)
}

function clear() {
    console.log('input cleared!');
    $('#inputOne').val('');
    $('#inputTwo').val('');
}