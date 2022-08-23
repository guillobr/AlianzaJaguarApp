import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getSightingObservador } from '../../../actions'

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
    <div>
      <input
        type='text'
        placeholder='Palabra'
        value={input}
        onChange={(e) => handleChange(e)}
        onKeyPress={(e) => handleKeyPress(e)}
      />
      <button
        type='submit'
        onClick={(e) => handleSubmit(e)}
      >
        Por Observador
      </button>
    </div>
  )
}

export default ByObervador
