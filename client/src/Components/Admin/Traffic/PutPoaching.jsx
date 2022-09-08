import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { putPoaching , getPoaching } from '../../../actions'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import styles from '../../../Styles/avistaje.module.css'


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
    <div  className={styles.containerAll}>
        <div className={styles.body}>
      <div className={styles.container}>
      <div className={styles.title}>Modifica el Registro</div>


      <form onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.dataDetails}>


      <div className={styles.iputBox}>
            <span className={styles.details}>Pais:</span>
            <select onChange={(e) => handleCountries(e)} defaultValue='default'>
              <option value='poachingID[0].country' disabled>Pais</option>
              <option value='Argentina'>Argentina</option>
              <option value='Bolivia'>Bolivia</option>
            </select>
          </div>
       
       
        

          <div className={styles.iputBox}>
        <span className={styles.details}>Sitio:</span>
          <input
            type='text'
            value={post.place}
            name='place'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className={styles.iputBox}>
        <span className={styles.details}>Fecha:{poachingID[0].date}</span>
          <input
            type='date'
            value={post.date}
            name='date'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className={styles.iputBox}>
        <span className={styles.details}>Hora:</span>
          <input
            type='time'
            value={post.time}
            name='time'
            onChange={(e) => handleChange(e)}
          />
        </div>
      

        <div className={styles.iputBox}>
          <span className={styles.details}>Cantidad de Puestos:</span>
          <input
            type='number'
            value={post.postsQuantity}
            name='postsQuantity'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className={styles.iputBox}>
        <span className={styles.details}>Frecuencia de venta:</span>
          <input
            type='text'
            value={post.postsFrecuency}
            name='postsFrecuency'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className={styles.iputBox}>
        <span className={styles.details}>Tipo de comercio:</span>
          <input
            type='text'
            value={post.commercyType}
            name='commercyType'
            onChange={(e) => handleChange(e)}
          />
        </div>

       
        <div className={styles.iputBox}>
        <span className={styles.details}>Estado de Comercio</span>
         <select onChange={(e) => handleCommercyStatus(e)} defaultValue='default'>
         <option value='default' disabled>{poachingID[0].postStatus}</option>
         <option value='Abierto'>Abierto</option>
         <option value='Cerrado'>Cerrado</option>
         </select>

        </div>

        <div  className={styles.iputBox}>
        <span className={styles.details}>Animales en venta:</span>
          <input
            type='text'
            value={post.animal}
            name='animal'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div  className={styles.iputBox}>
        <span className={styles.details}>Condicion:</span>
          <input
            type='text'
            value={post.animalCondition}
            name='animalCondition'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div  className={styles.iputBox}>
        <span className={styles.details}>Cantidad:</span>
          <input
            type='text'
            value={post.quantity}
            name='quantity'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div  className={styles.iputBox}>
        <span className={styles.details}>Precio:</span>
          <input
            type='text'
            value={post.price}
            name='price'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div  className={styles.iputBox}>
        <span className={styles.details}>Origen:</span>
          <input
            type='text'
            value={post.origin}
            name='origin'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className={styles.iputBox}>
        <span className={styles.details}>Observador:</span>
          <input
            type='text'
            value={post.observador}
            name='observador'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className={styles.iputBox}>
        <span className={styles.details}>Otra Observacion:</span>
          <textarea
            type='text'
            value={post.other}
            name='other'
            onChange={(e) => handleChange(e)}
          />
        </div>

       
     
        <button  className={styles.btn} type='submit'>
          MODIFICAR
        </button>
        </div>
      </form>

      <Link className={`${styles.btnAdmin}`} to={`/poachingID/${id}`}>
          ↼ Atras
      </Link>
      </div>
      </div>
    </div>
  )
}
