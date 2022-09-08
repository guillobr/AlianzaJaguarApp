import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postPoaching } from '../actions'
import styles from '../Styles/poaching.module.css'


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
    <div className={styles.poaching}>
       <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.title}>Reportar venta o Trafico de Vida Silvestre</div>
      <form  onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.dataDetails}>

          <div className={styles.iputBox}>
            <span className={styles.details}>Pais:</span>
            <select onChange={(e) => handleCountries(e)} defaultValue='default'>
              <option value='default' disabled>Pais</option>
              <option value='Argentina'>Argentina</option>
              <option value='Bolivia'>Bolivia</option>
            </select>
          </div>  
        
          <div className={styles.iputBox}>
        <span className={styles.details}>Localidad:</span>
          <input
            type='text'
            value={post.place}
            name='place'
            onChange={(e) => handleChange(e)}
          />
        </div>

           
        <div className={styles.iputBox}>
        <span className={styles.details}>Fecha:</span>
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
        <span className={styles.details}>Frecuencia de Venta</span>
          <input
            type='text'
            value={post.postsFrecuency}
            name='postsFrecuency'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className={styles.iputBox}>
        <span className={styles.details}>Tipo de Comercio:</span>
          <input
            type='text'
            value={post.commercyType}
            name='commercyType'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className={styles.iputBox}>
            <span className={styles.details}>Estado del Comercio</span>
            <select onChange={(e) => handleCommercyStatus(e)} defaultValue='default'>
              <option value='default' disabled>Pais</option>
              <option value='Abierto'>Abierto</option>
              <option value='Cerrado'>Cerrado</option>
            </select>
          </div>  
        
        
        <div className={styles.iputBox}>
        <span className={styles.details}>Animales en Venta:</span>
          <textarea
            type='text'
            value={post.animal}
            name='animal'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className={styles.iputBox}>
        <span className={styles.details}>Condicion:</span>
          <textarea
            type='text'
            value={post.animalCondition}
            name='animalCondition'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className={styles.iputBox}>
        <span className={styles.details}>Cantidad:</span>
          <textarea
            type='text'
            value={post.quantity}
            name='quantity'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className={styles.iputBox}>
        <span className={styles.details}>Precio:</span>
          <textarea
            type='text'
            value={post.price}
            name='price'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className={styles.iputBox}>
        <span className={styles.details}>Origen:</span>
          <textarea
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

        

          <button className={styles.btn} type='submit'>
              AGREGAR REGISTRO
          </button>
        </div>
        
      </form>

      <Link to='/'>
        <button className={`${styles.btnAdmin}`}>↼ Atras</button>
      </Link>
      </div>
      </div>
    </div>
  )
}
