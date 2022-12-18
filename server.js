const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Products = require('./models/products');

require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');

const PORT = process.env.PORT
const DATABASE_URI = process.env.DATABASE_URI;

mongoose.connect(DATABASE_URI);
const db = mongoose.connection;

db.on('error', (err) => console.log('an error occurred with MongoDB: ' + err.message));
db.on('connected', () => console.log(`Connected to MongoDB on ${db.host}:${db.port}`));

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));



                    ////// INDCUCES //////

// Index 
app.get('/products', (req, res) => {
    Product.find({}, (err, products) => {

    })
})








app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`);
});