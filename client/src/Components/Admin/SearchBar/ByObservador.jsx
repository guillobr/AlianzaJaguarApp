import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getSightingObservador } from '../../../actions'
import styles from '../../../Styles/contFilters.module.css'
import SearchIcon from '@mui/icons-material/Search';

const ByObervador = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getSightingObservador(input))
    setInput('')
  }

  const handleKeyPress = (e) => {
    if(e.charCode === 13){
        e.preventDefault();
        dispatch(getSightingObservador(input));
        setInput('');
    }
}

  return (
    <div className={styles.contFilters}>
      <div>
      <input
      className={styles.input}
        type='text'
        placeholder='Observador'
        value={input}
        onChange={(e) => handleChange(e)}
        onKeyPress={(e) => handleKeyPress(e)}
      />
      </div>
       <div>
      <button
      className={styles.btn}
        type='submit'
        onClick={(e) => handleSubmit(e)}
      >
       <SearchIcon sx={{ fontSize: '32px', color: 'black', "& :hover": { color: "#ef5350" } }} />
      </button>
      </div>
    </div>
  )
}

export default ByObervador
