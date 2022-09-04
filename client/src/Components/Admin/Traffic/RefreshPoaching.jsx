import React from 'react'
import { useDispatch } from 'react-redux'
import { getPoaching } from '../../../actions'
import { Link } from 'react-router-dom'
import styles from '../../../Styles/refreshButton.module.css'

export default function RefreshPoaching() {
  const dispatch = useDispatch()

  const handleClickPoaching = (e) => {
    e.preventDefault()
    dispatch(getPoaching())
  }

  return (
    <div>
      <Link to='/poachingData'>
        <button className={styles.btn} onClick={handleClickPoaching}>
          Todos los Regsitros
        </button>
      </Link>
    </div>
  )
}
