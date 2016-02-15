var expression = '';

$(document).ready(function() {
    $('#post-data').on('click', clickPostData);

    $('.operation').on('click', function(){
        expression += $(this).data('operation');
        updateDisplay();
    });

    $('.number').on('click', function(){
        expression += $(this).data('number');
        updateDisplay();
    });

    $('#clear').on('click', clearForm);
});

function clickPostData() {
    event.preventDefault();
    var values = {};
    values.expression = expression;

    $('#post-form').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/data',
        data: values,
        success: function(data) {
            console.log('From Server: ', data);
            expression = '';
            $('#result').children().remove();
            $('#result').append('<p>The result is ' + data.result + '</p>');
        },
        error: function() {
            expression = '';
            $('#result').children().remove();
            $('#result').append('<p>Please enter a valid expression</p>');
        }
    });
}

function clearForm(){
    $('input').val('');
    expression = '';
    $('#display-expression').children().remove();
    $('#result').children().remove();
}

function updateDisplay(){
    $('#display-expression').children().remove();
    $('#display-expression').append('<p>' + expression + '</p>');
}