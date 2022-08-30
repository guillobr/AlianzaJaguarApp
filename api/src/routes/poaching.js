const { Router } = require('express')

const Poaching = require('../model/poaching')


const router = Router()


//GET
  router.get('/', async function (req, res) {
    try {
      const poaching = await Poaching.find({})
      return res.json(poaching)
    } catch (error) {
      console.log('FALLO GET poaching', error)
    }
  })



  //GET ID
  router.get('/:id', async function (req, res) {
    const { id } = req.params
    try {
      if (id.length !== 24) throw new Error('The id have 24 characters')
      const poaching = await Poaching.findById(id)
      if (poaching === null) throw new Error('Poaching not found')
      res.status(200).json(poaching)
    } catch (err) {
      res.status(404).send(err.message)
    }
  })




  //ADD 
router.post('/addPoaching', async function (req, res) {
  const {
    country,
    place,
    date,
    time,
    postsQuantity,
    postsFrecuency,
    commercyType,
    commercyStatus,
    animal,
    animalCondition,
    quantity,
    price,
    origin,
    observador,
    other
  } = req.body
  

  try {
    
    const newPoaching = new Poaching({
        country,
        place,
        date,
        time,
        postsQuantity,
        postsFrecuency,
        commercyType,
        commercyStatus,
        animal,
        animalCondition,
        quantity,
        price,
        origin,
        observador,
        other
    })
    await newPoaching.save()

    const savePoaching = await Poaching.find({ oservador: observador })
    
   

    return res.json(newPoaching)

  } catch (err) {
    console.log('FALLO Post poaching', err.message)
  }
})



//PUT 
router.post('/update/:id', async (req, res) => {
  const { id } = req.params
  
  try {
    if (Object.keys(req.body).length === 0) throw new Error('Send propertys')
    const poaching = await Poaching.findByIdAndUpdate(id, req.body, { new: 1 })
    res.json(poaching)
  } catch (err) {
    res.status(404).send(err.message)
  }
})



//DELETE
  router.delete('/deletePoaching/:id', async (req, res) => {
    const { id } = req.params
    try {
      await Poaching.deleteOne({ _id: id })
      
  
      res.status(204).send()
    } catch {
      res.status(404)
      res.send({ error: 'ESE Poach NO EXISTE' })
    }
  })


//HIDE
  router.post('/hidePoaching/:id', async (req, res) => {
    const { id } = req.params
    try {
      if (id) {
        await Poaching.findByIdAndUpdate(id, { isActive: false })
        res.send('The poach is hidden now')
      }
    } catch (err) {
      res.status(404).send(err.message)
    }
  })
  


  //SHOW
  router.post('/showPoaching/:id', async (req, res) => {
    const { id } = req.params
    try {
      if (id) {
        await Poaching.findByIdAndUpdate(id, { isActive: true })
        res.send('The poach can be seen now')
      }
    } catch (err) {
      res.status(404).send(err.message)
    }
  })

module.exports = router