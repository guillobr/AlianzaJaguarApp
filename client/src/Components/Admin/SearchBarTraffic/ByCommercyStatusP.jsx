import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getPoachingCommercyStatus } from '../../../actions'

const ByCommercyStatusP = () => {

    const commercyType = [
        'Abierto',
        'Cerrado'
    ]
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getPoachingCommercyStatus(input))
    setInput('')
  }


  return (
    <div>
     
     <div>
            <select onChange={(e) => handleChange(e)} defaultValue='default'>
            <option value='default' disabled>Estado de comercio</option>
            {commercyType &&
                commercyType.map((commercyType) => (
                <option key={commercyType} value={commercyType}>
                    {commercyType}
                </option>
                ))}
            </select>
        </div>

      <button
        type='submit'
        onClick={(e) => handleSubmit(e)}
      >
        Buscar
      </button>
    </div>
  )
}

export default ByCommercyStatusP