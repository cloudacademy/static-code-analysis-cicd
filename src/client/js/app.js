import $ from 'jquery';

let pending = false;

$('#get-message').on('click', () => {
    if (pending === false) {
        pending = true;
        let input = $('input[type=text][name=name]');
        let name = input.val();
        input.val('');
        $.ajax({
            type: 'POST',
            contentType: "text/plain; charset=utf-8",
            data: name,
            url: '/api',
            success: message => $('#message').html(message),
            error: response => conosle.log(response)
        }).done(() => pending = false);
    }
});

