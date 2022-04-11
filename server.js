const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Order = require("./Order.js");
//import Order from './Order.cjs'

const app = express();
const DB_URL = `mongodb+srv://user:1234@cluster0.vdpwi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const PORT = 5000;
//
// const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);


// app.listen(PORT, (error) => {
//     error ? console.log(error) : console.log(`listening port ${PORT}`);
// });
app.use(express.json());

app.post('/', async (req, res) => {
    const {productId, quantity} = req.body
    const order = await Order.create({productId, quantity})
    res.status(200).json(order)


    //res.sendFile(createPath('index'))
});

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, (error) => {
            error ? console.log(error) : console.log(`listening port ${PORT}`);
        });
    } catch (e) {

    }
}

startApp()


// app.get('/products', (req, res) => {
//     res.sendFile(createPath('products'))
// });
// app.get('/products/:id', (req, res) => {
//     res.sendFile(createPath('product'))
// });
//
// app.get('/order', (req, res) => {
//     res.sendFile(createPath('order'))
// });
// app.get('/about-us', (req, res) => {
//     res.redirect('/');
// });
//
// app.use((req, res) => {
//     res
//         .status(404)
//         .sendFile(createPath('error'));
// })