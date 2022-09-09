import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getPoachingCountry } from '../../../actions'
import styles from '../../../Styles/contFilters.module.css'
import SearchIcon from '@mui/icons-material/Search';

const ByCountryP = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getPoachingCountry(input))
    setInput('')
  }

//   const handleKeyPress = (e) => {
//     if(e.charCode === 13){
//         e.preventDefault();
//         dispatch(getSightingCountry(input));
//         setInput('');
//     }
// }

  return (
    <div className={styles.contFilters}>
     
       <div>
       <select className={styles.select} onChange={(e) => handleChange(e)} defaultValue='default'>
         <option value='default' disabled>Pais</option>
         <option value='Argentina'>Argentina</option>
         <option value='Bolivia'>Bolivia</option>
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

export default ByCountryP