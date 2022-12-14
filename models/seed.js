require('dotenv').config()
const mongoose = require('./connections')
const Trail = require('./trail')


mongoose.connection.on('open', () => {

    const startingTrails = [
        {name: "Dirty Dozen", location: "Winter Park", distance: "2,849 ft", primaryDirection: "Downhill", difficulty: "black diamond", isComplete: false },
        {name: "The Glades", location: "Boulder", distance: "5,165 ft", primaryDirection: "Downhill", difficulty: "blue", isComplete: true },
        {name: "Aspen Alley", location: "Breckenridge", distance: "1.3 miles", primaryDirection: "Downhill", difficulty: "blue", isComplete: true },
        {name: "Raleigh Peak", location: "Buffalo Creek", distance: "10 miles", primaryDirection: "Both Directions", difficulty: "Blue", isComplete: false },
        {name: "Ute Valley", location: "Colorado Springs", distance: "1 mile", primaryDirection: "Both Directions", difficulty: "Green", isComplete: true },
        
    ]
// Detleing and creating MTB trails
    Trail.deleteMany({}, (err, data) => {
        Trail.create(startingTrails, (err, data) => {
            console.log(data)
            mongoose.connection.close();
        })
    })
})
