const router = require('express').Router()
const update = require('../controllers/update')

router.route('/')
    .post(update)


module.exports = router