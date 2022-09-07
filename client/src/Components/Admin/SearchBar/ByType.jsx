import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getSightingType} from '../../../actions'
import styles from '../../../Styles/contFilters.module.css'
import SearchIcon from '@mui/icons-material/Search';

const ByType = () => {

    const type = [
        'Individuo',
        'Huellas',
        'Heces',
        'Pelos',
        'Rascadero',
        'Cuero',
        'Huesos',
    ]
    
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleTypes = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getSightingType(input))
    setInput('')
  }


  return (
    <div className={styles.contFilters}>
     
     <div>
            <select className={styles.select} onChange={(e) => handleTypes(e)} defaultValue='default'>
            <option value='default'>Tipo de Registro</option>
            {type &&
                type.map((type) => (
                <option key={type} value={type}>
                    {type}
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

export default ByType