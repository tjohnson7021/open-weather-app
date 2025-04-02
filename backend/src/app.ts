import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, world! <br> you can go to: <br> /status');
});

app.get('/status', (req, res) => {
    res.send('Operational!');
});

// Export the app
export default app;