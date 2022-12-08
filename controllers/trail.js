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

//Show Route
router.get('/trails/:id', (req, res) => {
    const id = req.params.id

    Trail.findById(id, (err, trail) => {
        res.render('trails/show.ejs', {trail})
    });
});























module.exports = router
