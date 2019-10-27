$(document).ready(function () {
    $('#submituser').click(function () {
        var username = $('#username').val();
        $('#username').val('').focus();
        window.open("../Views/chat.html?&" + username, "_self");
    });
});