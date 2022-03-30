const express = require('express')
const connectDB = require('./config/db')
let cors = require('cors')

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

// Set Port number to 8082
const port = process.env.PORT || 8082;

// Listen to the Set Port
app.listen(port, () => console.log(`Server running on port ${port}`));