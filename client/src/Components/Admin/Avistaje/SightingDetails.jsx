import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getSighting } from "../../../actions";
import { deleteSighting } from "../../../actions";

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
        
        <div>
        <Link to='/sightingData'>
        <button>Panel de Registros</button>
        </Link>
            <h1>Detalles de Avistaje</h1>
            <div>
        <p >Pais: {sightingDetail.country}</p>
        <p >Localidad: {sightingDetail.place}</p>
        <p>Ubicacion: {sightingDetail.geometry}</p>
        <p>UbicaionManual: {sightingDetail.geo}</p>
        <p >Fecha: {sightingDetail.date}</p>
        <p >Hora: {sightingDetail.time}</p>
        <p >Altitud: {sightingDetail.altitud}</p>
        <p >Nonbre Comun: {sightingDetail.name}</p>
        <p >Nombre Cientifico: {sightingDetail.scientistname}</p>
        <p >Tipo de Registro: {sightingDetail.type}</p>
        <p >Observador: {sightingDetail.observador}</p>
        <p >Otro: {sightingDetail.otro}</p>
        <div>
                <button onClick={() => handleDeleteSighting(id)}>
                  Eliminar Registro
                </button>
                <Link to={`/putSighting/${id}`}>
                     <button>Modificar Registro</button>
                </Link> 
        </div>
      </div>
        </div>
    )

}