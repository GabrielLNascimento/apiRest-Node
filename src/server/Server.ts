import express from 'express';

const server = express();

server.get('/', (req, res) => {
    res.send('Ola pessoal, tudo bem com vcs??');
});

export { server };