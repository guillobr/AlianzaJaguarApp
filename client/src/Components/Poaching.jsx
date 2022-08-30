import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postPoaching } from '../actions'


export default function Poaching(){

  const dispatch = useDispatch()
  const navigate = useNavigate()

//   const allPoaching = useSelector((state) => state.poaching)

  const country = ['Argentina', 'Bolivia']

  const commercyStatus = ['Abierto', 'Cerrado']

  const [post, setPost] = useState({
    country: '',
    place: '',
    date: '',
    time: '',
    postsQuantity: '',
    postsFrecuency: '',
    commercyType: '',
    commercyStatus: '',
    animal: '',
    animalCondition: '',
    quantity: '',
    price: '',
    origin:'',
    observador: '',
    other: ''
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

  function handleCommercyStatus(e) {
    if (!post.commercyStatus.includes(e.target.value))
      setPost({
        ...post,
        commercyStatus: e.target.value,
      })
  }


  const [failedSubmit, setFailedSubmit] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
   
      dispatch(postPoaching(post))
      console.log('soy Post:', post)
      window.alert('Registrado con exito')
      setPost({
        country: '',
        place: '',
        date: '',
        time: '',
        postsQuantity: '',
        postsFrecuency: '',
        commercyType: '',
        commercyStatus: '',
        animal: '',
        animalCondition: '',
        quantity: '',
        price: '',
        observador: '',
        other: ''
      })
      navigate('/')
    }
  


  return (
    <div >
      <h1>Venta/Trafico</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
       
        <div>
         <select onChange={(e) => handleCountries(e)} defaultValue='default'>
         <option value='default' disabled>Pais</option>
         <option value='Argentina'>Argentina</option>
         <option value='Bolivia'>Bolivia</option>
         </select>

        </div>
        
        <div>
          <label>Sitio:</label>
          <input
            type='text'
            value={post.place}
            name='place'
            onChange={(e) => handleChange(e)}
          />
        </div>

           
        <div>
          <label>Fecha:</label>
          <input
            type='date'
            value={post.date}
            name='date'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Hora:</label>
          <input
            type='time'
            value={post.time}
            name='time'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Cantidad de Puestos:</label>
          <input
            type='number'
            value={post.postsQuantity}
            name='postsQuantity'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Fracuencia de venta:</label>
          <input
            type='text'
            value={post.postsFrecuency}
            name='postsFrecuency'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Tipo de comercio:</label>
          <input
            type='text'
            value={post.commercyType}
            name='commercyType'
            onChange={(e) => handleChange(e)}
          />
        </div>

       
        <div>
         <select onChange={(e) => handleCommercyStatus(e)} defaultValue='default'>
         <option value='default' disabled>Estado de comercio</option>
         <option value='Abierto'>Abierto</option>
         <option value='Cerrado'>Cerrado</option>
         </select>

        </div>

        <div>
          <label>Animales en venta:</label>
          <input
            type='text'
            value={post.animal}
            name='animal'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Condicion:</label>
          <input
            type='text'
            value={post.animalCondition}
            name='animalCondition'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Cantidad:</label>
          <input
            type='text'
            value={post.quantity}
            name='quantity'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Precio:</label>
          <input
            type='text'
            value={post.price}
            name='price'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Origen:</label>
          <input
            type='text'
            value={post.origin}
            name='origin'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Observador:</label>
          <input
            type='text'
            value={post.observador}
            name='observador'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Otra Observacion:</label>
          <textarea
            type='text'
            value={post.other}
            name='other'
            onChange={(e) => handleChange(e)}
          />
        </div>

       
     

        <button type='submit'>
          Registrar
        </button>
      </form>

      <Link to='/'>
        <button>↼ Atras</button>
      </Link>
    </div>
  )
}
