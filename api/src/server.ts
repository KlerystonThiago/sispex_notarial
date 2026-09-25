import { app } from './app.js';
import { env } from './config/env.js';

const PORT = env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Healh check: http://localhost:${PORT}`);
    console.log(`Endpoint de Login: POST http://localhost:${PORT}`);
})