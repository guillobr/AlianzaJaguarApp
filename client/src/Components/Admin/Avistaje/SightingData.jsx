
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
 getSighting,
 getSightingTime,
 getSightingDate
} from '../../../actions'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import FilterCountry from '../SearchBar/ByCountry'
import RefreshSighting from './RefreshAvistaje'
import ByPlace from '../SearchBar/ByPlace'
import ByDate from '../SearchBar/ByDate'
import ByTime from '../SearchBar/ByTime'
import ByCountry from '../SearchBar/ByCountry'
import ByName from '../SearchBar/ByName'
import ByScientificName from '../SearchBar/ByScientificName'
import ByType from '../SearchBar/ByType'
import ByObservador from '../SearchBar/ByObservador'
import styles from '../../../Styles/sightingData.module.css'
import style  from '../../../Styles/select.module.css'



export default function SightingData(props) {
  const dispatch = useDispatch()


  const sightings = useSelector((state) => state.sighting)
  


  useEffect(() => {
    dispatch(getSighting())
  }, [])

  const [order, setOrder] = useState(true)

 

  function handleOrderByName(e) {
    dispatch(getSightingTime(e.target.value))
    setOrder(`Ordenado ${e.target.value}`)
  }
  function handleOrderByDate(e) {
    dispatch(getSightingDate(e.target.value))
    setOrder(`Ordenado ${e.target.value}`)
  }

  //------------PAGINADO
  const [currentPage, setCurrentPage] = useState(1)
  const [rows, setRows] = useState(10)
  const [pageNumberLimit, setPageNumberLimit] = useState(5)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [minPageNumberLmit, setMinPageNumberLmit] = useState(0)

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id))
  }
  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1)
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLmit(minPageNumberLmit + pageNumberLimit)
    }
  }
  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1)
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setMinPageNumberLmit(minPageNumberLmit - pageNumberLimit)
    }
  }

  const pages = []
  for (let i = 1; i <= Math.ceil(sightings.length / rows); i++) {
    pages.push(i)
  }
  const indexOfLastItem = currentPage * rows
  const indexOfFirstItem = indexOfLastItem - rows
  const currentItems = sightings.slice(indexOfFirstItem, indexOfLastItem)
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLmit) {
      return (
        <li
          key={number}
          id={number}
          onClick={(e) => handleClick(e)}
          // className={
          //   currentPage === number
          //     ? styles.paginationBulletActive
          //     : styles.paginationBullet
          // }
        >
          {number}
        </li>
      )
    } else {
      return null
    }
  })
  //-------------------------------------------------------------------


  return sightings.length > 0 ? (
    <div className={styles.containerAll}>
      <h1>Control de Registros de Avistaje</h1>
      <div>
        <Link className={styles.link} to='/admin'>
          Panel de Administrador
        </Link>
        <RefreshSighting/>
       

        {/* <AdminRefreshUsers />
        <AdminSearchBarUser /> */}
      </div>
      <div className={styles.containerTable__Pagination}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>id</th>
              <th>Pais</th>
              <th>Localidad</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Altitud</th>
              <th>Ubicacion</th>
              <th>Ubicacion Manual</th>
              <th>Nombre Comun</th>
              <th>Nombre Cientifico</th>
              <th>Tipo de Registro</th>
              <th>Observador</th>
              <th>Otro</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((s) => (
              <tr key={s._id}>
                <td>
                  <Link className={styles.linkTabla} to={`/sightingID/${s._id}`}>
                    {s._id}
                  </Link>
                </td>

                <td>{s.country}</td>
                <td>{s.place}</td>
                <td>{s.date}</td>
                <td>{s.time}</td>
                <td>{s.altitud}</td>
                <td>{s.geometry}</td>
                <td>{s.geo}</td>
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
      {
          <ul className={styles.paginationStock}>
            <li>
              <button
                onClick={handlePrevbtn}
                disabled={currentPage === pages[0] ? true : false}
              >
                {'<'}
              </button>
            </li>
            {renderPageNumbers}
            <li>
              <button
                onClick={handleNextbtn}
                disabled={
                  currentPage === pages[pages.length - 1] ? true : false
                }
              >
                {'>'}
              </button>
            </li>
          </ul>
        }
      <div className={styles.containerUser}>
              <ByCountry/>
              <ByPlace/>
              {/* <ByDate/>
              <ByTime/> */}
              <select  className={style.select} onChange={(e) => handleOrderByName(e)}defaultValue='default'>
                <option value='default' disabled>Orden por Hora</option>
                <option value='Nuevos'>0-24</option>
                <option value='Viejos'>24-0</option>
              </select>

              <select className={style.select}  onChange={(e) => handleOrderByDate(e)} defaultValue='default'>
                <option value='default' disabled>Orden por Fecha</option>
                <option value='Nuevos'>Nuevos</option>
                <option  value='Viejos'>Viejos</option>
              </select>
              <ByName/>
              <ByScientificName/>
              <ByType/>
              <ByObservador/>
      </div>
    </div>
  ) : (
    <div>
    <p>No se encontro el registro</p>
     <RefreshSighting/>
    </div>
  )
}