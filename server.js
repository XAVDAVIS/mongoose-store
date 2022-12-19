const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Products = require('./models/products');
const data = require('./data');

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

                    ///// SEED ROUTE ////
// Seed Route
app.get('/store/seed', (req, res) => {
    // delete ther records from the collection 
    Products.deleteMany({}, (err) => {
        // create a seperate file of records for representing the store 
        // add the new records (seed data) to the collection 
        Products.create(data, (err) => {
            // redirect user to store index
            res.redirect('/store');
        });
    });
});

                    ////// INDCUCES //////

// Index 
app.get('/store', (req, res) => {
    Products.find({}, (err, myProds) => {
        res.render('index.ejs', { myProds });
    });
});

// New 
app.get('/store/new', (req, res) => {
    res.render('new.ejs');
})

// Delete 


// Update 
app.put('/store:id', (req, res ) => {
    Products.findByIdAndUpdate(req.params.id, req.body, {new: true }, (err, myProds) => {
        res.redirect('/store')
    })
})

// Create 
app.post('/store', (req, res) => {
    Products.create(req.body, (err, myProds) => {
        res.redirect('/store');
    });
});

// Edit 
app.get('/store/:id/edit', (req, res) => {
    Products.findById(req.params.id, (err, myProds) => {
        res.render('edit.ejs', { myProds });
    });
});

// Show







app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`);
});