/*
INFO: WebSockets
A WebSocket is a protocol enabling full-duplex, bi-directional,presistent communication over a single TCP connection. Unlike HTTP's request-response model, it keeps the connection open, letting both client and server send messages anytime.

INFO: Key Points
1. Begins with an HTTP Upgrade handshake using ws:// or wss://
2. After upgrade, message frames carry data in both directions
3. Ideal for real-time apps: chat, live dashboards, gaming, IoT
*/

// Usage
const ws = new Socket("wss://example.com/socket");

ws.onopen = () => { ws.send("Hello Server"); };
ws.onmessage = e => console.log("From server:", e.data);
ws.onclose = e => console.log("Connection closed");
ws.onerror = err => console.error("Error:", err);
