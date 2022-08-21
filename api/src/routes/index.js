const { Router } = require('express')
const router = Router()

const sighting = require('./sighting')
const user = require('./user')


router.use('/sighting', sighting)
router.use('/user', user)


module.exports = router
