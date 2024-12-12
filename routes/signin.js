const router = require('express').Router()
const signin = require('../controllers/signin')
const getProfile = require('../controllers/getProfile')

router.route('/')
    .post(signin)
    .get(getProfile)


module.exports = router