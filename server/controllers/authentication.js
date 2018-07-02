const User = require('../models/user.model')
const jwt = require('jwt-simple')
const config = require('../config')


function tokenForUser(user) {
    const timestamp = Date.now()
    return jwt.encode({sub: user.id, timestamp}, config.secret)
}

exports.login = (req, res, next) => {
    res.send({token: tokenForUser(req.user)})
}

exports.signup = (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    
    if (!email || !password) {
        return res.status(422).send({error: 'You must provide email and password!'})
    }

    User.findOne({email: email}, (err, existingUser) => {
        if (err) return next(err)

        if (existingUser) {
            return res.status(422).send({error: 'Email already exist'})
        }

        const user = new User({email, password})
        user.save( (error) => {
            if (err) return next(err)
    
            res.json({token: tokenForUser(user)})
        })
    })
}