const {Router} = require('express')
const User = require('./model')
const router = new Router()
const bcrypt = require('bcrypt')


  //add user
router.post('/user', (req,res,next) => {
    const user = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    }
    User.create(user)
    .then(logins => res.send(logins))
    .catch(next)
})

  module.exports= router