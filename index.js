import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello from Homepage.');
});

app.post('/webhooks/orders/create', (req, res) => {
    console.log('🎉 We got an order!')
    res.sendStatus(200)
})

app.listen(PORT, () => console.log(`Server running on port: hyyp://localhost:${PORT}`));