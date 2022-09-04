import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getSightingTime } from '../../../actions'
import styles from '../../../Styles/select.module.css'

const ByTime= () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [order, setOrder] = useState(true)

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  function handleOrderByName(e) {
    dispatch(getSightingTime(e.target.value))
    setOrder(`Ordenado ${e.target.value}`)
  }


  return (
    <div>
     
     <select className={styles.select}
                     
                      onChange={(e) => handleOrderByName(e)}
                      defaultValue='default'
                    >
                      <option value='default' disabled>
                        Orden por Hora
                      </option>
                      <option value='Nuevos'>
                        0-24
                      </option>
                      <option  value='Viejos'>
                       24-0
                      </option>
                    </select>
    </div>
  )
}

export default ByTime