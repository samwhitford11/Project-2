const express = require('express')
const Trail = require('../models/trail')


//Attaching Routes
const router = express.Router()

///////////////////////
//Git Routes
//////////////////////


//Index Route
router.get('/trails', (req, res) => {
    Trail.find({})
    .then((trails) => {
        console.log(trails, "theses are the trails")
        res.render("trails/index.ejs", {trails});
    });
});






















module.exports = router
