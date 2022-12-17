const express = require('express');
const mongoose = require('mongoose');

const Products = require('./models/products');

require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');

const PORT = process.env.PORT
const DATABASE_URI = process.env.DATABASE_URI;

mongoose.connect(DATABASE_URI);
const db = mongoose.connection;



                    ////// INDCUCES //////

// Index 
app.get('/products', (req, res) => {
    Product.find({}, (err, products) => {
        
    })
})








app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`);
});