const express = require('express')

const app = express()

// First Path

app.get('/', (req, res) => res.send('Hello world!'));

// Set Port number to 8082
const port = process.env.PORT || 8082;

// Listen to the Set Port
app.listen(port, () => console.log(`Server running on port ${port}`));