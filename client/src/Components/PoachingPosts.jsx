import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//import { postSighting } from '../actions'


export default function PoachingPosts(){

  const dispatch = useDispatch()
  const navigate = useNavigate()

//   const allPoaching = useSelector((state) => state.poaching)
const a = 3
 

  const [post, setPost] = useState({
    frequency: '',
    commercy: '',
    state: '',
    name: '',
    other: '',
  })

  const [errors, setErrors] = useState({
    frequency: '',
    commercy: '',
    state: '',
    name: '',
    other: '',
  })



  function handleChange(e) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    })
  }

  function handleCountries(e) {
    if (!post.country.includes(e.target.value))
      setPost({
        ...post,
       country: e.target.value,
      })
  }

  function agregarpuesto(){

  }

 
  const [failedSubmit, setFailedSubmit] = useState(false)

//   function handleSubmit(e) {
//     e.preventDefault()
   
//     //   dispatch(postSighting(post))
//     //   console.log('soy Post:', post)
//     //   window.alert('Avistaje Registrado con exito')
//     //   setPost({
//     //     country: '',
//     //     place: '',
//     //     date: '',
//     //     time: '',
//     //     posts: '',
//     //   })
//     //   navigate('/')
//     // }
  

  return (
    <div >
      <h1>Venta/Trafico</h1>

      
      <form >
         
        <div>
          <label>Frecuencia:</label>
          <input
            type='text'
            value={post.place}
            name='frequency'
            onChange={(e) => handleChange(e)}
          />
        </div>

           
        <div>
          <label>Comercio:</label>
          <input
            type='date'
            value={post.date}
            name='commercy'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Estado:</label>
          <input
            type='time'
            value={post.time}
            name='state'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Nombre del puesto:</label>
          <input
            type='number'
            value={post.posts}
            name='name'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Otras Observaciones:</label>
          <input
            type='number'
            value={post.posts}
            name='other'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <h2>HHHS</h2>

       
        <button type='submit'>
          Registrar
        </button>
      </form>

      <button onClick={()=>agregarpuesto()}>Agregar puesto</button>

      <Link to='/'>
        <button>Siguiente ↼</button>
      </Link>
    </div>
  )
}
