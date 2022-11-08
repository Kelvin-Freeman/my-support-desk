const asyncHandler = require('express-async-handler')
// const bcrypt = require('bryptjs')


const User = require('../models/userModel')

// this registers a new user
// the route is /api/users
// to access the route we need a token from Public to authenticate
const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body

    // validation
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please include all fields')
    }

// Find if user already exists
const userExists = await user.findOne({email})

if(userExists) {
    res.status(400)
    throw new Error('User already exists')
}

// Hash password
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, salt)

// Create user
const user = await User.create({
    name,
    email,
    password: hashedPassword
})

if(user) {
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email
    })
}   else {
    res.status(400)
    throw new error('Invalid user data')
}


})


// this is to Login the user
// the route is /api/users/login
// to access the route we need a token from Public to authenticate
const loginUser = asyncHandler(async(req, res) => {
    res.send('Login Route')
})

module.exports = {
    registerUser,
    loginUser,
}