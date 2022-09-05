import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { putPoaching , getPoaching } from '../../../actions'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import styles from '../../../Styles/putPoaching.module.css'


export default function PutPoaching(){

  const dispatch = useDispatch()
  const navigate = useNavigate()

//   const allPoaching = useSelector((state) => state.poaching)

  const country = ['Argentina', 'Bolivia']

  const commercyStatus = ['Abierto', 'Cerrado']

  const id = useParams().id

  const allPoaching = useSelector((state) => state.poaching)


  const poachingID = allPoaching.filter((poaching) => poaching._id === id)



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

  useEffect(() => {
    setPost({
      ...post,
      country: poachingID[0].country,
      place: poachingID[0].place,
      date: poachingID[0].date,
      time: poachingID[0].time,
      postsQuantity: poachingID[0].postsQuantity,
      postsFrecuency: poachingID[0].postsFrecuency,
      commercyType: poachingID[0].commercyType,
      commercyStatus:poachingID[0].commercyStatus,
      animal: poachingID[0].animal,
      animalCondition: poachingID[0].animalCondition,
      quantity: poachingID[0].quantity,
      price: poachingID[0].price,
      origin: poachingID[0].origin,
      observador: poachingID[0].observador,
      other: poachingID[0].ohter,
    })
  }, [])






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
    dispatch(putPoaching(post, id))
    window.alert('Registro Modificado!')
    setTimeout(function () {
      dispatch(getPoaching())
    }, 1000)
  }



  return (
    <div className={styles.poaching}>
      <h1 className={styles.titleForm}>MODIFICAR REGISTRO</h1>
      <form className={styles.containerForm} onSubmit={(e) => handleSubmit(e)}>
       
        <div>
        <label>Pais</label>
         <select onChange={(e) => handleCountries(e)} defaultValue='default'>
         <option value='poachingID[0].country' disabled>Pais</option>
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
          <label>Frecuencia de venta:</label>
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
        <label>Estado de Comercio</label>
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

       
     
        <button  classname={styles.button} type='submit'>
          MODIFICAR
        </button>
      </form>

      <Link className={styles.link} to={`/poachingID/${id}`}>
          ↼ Atras
      </Link>
    </div>
  )
}
