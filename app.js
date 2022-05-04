const express = require('express')
const connectDB = require('./config/db')
let cors = require('cors')

const path = require('path')    //Need for deployment


// Routes
const books = require(('./routes/api/books'))

const app = express()

// Connect Database
connectDB()

// cors
app.use(cors({ origin: true, credentials: true}))

// Init Middleware
app.use(express.json({ extended: false }))

// First Path
// app.get('/', (req, res) => res.send('Hello world!'));

// Use Routes
app.use('/api/books', books)

///* Heroku part here
app.use(express.static(path.join(__dirname, "client/build")))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

// Set Port number to 8082      (Updated: Change to 5000 to deploy to Heroku)
const port = process.env.PORT || 5000;

// Listen to the Set Port
app.listen(port, () => console.log(`Server running on port ${port}`));