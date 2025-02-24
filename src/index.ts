import { server } from './server/Server';

const PORTA = process.env.PORTA || 3000;


server.listen(PORTA, () => {
    console.log(`Servidor rodando, porta: ${PORTA}`);
});
