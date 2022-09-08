import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postSighting } from '../actions'
import { useLocation } from 'react-router-dom'
import styles from '../Styles/avistaje.module.css'


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
          geometry: [position.coords.latitude,position.coords.longitude],
          latitud:'',
          longitud:''
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
    geometry: [state.longitude , state.longitude],
    latitud: '',
    longitud: ''
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

// function handleGeometryManual(e) {
//   setPost({
//     ...post,
//     geometryManual: [e.target.value]
//   })
// }


  
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
        geometry:[],
        latitud:'',
        longitud:''
      })
      navigate('/')
    }
  

  return (
    <div className={styles.avistaje} >
      <div className={styles.body}>
      <div className={styles.container}>

       <div className={styles.title}>Reportar Avistaje</div>
      <form  action='#'  onSubmit={(e) => handleSubmit(e)}>
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
        <span className={styles.details}>Altitud:</span>
          <input
            type='text'
            value={post.altitud}
            name='altitud'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className={styles.iputBox}>
        <span className={styles.details}>Nombre Comun:</span>
            <select onChange={(e) => handleNames(e)} defaultValue='default'>
            <option value='default' disabled>Nombre Comun</option>
            {name &&
                name.map((name) => (
                <option key={name} value={name}>
                    {name}
                </option>
                ))}
            </select>
        </div>

        <div className={styles.iputBox}>
        <span className={styles.details}>Nombre Cientifico:</span>
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
     

        <div className={styles.iputBox}>
        <span className={styles.details}>Tipo de Registro:</span>
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
          <div>
              <div className={styles.ubicacion}>Ubicacion</div>
          </div>
          <div className={styles.iputBox}></div>

          <div className={styles.iputBox}>
            <span className={styles.details}>Automatica:</span>
            <input
            placeholder='Latitud'
            type='text'
            value={state.latitude}
            name='latitude'
            onChange={(e) => handleChange(e)}
          />
             <input
             placeholder='Longitud'
            type='text'
            value={state.longitude}
            name='longitude'
            onChange={(e) => handleChange(e)}
          />
              
          </div>

          <div className={styles.iputBox}>
            <span className={styles.details}>Manual:</span>
            <input
            placeholder='Latitud'
            type='text'
            value={post.latitud}
            name='latitud'
          />
             <input
             placeholder='Longitud'
             type='text'
              value={post.longitud}
             name='longitud'
          />
              
          </div>
          
        {/* <div className={styles.ubicacion}>
        <span className={styles.details}>Ubicacion:</span>
            <span className={styles.details}>OPCION 1 : Automatica - * Para colocar la ubicacion de forma automatica debe aceptar el acceso a su ubicacion</span>
        
              <span className={styles.details}>Latitud :</span>
              <div className={styles.inputBox}>{state.latitude}</div>
              <span className={styles.details}>Longitud :</span>
              <div className={styles.inputBox}>{state.longitude}</div>

            <span className={styles.details}>OPCION 2 : Manual - * Si desea colocar la ubicacion de forma manual, el sistema solo acpetara valores en formato decimal. Ej: Latitud:-34.5901
              Longitud:-58.3794</span>
              
              <span className={styles.details}>Latitud:</span>
                <input
                  type='text'
                  value={post.latitud}
                  name='latitud'
                  onChange={(e) => handleChange(e)}
                />
              
              <div>
              <span className={styles.details}>Longitud:</span>
                <input
                  type='text'
                  value={post.longitud}
                  name='longitud'
                  onChange={(e) => handleChange(e)}
                />
              </div>
        </div> */}

       
       
            <button className={styles.btn} type='submit'>
              AGREGAR AVISTAJE
            </button>
          
        </div>
      </form>

       </div>
       {/* <Link to='/'>
        <button className={`${styles.btnAdmin}`}>↼ Atras</button>
      </Link> */}
      </div>
    </div>
  )
}

   
    
