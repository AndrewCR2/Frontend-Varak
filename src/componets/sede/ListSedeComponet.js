import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import validateToken from '../../helpers/validateToken';

import SedeService from '../../services/SedeService';
import Principal from '../Principal/Principal';
export const ListSedesComponet = () => {
    useEffect(() => {
        validateToken();
    }, []);
    const [sedes, setSedes] = useState([]);

    useEffect(() => {
        listarSedes()
    }, [])

    const listarSedes = () => {
        SedeService.getAllSedes().then((response) => {
            setSedes(response.data)
        }).catch(error => {
            console.log(error);
        })
    }
    const deleSedes = (sedeId) => {
        SedeService.deleteSede(sedeId).then((response) => {
            listarSedes();
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <>
            <Principal />
            <div className='container mt-5'>
                <br /><br /><br />
                <h2 className='text-center'>Lista de Sedes</h2>
                <Link to='/add-sede' className='btn btn-primary mb-2'>Agregar Sede</Link>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Id_sede</th>
                            <th>nombre</th>
                            <th>Direccion</th>
                            <th>Id_personal</th>
                            <th>Acciones</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            sedes.map((sede) => {
                                return (
                                    <tr key={sede.id_sede}>
                                        <td>{sede.id_sede}</td>
                                        <td>{sede.nombre}</td>
                                        <td>{sede.direccion}</td>
                                        <td>{sede.id_personal}</td>
                                        <td>
                                            <Link to={`/edit-sede/${sede.id_sede}`} className='btn btn-info'>Actualizar</Link>
                                            <button style={{ marginLeft: "10px" }} className='btn btn-danger' onClick={() => deleSedes(sede.id_sede)}>Eliminar</button>
                                        </td>
                                    </tr>
                                )

                            }
                            )
                        }
                    </tbody>
                </table>
            </div >
        </>

    )
}


export default ListSedesComponet;