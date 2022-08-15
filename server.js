//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const Ws2 = require('./models/schema.js')
const seed = require('./models/seed.js')

require('dotenv').config()
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI);

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form


//___________________
// Routes
//___________________
//localhost:3000
app.get('/' , (req, res) => {
  res.send('Hello World!');
});

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));





/*==================Budget Seed====================*/

app.get('/ws2/seed', (req, res)=>{
    Ws2.create(seed, (error, data) => {})  
    res.redirect('/ws2'); 
})


// Update
// PUT /todo/:id
app.put('/ws2/:id', (req, res) => {
    if(req.body.completed === 'on'){
        req.body.completed = true;
    }else{
        req.body.completed = false;
    }
    Ws2.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedNewWs2) => {
        res.redirect('/ws2')
    })
})

// Edit
// GET /todo/:id/edit
app.get('/ws2/:id/edit', (req, res) => {
    Ws2.findById(req.params.id, (error, thisWs2) => {
        res.render(
            'edit.ejs',
            {
                ws2: thisWs2
            }
        )
    })
})


// Create
//POST /todo
    //make post
    app.post('/ws2', (req,res) => {
    if(req.body.completed === 'on'){
        req.body.completed = true;
    }else{
        req.body.completed = false;
    }
        Ws2.create(req.body, (error, newWs2) => {
            res.redirect('/ws2')
        })
    })



// Destroy
// DELETE /todo/:id
app.delete('/ws2/:id', (req, res) => {
    Ws2.findByIdAndRemove(req.params.id, (error, notWs2) => {
        res.redirect('/ws2')
    })
})

//New
//GET /todo/new
    app.get('/ws2/new', (req, res)=>{
        res.render('new.ejs');
    });


//New
//GET /todo/new
app.get('/ws2/home', (req, res)=>{
  res.render('home.ejs');
});


//Show
//Get /todo/:index
    app.get('/ws2/:id', (req, res) => {
        Ws2.findById(req.params.id, (error, ws2Item) => {
            res.render(
                'show.ejs',
                {
                    ws2: ws2Item
                }
            )
        })
    })



// Index
//GET todo
    app.get('/ws2', (req, res) => {
        Ws2.find({}, (error, allWs2) => {
            res.render(
                'index.ejs',
                {
                    ws2: allWs2
                }
            )
        })
    })
