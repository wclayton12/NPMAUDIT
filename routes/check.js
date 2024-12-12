const router = require('express').Router()
const check = require('../controllers/check')

router.route('/')
    .post(check)


module.exports = router