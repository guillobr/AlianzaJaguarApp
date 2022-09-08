import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getPoaching, getSighting } from "../../../actions";
import { deletePoaching } from "../../../actions";
import styles from '../../../Styles/details.module.css'

export default function PoachingDetails(){
    const id = useParams().id
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const allPoaching = useSelector(state=>state.poaching)

    const poachingDetail = allPoaching.filter(p=>p._id===id)[0]
    

    function handleDeletePoaching(id) {
        dispatch(deletePoaching(id))
        window.alert('Registro Eliminado')
        navigate('/trafficData')
        dispatch(getPoaching())
      }

    return(
        
        <div className={styles.container}>
        <Link className={styles.link}  to='/trafficData'>
        PANEL DE REGISTROS
        </Link>
            <h1 className={styles.title}>Detalles de Registro</h1>
            <div className={styles.planilla}>
          <span className={styles.header}>ID : &nbsp;</span>
          <span className={styles.data}>{poachingDetail._id}</span>
          <hr></hr>
          <span className={styles.header}>Pais : &nbsp;</span>
          <span className={styles.data}>{poachingDetail.country}</span>
          <hr></hr>
          <span className={styles.header}>Localidad : &nbsp;</span>
          <span className={styles.data}>{poachingDetail.place}</span>
          <hr></hr>
          <span className={styles.header}>Fecha : &nbsp;</span>
          <span className={styles.data}>{poachingDetail.date}</span>
          <hr></hr>
          <span className={styles.header}>Hora : &nbsp;</span>
          <span className={styles.data}>{poachingDetail.time}</span>
          <hr></hr>
          <span className={styles.header}>Cantidad de Puestos : &nbsp;</span>
          <span className={styles.data}>{poachingDetail.postsQuantity}</span>
          <hr></hr>
          <span className={styles.header}>Frecuencia de Venta : &nbsp;</span>
          <span className={styles.data}>{poachingDetail.postsFrecuency}</span>
          <hr></hr>
          <span className={styles.header}>Tipo de comercio : &nbsp;</span>
          <span className={styles.data}>{poachingDetail.commercyType}</span>
          <hr></hr>
          <span className={styles.header}>Estado de comercio : &nbsp;</span>
          <span className={styles.data}>{poachingDetail.commercyStatus}</span>
          <hr></hr>
          <span className={styles.header}>Animal : &nbsp;</span>
          <span className={styles.data}>{poachingDetail.animal}</span>
          <hr></hr>
          <span className={styles.header}>Condicion : &nbsp;</span>
          <span className={styles.data}>{poachingDetail.animalCondition}</span>
          <hr></hr>
          <span className={styles.header}>Cantidad : &nbsp;</span>
          <span className={styles.data}>{poachingDetail.quantity}</span>
          <hr></hr>
          <span className={styles.header}>Precio : &nbsp;</span>
          <span className={styles.data}>{poachingDetail.price}</span>
          <hr></hr>
          <span className={styles.header}>Observador : &nbsp;</span>
          <span className={styles.data}>{poachingDetail.observador}</span>
          <hr></hr>
          <span className={styles.header}>Otro : &nbsp;</span>
          <span className={styles.data}>{poachingDetail.otro}</span>
          <hr></hr>
        <div>
          <button className={styles.button} onClick={() => handleDeletePoaching(id)}>
            ELIMINAR
          </button>
          <Link className={styles.link}to={`/putPoaching/${id}`}>
               MODIFICAR
          </Link> 
        </div>
      </div>
        </div>
    )

}