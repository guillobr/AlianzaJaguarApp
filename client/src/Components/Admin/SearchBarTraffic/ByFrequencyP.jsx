import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getPoachingFrequencyPost } from '../../../actions'
import styles from '../../../Styles/refreshButton.module.css'
import style from '../../../Styles/input.module.css'

const ByFrequencyP= () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getPoachingFrequencyPost(input))
    setInput('')
  }

  const handleKeyPress = (e) => {
    if(e.charCode === 13){
        e.preventDefault();
        dispatch(getPoachingFrequencyPost(input));
        setInput('');
    }
}

  return (
    <div>
      <div>
      <input
       className={style.input}
        type='text'
        placeholder='Frecuencia'
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
        Por Frecuencia
      </button>
      </div>
    </div>
  )
}

export default ByFrequencyP
