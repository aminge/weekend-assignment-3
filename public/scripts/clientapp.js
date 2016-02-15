var operation = '';

$(document).ready(function() {
    $('#post-data').on('click', clickPostData);
    //('#get-data').on('click', clickGetData);

    $('.operation').on('click', function(){
        $('#operators').children().removeClass('selected');
        $(this).addClass('selected');
        operation = $(this).data('operation');
        console.log(operation);
    });

    $('.number').on('click', )

    $('#clear').on('click', clearForm);
});

function clickPostData() {
    event.preventDefault();
    var values = {};
    values.operation = operation;

    $.each($('#post-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    if (!values.x || !values.y || values.operation == '') {
        $('#result').children().remove();
        $('#result').append('<p>Please fill out all fields and select an operator</p>');
        return;
    }

    $('#post-form').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/data',
        data: values,
        beforeSend: function() {
            console.log('before!');
        },
        success: function(data) {
            console.log('From Server: ', data);
            $('#result').children().remove();
            $('#result').append('<p>The result is ' + data.result + '</p>');
        },
        error: function() {
            console.log('Did not work');
        }
    });
}

function clearForm(){
    $('input').val('');
    $('#operators').children().removeClass('selected');
    operation = '';
    $('#result').children().remove();
}