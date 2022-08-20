import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postSighting } from '../actions'


export default function Avistaje(){

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const allSighting = useSelector((state) => state.sighting)

const country = ['Argentina', 'Bolivia']
const name = [
   'Anfibio',
    'Perros ferales',
    'Zorro',
    'Acuti',
    'Urón mayor',
    'Burro',
    'Caballo',
    'Yagouaroundi',
    'Carpincho',
    'Jaguar',
    'Pava de monte',
    'Mono',
    'Conejo',
    'Tapir',
    ]

const scientistname = [
    'Anfio',
    'Aramides saracura',
    'Bos primigenius taurus',
    'Buteo platypterus',
    'Canis lupus familiaris',
    'Cerdocyon thous',
    'Conepactus chinga',
    'Comadreja NN',
    'Crypturellus obsoletus',
    'Crypturellus sp.',
    'Crypturellus tataupa',
    'Dasyprocta punctata',
    'Dasypus novemcinctus',
    'Dasypus septemcinctus',
    'Dasypus sp.',
    'Didelphis albiventris',
    'Didelphis sp.',
    'Eira barbara',
    'Equus africanus asinus',
    'Equus ferus caballus',
    'Euphractus sexcinctus',
    'Felis silvestris catus',
    'Galictis cuja',
    'Galictis sp.',
    'Gallus gallus domesticus',
    'Guacamayos (Ara)',
    'Herpailurus yagouaroundi',
    'Hydrochoerus hydrochaeris',
    'ID a confirmar',
    'Lagartija',
    'Leopardus geoffroyi',
    'Leopardus pardalis',
    'Leopardus sp.',
    'Leopardus wiedii',
    'Leptotila rufoaxila',
    'Leptotila sp.',
    'Leptotila verreauxi',
    'Lontra longicaudis',
    'Lycalopex gymnocercus',
    'Mazama americana',
    'Mazama gouazoubira',
    'Mazama sp.',
    'Myrmecophaga tridactyla',
    'Nasua nasua',
    'NN',
    'Notosciurus pucheranii',
    'Panthera onca',
    'Patagioenas picazuro',
    'Pecari tajacu',
    'Penelope obscura',
    'Piaya cayana',
    'Procyon cancrivorus',
    'Sapajus cay',
    'Sciurus ignitus',
    'Sus scrofa domestica',
    'Sylvilagus brasiliensis',
    'Tamandua tetradactyla',
    'Tapirus terrestris',
    'Tayassu pecari',
    'Tigrisoma lineatum',
    'Tupinambis rufescens',
    'Turdus sp'
]

const type = [
    'Individuo',
    'Huellas',
    'Heces',
    'Pelos',
    'Rascadero',
    'Cuero',
    'Huesos',
]

  const [post, setPost] = useState({
    country: '',
    place: '',
    date: '',
    time: '',
    altitud: '',
    name: '',
    scientistname: '',
    type: '',
    observador: '',
    other:'',
  })

  const [errors, setErrors] = useState({
    country: '',
    place: '',
    date: '',
    time: '',
    altitud: '',
    name: '',
    scientistname: '',
    type: '',
    observador: '',
  })

//   function validate(post) {
//     let errors = {}
//     let nameRegex = /^[a-zA-Z0-9 _]*$/g
//     let titleRegex = /^[a-zA-Z _]*$/g
//     if (!post.title) {
//       errors.title = 'Ingresar titulo (!)'
//     }

//     if (post.title.length > 50) {
//       errors.title = 'El titulo es demasiado largo'
//     }

//     if (!post.authors.name) {
//       errors.authorsName = 'Ingresar nombre del autor '
//     }

//     if (post.authors?.name?.length > 50) {
//       errors.authorsName = 'El nombre es demasiado largo'
//     }

//     if (!post.authors.name.match(/^[a-zA-Z]*$/g)) {
//       errors.authorsName = 'El nombre solo puede contener letras'
//     }

//     if (!post.authors.surname) {
//       errors.authorsSurname = 'Ingresar apellido del autor'
//     }

//     if (post.authors.surname.length > 50) {
//       errors.authorsSurname = 'El apellido es demasiado largo'
//     }

//     if (!post.authors.surname.match(/^[a-zA-Z]*$/g)) {
//       errors.authorsSurname = 'El apellido solo puede contener letras'
//     }

//     if (!post.editorial) {
//       errors.editorial = 'Ingresar editorial'
//     }

//     if (post.editorial.length > 50) {
//       errors.editorial = 'Nombre de editorial demasiado largo'
//     }

//     if (!post.cover) {
//       errors.cover = 'Ingresar URL de la portada'
//     }

//     if (post.editorial.length > 50) {
//       errors.editorial = 'Nombre de editorial demasiado largo'
//     }

//     if (!post.rating) {
//       errors.rating = 'Ingresar el rating!'
//     }

//     if (
//       post.rating < 0 ||
//       post.rating > 10 ||
//       !post.rating.match(/^[0-9]*$/g)
//     ) {
//       errors.rating = 'Debe ser un numero entre 0 y 10'
//     }

//     if (!post.year) {
//       errors.year = 'Ingresar año'
//     }

//     if (post.year && !post.year.match(/^[0-9]*$/g)) {
//       errors.year = 'Debe ser un numero'
//     }

//     if (!post.pages) {
//       errors.pages = 'Ingresar cantidad de paginas'
//     }

//     if (post.pages > 3031) {
//       errors.pages = 'La novela mas larga del mundo tiene 3.031 páginas'
//     }

//     if (post.pages && !post.pages.match(/^[0-9]*$/g)) {
//       errors.pages = 'Debe ser un numero'
//     }

//     if (!post.price) {
//       errors.price = 'Ingresar precio'
//     }

//     if (post.price > 99999999999) {
//       errors.price = 'Muy caro'
//     }

//     if (post.price && !post.price.match(/^[0-9]*$/g)) {
//       errors.price = 'Debe ser un numero'
//     }

//     if (!post.stock) {
//       errors.stock = 'Ingresar stock'
//     }

//     if (post.stock > 999999999) {
//       errors.stock = 'El numero es demasiado grande'
//     }

//     if (post.stock && !post.stock.match(/^[0-9]*$/g)) {
//       errors.stock = 'Debe ser un numero'
//     }

//     if (!post.review) {
//       errors.review = 'Ingresar una reseña/descripcion del libro'
//     }

//     if (post.review.length > 10000) {
//       errors.review = 'Alcanzaste el limite de characteres'
//     }

//     if (!post.genres.length) {
//       errors.genres = 'Ingresar al menos un genero'
//     }

//     return errors
//   }

//   useEffect(() => {
//     setErrors(validate(post))
//   }, [post])

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

  function handleCountryDelete(country) {
    setPost({
      ...post,
      country: post.country.filter((e) => e !== country),
    })
  }

  function handleNames(e) {
      setPost({
        ...post,
        name: e.target.value,
      })
  }

  function handleNameDelete(name) {
    setPost({
      ...post,
      name: post.name.filter((e) => e !== name),
    })
  }

  function handleScientistNames(e) {
      setPost({
        ...post,
        scientistname: e.target.value,
      })
  }

  function handleTypes(e) {
    setPost({
      ...post,
      type: e.target.value,
    })
}


  
  const [failedSubmit, setFailedSubmit] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
   
      dispatch(postSighting(post))
      console.log('soy Post:', post)
      window.alert('Avistaje Registrado con exito')
      setPost({
        country: '',
        place: '',
        date: '',
        time: '',
        altitud: '',
        name: '',
        scientistname: '',
        type: '',
        observador: '',
      })
      navigate('/')
    }
  

  return (
    <div >
      <h1>Avistaje</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* <div>
            <select onChange={(e) => handleCountries(e)} defaultValue='default'>
            <option value='default' disabled>Pais</option>
            {country &&
                country.map((country) => (
                <option key={country} value={country}>
                    {country}
                </option>
                ))}
            </select>
        </div> */}
        <div>
         <select onChange={(e) => handleCountries(e)} defaultValue='default'>
         <option value='default' disabled>Pais</option>
         <option value='Argentina'>Argentina</option>
         <option value='Bolivia'>Bolivia</option>
         </select>

        </div>
        {/* {post.country.map((country) => (
          <div  key={country}>
            <p>{country}</p>
            <button
              onClick={() => handleCountryDelete(country)}
            >
              X
            </button>
          </div>
        ))} */}

       
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
          <label>Altitud:</label>
          <input
            type='text'
            value={post.altitud}
            name='altitud'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
            <select onChange={(e) => handleNames(e)} defaultValue='default'>
            <option value='default' disabled>Nombre comun</option>
            {name &&
                name.map((name) => (
                <option key={name} value={name}>
                    {name}
                </option>
                ))}
            </select>
        </div>
      
        {/* {post.name.map((name) => (
          <div  key={name}>
            <p>{name}</p>
            <button
              onClick={() => handleNameDelete(name)}
            >
              X
            </button>
          </div>
        ))} */}

        <div>
            <select onChange={(e) => handleScientistNames(e)} defaultValue='default'>
            <option value='default' disabled>Nombre Cientifico</option>
            {scientistname &&
                scientistname.map((scientistname) => (
                <option key={scientistname} value={scientistname}>
                    {scientistname}
                </option>
                ))}
            </select>
        </div>

        <div>
            <select onChange={(e) => handleTypes(e)} defaultValue='default'>
            <option value='default' disabled>Tipo de Registro</option>
            {type &&
                type.map((type) => (
                <option key={type} value={type}>
                    {type}
                </option>
                ))}
            </select>
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
          Agregar Avistaje
        </button>
      </form>

      <Link to='/'>
        <button>↼ Atras</button>
      </Link>
    </div>
  )
}

   
    
