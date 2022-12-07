require("dotenv").config()  // Load env variables
const express = require('express') // bring in express to make our app
const morgan = require('morgan') // nice logger for our request
const methodOverride = require('method-override') // allows us to override post request from our ejs/forms



const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express()

//////////////////////////////////////////////
//////// Middlewares
///////////////////////////////////////////////

app.use(morgan('tiny'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(
    session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL}),
    saveUnintialized: true,
    resave: false,
    })
);

// app.get('/', homeRoutes)
// app.get('/store', storeRoutes)
// app.get('/user', userRoutes)


app.get('/', (req, res) => {
    res.send("index.ejs")
});
const PORT = process.env.PORT || 4111
app.listen(PORT, ()=> console.log(`Who let the dogs out on port: ${PORT}`))