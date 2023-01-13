const WebSocket = require("ws");

const wss = new WebSocket.Server({port:5694});

wss.on("connection", (ws) => {

    console.log("[Server] A client has connected.");

    ws.on('message', (message) => {

        console.log(`[Server] Received message: ${message}`);

        ws.on('close', () => {

            console.log("[Server] Client disconnected.");
            
        });

        wss.clients.forEach(function each(client) {

                client.send(message);

        });

    });

});
