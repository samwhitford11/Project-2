///////////////////////////
// MTB Trails Model
///////////////////////////
const mongoose = require('./connections')
const { Schema, model } = mongoose

const trailsSchema = new Schema ({
    name: String,
    location: String,
    distance: String,
    primaryDirection: String,
    difficulty: String,
    isComplete: Boolean,
    image: String,
});

const Trail = model('Trail', trailsSchema)

module.exports = Trail