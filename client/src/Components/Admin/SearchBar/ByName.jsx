import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getSightingName } from '../../../actions'
import styles from '../../../Styles/contFilters.module.css'
import SearchIcon from '@mui/icons-material/Search';

const ByName = () => {

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
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleNames = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getSightingName(input))
    setInput('')
  }


  return (
    <div className={styles.contFilters}>
     
     <div>
            <select className={styles.select} onChange={(e) => handleNames(e)} defaultValue='default'>
            <option value='default'>Nombre comun</option>
            {name &&
                name.map((name) => (
                <option key={name} value={name}>
                    {name}
                </option>
                ))}
            </select>
        </div>
      <button
     className={styles.btn} 
        type='submit'
        onClick={(e) => handleSubmit(e)}
      >
       <SearchIcon sx={{ fontSize: '32px', color: 'black', "& :hover": { color: "#ef5350" } }} />
      </button>
    </div>
  )
}

export default ByName