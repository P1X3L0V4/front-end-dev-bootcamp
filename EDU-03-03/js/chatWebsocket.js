// Stwórz czat, który wykorzystywał będzie serwer utworzony za pomocą platformy Node.js,
// a także protokół WebSockets, który umożliwi dwukierunkowe przesyłanie danych. Daj
// użytkownikom możliwość podania swojego pseudonimu. Zaimplementuj również
// wyświetlanie statusów, gdy ktoś dołączy do czata lub czat opuści. Wszystkie
// przesyłane wiadomości, a także statusy, powinny być widoczne dla wszystkich
// podłączonych klientów.

(function() {

var chat = {

    renderRow: function(dataObject) {
        var chatRow = document.createElement("div"),
            date = new Date(),
            time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
            message;
        chatRow.classList.add("row");
        if(dataObject.type == "status")
            message = "<span class='status'>" + dataObject.message + "</span>";
        else
            message = "<span class='name'>" + dataObject.name + "</span><span class='message'>" + dataObject.message + "</span>";
        chatRow.innerHTML = "<span class='time'>" + time + "</span>\n" + message;
        this.chatWindow.appendChild(chatRow);
        this.chatWindow.scrollTop = this.chatWindow.scrollHeight;

    },

    sendData: function(msgObject) {
        var data = JSON.stringify(msgObject);
        this.socket.send(data);
    },

    displayMessage: function(e) {
        var dataObject = JSON.parse(e.data);
        this.renderRow(dataObject);
    },

    sendMessage: function() {
        var message = this.messageInput.value;
        if(message !== "") {
            this.sendData({
                type: "message",
                message: message
            });
            this.messageInput.value = "";
        }
    },

    joinToChat: function(e) {
        var name = this.nameInput.value;
        if(name !== "") {
            this.sendData({
                type: "join",
                name: name
            });

            e.target.onclick = null;
            join.setAttribute("style", "display:none");
            message.setAttribute("style", "display:flex");
            disconnectchat.setAttribute("style", "display:block");

            this.submitButton.onclick = this.sendMessage.bind(this);
        }
    },

    stopApp: function(e) {
        message.setAttribute("style", "display:none");
        disconnectchat.setAttribute("style", "display:none");
        join.setAttribute("style", "display:flex");
        this.renderRow({
            type: "status",
            message: "Server connection lost."
        });
    },

    connectToServer: function() {
        this.socket = new WebSocket("ws://localhost:8000");
        this.socket.onmessage = this.displayMessage.bind(this);
        this.socket.onclose = this.stopApp.bind(this);

    },

    init: function() {
        if(!window.WebSocket) return;
        this.join = document.querySelector("#join");
        this.nameInput = document.querySelector("#joininput");
        this.joinButton = document.querySelector("#joinbtn");
        this.chatWindow = document.querySelector("#chatmsgs");
        this.message = document.querySelector("#message");
        this.messageInput = document.querySelector("#messageinput");
        this.submitButton = document.querySelector("#messagebtn");
        this.disconnectchat = document.querySelector("#disconnectchat");
        this.joinButton.onclick = this.joinToChat.bind(this);
        this.disconnectchat.onclick = this.stopApp.bind(this);
        this.connectToServer();
    }
}

chat.init();

})();