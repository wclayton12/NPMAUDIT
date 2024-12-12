const router = require('express').Router()
const logout = require('../controllers/logout')

router.route('/')
    .post(logout)


module.exports = router