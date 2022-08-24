import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { putSighting , getSighting } from '../../../actions'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

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
    <div >
      <h1 >Modifica el Registro</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        
        <div>
         <select onChange={(e) => handleCountries(e)} defaultValue='default'>
         <option value='default' disabled>{sightingID[0].country}</option>
         <option value='Argentina'>Argentina</option>
         <option value='Bolivia'>Bolivia</option>
         </select>

        </div>


        <div>
          <label>Localidad:</label>
          <input
            type='text'
            value={post.place}
            name='place'
            onChange={(e) => handleChange(e)}
          />
        </div>

           
        <div>
          <label>Fecha:{sightingID[0].date}</label>
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
            <option value='default' disabled>{sightingID[0].name}</option>
            {name &&
                name.map((name) => (
                <option key={name} value={name}>
                    {name}
                </option>
                ))}
            </select>
        </div>

        <div>
            <select onChange={(e) => handleScientistNames(e)} defaultValue='default'>
            <option value='default' disabled>{ sightingID[0].scientistname}</option>
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
            <option value='default' disabled>{ sightingID[0].type}</option>
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
          Modificar Registro
        </button>
      </form>

      <Link to={`/sightingID/${id}`}>
                    {id}
                  </Link>
    </div>
  )
}
