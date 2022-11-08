const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('../SupportDeskBuild/backend/middleware/errorMiddleware')
const connectDB = require('../SupportDeskBuild/backend/config/db')

// connect to Database
connectDB()



const app = express()
const PORT = process.env.PORT || 3001;

// this is the body parser middleware
// this allows us to send raw json
app.use(express.json())
// This allows us to accept in url encoded form
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to the Support Desk API'})
})

// Routes
app.use('/api/users', require('./backend/routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})
