import React from 'react'
import { useDispatch } from 'react-redux'
import { getSighting } from '../../../actions'
import { Link } from 'react-router-dom'
import styles from '../../../Styles/refreshButton.module.css'

export default function RefreshSighting() {
  const dispatch = useDispatch()

  const handleClickSighting = (e) => {
    e.preventDefault()
    dispatch(getSighting())
  }

  return (
    <div>
      <Link to='/sightingData'>
        <button className={styles.btn} onClick={handleClickSighting}>
         TODOS LOS REGISTROS
        </button>
      </Link>
    </div>
  )
}
