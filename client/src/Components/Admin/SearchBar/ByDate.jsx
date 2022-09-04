import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getSightingDate } from '../../../actions'
import style from '../../../Styles/select.module.css'

const ByDate = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [order, setOrder] = useState(true)

  
  function handleOrderByDate(e) {
    dispatch(getSightingDate(e.target.value))
    setOrder(`Ordenado ${e.target.value}`)
  }


  return (
    <select
    className={style.select}               
    onChange={(e) => handleOrderByDate(e)}
    defaultValue='default'
     >
    <option value='default' disabled>
      Orden por Fecha
    </option>
    <option value='Nuevos'>
      Nuevos
    </option>
    <option  value='Viejos'>
     Viejos
    </option>
  </select>
  )
}

export default ByDate