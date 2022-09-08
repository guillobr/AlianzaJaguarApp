import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { putSighting , getSighting } from '../../../actions'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import styles from '../../../Styles/avistaje.module.css'

export default function PutSighting() {
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
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const id = useParams().id
  console.log(id)

  const allSighting = useSelector((state) => state.sighting)
  console.log('sightings:',allSighting)

  const sightingID = allSighting.filter((sighting) => sighting._id === id)
  console.log('sightingID:',sightingID)

  const [post, setPost] = useState({
    country: '',
    place: '',
    date: '',
    time: '',
    altitud: '',
    geo:[],
    geometry:[],
    name: '',
    scientistname: '',
    type: '',
    observador: '',
    other:'',
  })

  useEffect(() => {
    setPost({
      ...post,
      country: sightingID[0].country,
      place: sightingID[0].place,
      date: sightingID[0].date,
      time: sightingID[0].time,
      altitud: sightingID[0].altitud,
      geo: sightingID[0].geo,
      geometry: sightingID[0].geometry,
      name: sightingID[0].name,
      scientistname: sightingID[0].scientistname,
      type: sightingID[0].type,
      observador: sightingID[0].observador,
      other: sightingID[0].other,
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

  function handleNames(e) {
    setPost({
      ...post,
      name: e.target.value,
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

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(putSighting(post, id))
    console.log('post:',post)
    console.log('id:',id)
    window.alert('Registro Modificado!')
    setTimeout(function () {
      dispatch(getSighting())
    }, 1000)
  }

  return (
    <div className={styles.avistaje}>
      <div className={styles.body}>
      <div className={styles.container}>
      <div className={styles.title}>Modifica el Registro</div>

      <form onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.dataDetails}>
        
      <div className={styles.iputBox}>
            <span className={styles.details}>Pais:</span>
            <select onChange={(e) => handleCountries(e)} defaultValue='default'>
              <option value='default' disabled>{sightingID[0].country}</option>
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
        <span className={styles.details}>Fecha:{sightingID[0].date}</span>
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
        <span className={styles.details}>Otra Observacion:</span>
          <textarea
            type='text'
            value={post.other}
            name='other'
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

        <div>
              <div className={styles.ubicacion}>Ubicacion</div>
          </div>

          <div className={styles.iputBox}></div>

          <div className={styles.iputBox}>
            <span className={styles.details}>Automatica:</span>
            <input
            placeholder='lat,long'
            type='text'
            value={post.geometry}
            name='geometry'
            onChange={(e) => handleChange(e)}
          />
            
              
          </div>

          <div className={styles.iputBox}>
            <span className={styles.details}>Manual:</span>
            <input
            placeholder='lat, lng'
            type='text'
            value={post.geo}
            name='geo'
          />

              
          </div>




          <button className={styles.btn} type='submit'>
              MODIFICAR
            </button>
          
        </div>
      </form>

      <Link className={`${styles.btnAdmin}`} to={`/sightingID/${id}`}>
      ↼ Atras
      </Link>
      </div>
      </div>
    </div>
  )
}
