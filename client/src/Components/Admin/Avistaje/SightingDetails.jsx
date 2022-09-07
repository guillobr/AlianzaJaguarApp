import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getSighting } from "../../../actions";
import { deleteSighting } from "../../../actions";
import styles from '../../../Styles/details.module.css'

export default function SightingDetails(){
    const id = useParams().id
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const allSighting = useSelector(state=>state.sighting)

    const sightingDetail = allSighting.filter(s=>s._id===id)[0]
    

    function handleDeleteSighting(id) {
        dispatch(deleteSighting(id))
        window.alert('Avistaje Eliminado')
        navigate('/sightingData')
        dispatch(getSighting())
      }

    return(
        
        <div className={styles.container}>
          <Link className={styles.link} to='/sightingData'>
          PANEL DE REGISTROS
          </Link>
            <h1 className={styles.title} >Detalles del Registro</h1>
        <div className={styles.planilla}>
              <span className={styles.header}>ID : &nbsp;</span>
              <span className={styles.data}>{sightingDetail._id}</span>
            <hr></hr>
              <span className={styles.header}>Pais : &nbsp;</span>
              <span className={styles.data}>{sightingDetail.country}</span>
            <hr></hr>
              <span  className={styles.header}>Localidad : &nbsp;</span>
              <span className={styles.data}>{sightingDetail.place}</span>
            <hr></hr>
              <span  className={styles.header}>Ubicacion : &nbsp;</span>
              <span className={styles.data}>{sightingDetail.geometry}</span>
            <hr></hr>
              <span  className={styles.header}>Ubicacion Manual : &nbsp;</span>
              <span className={styles.data}>{sightingDetail.geo}</span>
            <hr></hr>
              <span className={styles.header}>Fecha : &nbsp;</span>
              <span className={styles.data}>{sightingDetail.date}</span>
            <hr></hr>
              <span className={styles.header}>Hora : &nbsp;</span>
              <span className={styles.data}>{sightingDetail.time}</span>
            <hr></hr>
              <span className={styles.header}>Altitud : &nbsp;</span>
              <span className={styles.data}>{sightingDetail.altitud}</span>
            <hr></hr>
              <span className={styles.header}>Nombre Comun : &nbsp;</span>
              <span className={styles.data}>{sightingDetail.name}</span>          
            <hr></hr>
              <span className={styles.header}>Nombre Cientifico : &nbsp;</span>
              <span className={styles.data}>{sightingDetail.scientistname}</span>
            <hr></hr>
              <span className={styles.header}>Tipo de Registro : &nbsp;</span>
              <span className={styles.data}>{sightingDetail.type}</span>
            <hr></hr>
              <span className={styles.header}>Observador : &nbsp;</span>
              <span className={styles.data}>{sightingDetail.observador}</span>
            <hr></hr>
              <span className={styles.header}>Otro : &nbsp;</span>
              <span className={styles.data}>{sightingDetail.otro}</span>
        </div>
        <div>
        <button className={styles.button} onClick={() => handleDeleteSighting(id)}>
          ELIMINAR
          </button>
          <Link className={styles.link}  to={`/putSighting/${id}`}>
          MODIFICAR
          </Link> 

          <Link className={styles.link} to={`/mapDetail/${sightingDetail._id}`}>
            Ver en el Mapa
           </Link>
        </div>
      </div>
       
    )

}