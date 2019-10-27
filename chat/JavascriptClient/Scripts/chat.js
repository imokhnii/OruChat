$(document).ready(function () {
    username = decodeURIComponent(location.search.substr(1)).split('&')[1];
    document.getElementById("username_holder").innerHTML = username;

    $.connection.hub.url = "http://localhost:8080/signalr";
    var chat = $.connection.chatHub;

    $.connection.hub.start().done(function () {
        chat.server.connected(username);
        $('#submitmsg').click(function () {
            chat.server.send(username, $('#usermsg').val());
            $('#usermsg').val('').focus();
        });
    });

    chat.client.greetingToUser = function () {
        document.getElementById("chatbox").innerHTML += "You're now connected to chat. Say hello to everybody! <br>";
    }

    chat.client.greetingToAll = function (name) {
        document.getElementById("chatbox").innerHTML += "User <b>" + name + "</b> has joined the chat. <br>";
    };

    chat.client.sendMessage = function (name, message) {
        document.getElementById("chatbox").innerHTML += "<b>" + name + "</b>" + " : " + message + "<br>";
    };

    chat.client.farewell = function (name) {
        document.getElementById("chatbox").innerHTML += "User <b>" + name + "</b> disconnected. <br>";
    };

    $("#exit").click(function () {
        chat.server.disconnected(username);
        window.open("../Views/authorization.html?", "_self");
    });

});