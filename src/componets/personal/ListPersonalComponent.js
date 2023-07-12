import React, { useEffect, useState } from 'react'
import PersonalService from '../../services/PersonalService';
import { Link } from "react-router-dom";
import validateToken from '../../helpers/validateToken';
import Principal from '../Principal/Principal';
export const ListPersonalComponet = () => {
    useEffect(() => {
        validateToken();
    }, []);
    const [personal, setPersonal] = useState([]);

    useEffect(() => {
        listarPersonal()
    }, [])

    const listarPersonal = () => {
        PersonalService.getAllPersonal().then((response) => {
            setPersonal(response.data)
        }).catch(error => {
            console.log(error);
        })
    }
    const deletePersonal = (personalId) => {
        PersonalService.deletePersonal(personalId).then((response) => {
            listarPersonal();
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <>
         <Principal />
        <div className='container mt-5'>
            <br /><br /><br />
            <h2 className='text-center'>Lista del Personal</h2>
            <Link to='/add-personal' className='btn btn-primary mb-2'>Agregar Personal</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Id_personal</th>
                        <th>nombre</th>
                        <th>apellido</th>
                        <th>id_sede</th>
                        <th>cargo</th>
                        <th>Turno</th>
                        <th>Acciones</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        personal.map((personal) => {
                            return (
                                <tr key={personal.id_sede}>
                                    <td>{personal.id_sede}</td>
                                    <td>{personal.nombre}</td>
                                    <td>{personal.apellido}</td>
                                    <td>{personal.id_sede}</td>
                                    <td>{personal.cargo}</td>
                                    <td>{personal.turno}</td>
                                    <td>
                                        <Link to={`/edit-personal/${personal.id_personal}`} className='btn btn-info'>Actualizar</Link>
                                        <button style={{ marginLeft: "10px" }} className='btn btn-danger' onClick={() => deletePersonal(personal.id_personal)}>Eliminar</button>
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


export default ListPersonalComponet;