import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getSightingName } from '../../../actions'
import styles from '../../../Styles/refreshButton.module.css'
import style from '../../../Styles/select.module.css'

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
    <div>
     
     <div>
            <select className={style.select} onChange={(e) => handleNames(e)} defaultValue='default'>
            <option value='default' disabled>Nombre comun</option>
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
        Buscar
      </button>
    </div>
  )
}

export default ByName