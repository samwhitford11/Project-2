const express = require('express')
const Trail = require('../models/trail')


//Attaching Routes
const router = express.Router()

///////////////////////
//Git Routes
//////////////////////


//Index Route
router.get('/trails', (req, res) => {
    //Trail is the mongoose model. invoke the .find method from mongoose passing in an empty object to find all docs in database that match Trail models schema
    Trail.find({})
    //.then gives access to the data found by .find method. pass a callback func to the .then to manipulate the data, trails reps the data
    .then((trails) => {
        console.log(trails, "theses are the trails")
        res.render("trails/index.ejs", {trails});
    });
});

// New Route
router.get('/trails/new', (req, res) => {
    res.render("trails/new.ejs")
});

//Show Route
router.get('/trails/:id', (req, res) => {
    const id = req.params.id

    Trail.findById(id, (err, trail) => {
        res.render('trails/show.ejs', {trail})
    });
});

//Create Route / POST
router.post("/trails", (req ,res) => {
    req.body.isComplete = req.body.isComplete === 'on' ? true: false;
    Trail.create(req.body, (err, createdTrail) => {
        console.log('created', createdTrail, err)
        res.redirect("/trails")
    });
});

// Edit Route
router.get('/trails/:id/edit', (req, res)=> {
    const id = req.params.id
    Trail.findById(id, (err, foundTrail) => {
        res.render('trails/edit.ejs', { trail: foundTrail})
    });
});

// Update Route
router.put('/trails/:id', (req, res) => {
    req.body.isComplete = req.body.isComplete === 'on' ? true: false
    Trail.findByIdAndUpdate(req.params.id, req.body,
        {new: true},(err, updateTrail) => {
            console.log(updateTrail)
            res.redirect(`/trails/${req.params.id}`)
        });
});

// Delete Route




















module.exports = router
