import express from 'express';
import cors from 'cors';
import { router } from './routes/index.js';
import { timeStamp } from 'node:console';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.get('/health', (req, res) => {
    return res.json({ status: 'ok', timeStamp: new Date() });
})

export { app };