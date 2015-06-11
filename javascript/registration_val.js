/*
* Javascript for the validation of the registration form, client side -> TODO update to jQuery
* */

$(document).ready(function() {
    // event performed when the form is submitted
    $('form[name="registrationForm"]').submit(function(event) {
        var pass = $('#password').val();
        var conf_pass = $('#conf_password').val();

        if (pass !== conf_pass) {
            event.preventDefault();
            // control and notification of password error
        }
    });

    // event performed when the password is inserted
    $('#password').change(function() {
        passwordCheck();
    })

    $('#conf_password').change(function() {
        passwordCheck();
    })
});

function passwordCheck() {
    var pass = $('#password');
    var conf_pass = $('#conf_password');
    if (pass.val() !== conf_pass.val()) {
        var div = conf_pass.parent();
        //div.class = 'form-group has-feedback has-error';
        var span = div.children('span');
        span.addClass('glyphicon-remove');
        span.removeClass('glyphicon-ok');
        span.css('color', 'red');
    } else {
        var div = conf_pass.parent();
        div.class = 'form-group has-feedback has-success';
        var span = div.children('span');
        span.addClass('glyphicon-ok');
        span.removeClass('glyphicon-remove');
        span.css('color', 'green');
    }
}