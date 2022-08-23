import React from 'react'
import { useDispatch } from 'react-redux'
import { getSighting } from '../../../actions'
import { Link } from 'react-router-dom'

export default function RefreshSighting() {
  const dispatch = useDispatch()

  const handleClickSighting = (e) => {
    e.preventDefault()
    dispatch(getSighting())
  }

  return (
    <div>
      <Link to='/sightingData'>
        <button onClick={handleClickSighting}>
          Todos los Avistajes
        </button>
      </Link>
    </div>
  )
}
