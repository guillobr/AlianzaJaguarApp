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
            <div className={styles.p}>
        <p >Pais: {poachingDetail.country}</p>
        <p >Localidad: {poachingDetail.place}</p>
        <p >Fecha: {poachingDetail.date}</p>
        <p >Hora: {poachingDetail.time}</p>
        <p >Cantidad de Puestos: {poachingDetail.postsQuantity}</p>
        <p >Frecuencia de Venta: {poachingDetail.postsFrecuency}</p>
        <p >Tipo de comercio: {poachingDetail.commercyType}</p>
        <p >Estado de comercio: {poachingDetail.commercyStatus}</p>
        <p >Animal: {poachingDetail.animal}</p>
        <p >Condicion: {poachingDetail.animalCondition}</p>
        <p >Cantidad: {poachingDetail.quantity}</p>
        <p >Precio: {poachingDetail.price}</p>
        <p >Observador: {poachingDetail.observador}</p>
        <p >Otro: {poachingDetail.otro}</p>
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