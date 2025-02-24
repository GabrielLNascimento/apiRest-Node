"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./server/Server");
const PORTA = process.env.PORTA || 3000;
Server_1.server.listen(PORTA, () => {
    console.log(`Servidor rodando, porta: ${PORTA}`);
});
