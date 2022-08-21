

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
 getSighting
} from '../../../actions'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'



export default function SightingData(props) {
  const dispatch = useDispatch()


  const sightings = useSelector((state) => state.sighting)
  console.log('all:',sightings)


  useEffect(() => {
    dispatch(getSighting())
  }, [])

  return sightings.length > 0 ? (
    <div >
      <h1>Control de Registros de Avistaje</h1>
      <div>
        <Link to='/admin'>
          <button>Panel de Administrador</button>
        </Link>
        {/* <AdminRefreshUsers />
        <AdminSearchBarUser /> */}
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Pais</th>
              <th>Localidad</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Altitud</th>
              <th>Nombre Comun</th>
              <th>Nombre Cientifico</th>
              <th>Tipo de Registro</th>
              <th>Observador</th>
              <th>Otro</th>
            </tr>
          </thead>

          <tbody>
            {sightings.map((s) => (
              <tr key={s._id}>
                <td>
                  <Link to={`/sightingID/${s._id}`}>
                    {s._id}
                  </Link>
                </td>

                <td>{s.country}</td>
                <td>{s.place}</td>
                <td>{s.date}</td>
                <td>{s.time}</td>
                <td>{s.altitud}</td>
                <td>{s.name}</td>
                <td>{s.scientistname}</td>
                <td>{s.type}</td>
                <td>{s.observador}</td>
                <td>{s.other}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  )
}