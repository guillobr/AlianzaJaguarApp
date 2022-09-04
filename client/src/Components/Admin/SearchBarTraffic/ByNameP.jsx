import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getPoachingName } from '../../../actions'
import styles from '../../../Styles/refreshButton.module.css'
import style from '../../../Styles/input.module.css'

const ByNameP = () => {

    
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getPoachingName(input))
    setInput('')
  }

  const handleKeyPress = (e) => {
    if(e.charCode === 13){
        e.preventDefault();
        dispatch(getPoachingName(input));
        setInput('');
    }
}


  return (
    <div>
      <input
      className={style.input}
        type='text'
        placeholder='Palabra'
        value={input}
        onChange={(e) => handleChange(e)}
        onKeyPress={(e) => handleKeyPress(e)}
      />
      <button
      className={styles.btn} 
        type='submit'
        onClick={(e) => handleSubmit(e)}
      >
        Por Nombre
      </button>
    </div>
  )
}

export default ByNameP