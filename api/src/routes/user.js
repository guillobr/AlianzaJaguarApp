const { Router } = require('express')
const router = Router()
const Users = require('../model/User')

router.get('/', async (req, res) => {
  try {
    const users = await Users.find()
    if (users.length === 0) throw new Error('Users is empty')
    res.json(users)
  } catch (error) {
    res.send(error.message)
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const userId = await Users.findById(id)
    if (userId) throw new Error('User not found')
    res.json(userId)
  } catch (error) {
    res.send(error.message)
  }
})

router.post('/addUser', async (req, res) => {
  const { nickname, name, email} = req.body
  try {
    const userExists = await Users.findOne({ email })

    if (userExists) return res.json([userExists])

    let isSuperAdmin = false
    let isAdmin=false
    if (email === 'guillermobr88@gmail.com') isSuperAdmin = true

    const newUser = new Users({
      nickname,
      name,
      email,
      isAdmin,
      isSuperAdmin,
    })
    await newUser.save()

    const user = await Users.find({ email })

    res.json([user])
  } catch (error) {
    res.status(404).send(error.message)
  }
})

router.put('/updateUser/:id', async (req, res) => {
  const { id } = req.params
  try {
    if (Object.keys(req.body).length === 0) throw new Error('Send propertys')
    const user = await Users.findByIdAndUpdate(id, req.body, { new: 1 })
    res.json(user)
  } catch (error) {
    res.send(error.message)
  }
})

router.post('/toggleAdmin', async (req, res) => {
  const { id } = req.query
  const userIds = req.body
  try {
    if (userIds) {
      userIds.forEach(async (id) => {
        const user = await Users.findById(id)

        if (!user) throw new Error('The user not exists')
        if (user.isAdmin) {
          user.isAdmin = false
          await user.save()
        } else {
          user.isAdmin = true
          await user.save()
        }
      })

      res.json('Usuarios actualizados!')
    } else {
      const user = await Users.findById(id)
      if (!user) throw new Error('The user not exists')

      if (user.isAdmin) {
        user.isAdmin = false
        await user.save()
        return res.send('The user now is not admin')
      } else {
        user.isAdmin = true
        await user.save()
        return res.send('The user is now admin')
      }
    }
  } catch (error) {
    res.send(error.message)
  }
})

router.post('/toggleBanned', async (req, res) => {
  const { id } = req.query
  const userIds = req.body
  try {
    if (userIds) {
      userIds.forEach(async (id) => {
        const user = await Users.findById(id)

        if (!user) throw new Error('The user not exists')
        if (user.isBanned) {
          user.isBanned = false
          await user.save()
        } else {
          user.isBanned = true
          await user.save()
        }
      })

      res.json('Usuarios actualizados!')
    } else {
      const user = await Users.findById(id)
      if (!user) throw new Error('The user not exists')

      if (user.isBanned) {
        user.isBanned = false
        await user.save()
        return res.send('The user now is not admin')
      } else {
        user.isBanned = true
        await user.save()
        return res.send('The user is now admin')
      }
    }
  } catch (error) {
    res.send(error.message)
  }
})

router.post('/toggleSuperAdmin', async (req, res) => {
  const { id } = req.query
  const userIds = req.body
  try {
    if (userIds) {
      userIds.forEach(async (id) => {
        const user = await Users.findById(id)

        if (!user) throw new Error('The user not exists')
        if (user.isSuperAdmin) {
          user.isSuperAdmin = false
          await user.save()
        } else {
          user.isSuperAdmin = true
          await user.save()
        }
      })

      res.json('Usuarios actualizados!')
    } else {
      const user = await Users.findById(id)
      if (!user) throw new Error('The user not exists')

      if (user.isSuperAdmin) {
        user.isSuperAdmin = false
        await user.save()
        return res.send('The user now is not admin')
      } else {
        user.isS = true
        await user.save()
        return res.send('The user is now admin')
      }
    }
  } catch (error) {
    res.send(error.message)
  }
})


router.post('/hideUser/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await Users.findById(id)
    if (!user) throw new Error('El usuario no existe')

    user.isHidden = true
    user.save()

    if (user.isHidden) return res.send('Usuario ocultado')
  } catch (error) {
    res.send(error.message)
  }
})

router.post('/showUser/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await Users.findById(id)
    if (!user) throw new Error('El usuario no existe')

    user.isHidden = false
    user.save()

    if (!user.isHidden) return res.send('Usuario desocultado')
  } catch (error) {
    res.send(error.message)
  }
})

router.delete('/deleteUser/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await Users.findById(id)
    if (!user) throw new Error('Usuario no encontrado')
    await Users.findByIdAndDelete(id)
    res.send('Usuario eliminado correctamente')
  } catch (error) {
    res.status(404).send(error.message)
  }
})

module.exports = router
