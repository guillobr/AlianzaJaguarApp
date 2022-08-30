import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
getPoaching,
 getPoachingTime,
 getPoachingDate
} from '../../../actions'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import RefreshPoaching from './RefreshPoaching'
import ByPlaceP from '../SearchBarTraffic/ByPlaceP'
import ByFrequencyP from '../SearchBarTraffic/ByFrequencyP'
import ByCommercyTypeP from '../SearchBarTraffic/ByCommercyTypeP'
import ByCommercyStatusP from '../SearchBarTraffic/ByCommercyStatusP'
import ByAnimalP from '../SearchBarTraffic/ByAnimalP'
import ByConditionP from '../SearchBarTraffic/ByConditionP'
import ByDateP from '../SearchBarTraffic/ByDateP'
import ByCountryP from '../SearchBarTraffic/ByCountryP'
import ByObservadorP from '../SearchBarTraffic/ByObservadorP'




export default function TrafficData(props) {
  const dispatch = useDispatch()

 useEffect(() => {
    dispatch(getPoaching())
    console.log('entre')
  }, [])

  const poaching = useSelector((state) => state.poaching)
  


 
  const [order, setOrder] = useState(true)

 

  function handleOrderByName(e) {
    dispatch(getPoachingTime(e.target.value))
    setOrder(`Ordenado ${e.target.value}`)
  }
  function handleOrderByDate(e) {
    dispatch(getPoachingDate(e.target.value))
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
  for (let i = 1; i <= Math.ceil(poaching.length / rows); i++) {
    pages.push(i)
  }
  const indexOfLastItem = currentPage * rows
  const indexOfFirstItem = indexOfLastItem - rows
  const currentItems = poaching.slice(indexOfFirstItem, indexOfLastItem)
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


  return poaching.length > 0 ? (
    <div >
      <h1>Control de Registros de Trafico</h1>
      <div>
        <Link to='/admin'>
          <button>Panel de Administrador</button>
        </Link>
        <RefreshPoaching/>
       

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
              <th>Cantidad de Puestos</th>
              <th>Frecuencia de Venta</th>
              <th>Tipo de comercio</th>
              <th>Estado de comercio</th>
              <th>Animales en venta</th>
              <th>Condicion</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Observador</th>
              <th>Otro</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((s) => (
              <tr key={s._id}>
                <td>
                  <Link to={`/poachingID/${s._id}`}>
                    {s._id}
                  </Link>
                </td>

                <td>{s.country}</td>
                <td>{s.place}</td>
                <td>{s.date}</td>
                <td>{s.time}</td>
                <td>{s.postsQuantity}</td>
                <td>{s.postsFrecuency}</td>
                <td>{s.commercyType}</td>
                <td>{s.commercyStatus}</td>
                <td>{s.animal}</td>
                <td>{s.animalCondition}</td>
                <td>{s.quantity}</td>
                <td>{s.price}</td>
                <td>{s.observador}</td>
                <td>{s.other}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
          <ul>
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
      <div>
              <ByCountryP/>
              <ByPlaceP/>
              {/* <ByDate/>
              <ByTime/> */}
              <select onChange={(e) => handleOrderByName(e)}defaultValue='default'>
                <option value='default' disabled>Orden por Hora</option>
                <option value='Nuevos'>0-24</option>
                <option value='Viejos'>24-0</option>
              </select>

              <select onChange={(e) => handleOrderByDate(e)} defaultValue='default'>
                <option value='default' disabled>Orden por Fecha</option>
                <option value='Nuevos'>Nuevos</option>
                <option  value='Viejos'>Viejos</option>
              </select>
              <ByFrequencyP/>
              <ByCommercyTypeP/>
              <ByCommercyStatusP/>
              <ByAnimalP/>
              <ByConditionP/>
              <ByObservadorP/>
            
      </div>
    </div>
  ) : (
    <div>
    <p>No se encontro el registro</p>
     <RefreshPoaching/>
    </div>
  )
}