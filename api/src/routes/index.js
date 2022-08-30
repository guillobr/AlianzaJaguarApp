const { Router } = require('express')
const router = Router()

const sighting = require('./sighting')
const user = require('./user')
const poaching = require('./poaching') 


router.use('/sighting', sighting)
router.use('/user', user)
router.use('/poaching', poaching)


module.exports = router
