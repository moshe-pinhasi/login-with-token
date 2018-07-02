const Authentication =  require('./controllers/authentication')
const passportService = require('./services/passport')
const passport = require('passport')

const requireAuth = passport.authenticate('jwt', {session: false})
const makeLogin = passport.authenticate('local', {session: false})

module.exports = (app) => {

    app.post('/signup', Authentication.signup)
    app.post('/login', makeLogin, Authentication.login)

    app.get('/', requireAuth, (req, res) => {
        res.send({message: 'hello'})
    })
}