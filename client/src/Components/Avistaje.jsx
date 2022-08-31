import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postSighting } from '../actions'
import { useLocation } from 'react-router-dom'


export default function Avistaje(){

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const allSighting = useSelector((state) => state.sighting)

  const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
         console.log(position);
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
        
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
          other:'',
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        })
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

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
    latitude: state.latitude,
    longitude: state.longitude
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
        latitude:'',
        longitude:''
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
          <label>Latitud:</label>
          <textarea
            type='text'
            value={post.latitud}
            name='latitud'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Latitud:</label>
          <textarea
            type='text'
            value={post.longitud}
            name='longitud'
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

   
    
