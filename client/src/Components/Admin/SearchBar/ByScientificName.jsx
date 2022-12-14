import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getSightingScientificName } from '../../../actions'
import styles from '../../../Styles/contFilters.module.css'
import SearchIcon from '@mui/icons-material/Search';


const ByName = () => {

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
        'GuacamayosÂ (Ara)',
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
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleScientistNames = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getSightingScientificName(input))
    setInput('')
  }


  return (
    <div className={styles.contFilters}>
     
     <div>
            <select className={styles.select} onChange={(e) => handleScientistNames(e)} defaultValue='default'>
            <option value='default'>Nombre Cientifico</option>
            {scientistname &&
                scientistname.map((scientistname) => (
                <option key={scientistname} value={scientistname}>
                    {scientistname}
                </option>
                ))}
            </select>
        </div>

      <button className={styles.btn}
        type='submit'
        onClick={(e) => handleSubmit(e)}
      >
        <SearchIcon sx={{ fontSize: '32px', color: 'black', "& :hover": { color: "#ef5350" } }} />
      </button>
    </div>
  )
}

export default ByName