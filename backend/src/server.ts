import app from './app';

const port = process.env.PORT || 5050;


app.listen(port, () => {
    console.log(`Server is running at:${port}`);
    console.log(`Server is running at /status`);
    console.log(`Server is running at /weather/:zipcode`);
});