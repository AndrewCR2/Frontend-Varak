import React, { useEffect, useState } from 'react'
import SedeService from '../../services/SedeService';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import img1 from '../assets/img/features-2.png';
import { Letters } from '../../helpers/Letters';
import { Numbers } from "../../helpers/Numbers";
import { validateForm } from '../../helpers/validateSede';
import features2 from '../img/features-2.png';
import validateToken from '../../helpers/validateToken';
export const AddSedeComponet = () => {
    useEffect(() => {
        validateToken();
    }, []);
    const [id_personal, setId_Personal] = useState('');
    const [nombre, setNombre] = useState('');
    const [direccion, SetDireccion] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const [errors, setErrors] = useState({
        id_vehiculo: '',
        nombre: '',
        direccion: ''
    });

    const saveOrUpdateSede = (e) => {
        e.preventDefault();
        const sede = { id_personal, nombre, direccion };

        if (id) {
            SedeService.updateSede(id, sede).then((response) => {
                console.log(response.data);
                navigate('/sedes');
            }).catch(error => {
                console.log(error);
            })
        } else {
            SedeService.createSede(sede).then((response) => {
                console.log(response.data);
                navigate('/sedes');
            }).catch(error => {
                console.log(error);
            })
        }

    }

    useEffect(() => {
        SedeService.getSedeById(id).then((response) => {


            setId_Personal(response.data.id_personal);
            setNombre(response.data.nombre);
            SetDireccion(response.data.direccion);
        }).catch(error => {
            console.log(error);
        })
    }, []);



    const title = () => {
        if (id) {
            return <h2 className='text-center'>Actualizar Sede</h2>;
        } else {
            return <h2 className='text-center'>Agregar Sede</h2>;
        }
    }
    return (
        <div>
            <main id="main">
                <section id="contact" class="contact  mt-5">

                    <div class="container">

                        <header class="section-header">
                            <h2>{title()}</h2>
                            <p>Nueva sede</p>
                        </header>

                        <div class="row gy-4">
                            <div class="col-lg-6">
                                <img src={features2} class="img-fluid" alt="Features2" />
                            </div>

                            <div class="col-lg-6">

                                <form>
                                    <div class="row gy-4 justify-content-center" >
                                        <div className={`col-md-6 ${errors.id_personal && 'has-error'}`}>
                                            <label className='form-label'>id_personal</label>
                                            <input
                                                type="text"
                                                placeholder='Ingrese su id'
                                                name='id_personal'
                                                className={`form-control  ${errors.id_personal ? 'is-invalid' : id_personal && 'is-valid'}`}
                                                minLength="1"
                                                value={id_personal}
                                                onChange={(e) => setId_Personal(e.target.value)}
                                                onKeyPress={Numbers} required />
                                            {errors.id_personal && <div className="invalid-feedback">{errors.id_personal}</div>}
                                        </div>

                                        <div className={`col-md-12 ${errors.nombre && 'has-error'}`}>
                                            <label className='form-label'>nombre</label>
                                            <input
                                                type="text"
                                                placeholder='Ingrese su nombre'
                                                name='nombre'
                                                className={`form-control  ${errors.nombre ? 'is-invalid' : nombre && 'is-valid'}`}
                                                maxlength="10"
                                                value={nombre}
                                                onChange={(e) => setNombre(e.target.value)} required />
                                            {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                                        </div>
                                        <div className={`col-md-12 ${errors.direccion && 'has-error'}`}>
                                            <label className='form-label'>Direccion</label>
                                            <input
                                                type="text"
                                                placeholder='Ingrese su direccion'
                                                name='direccion'
                                                className={`form-control  ${errors.direccion ? 'is-invalid' : direccion && 'is-valid'}`}
                                                maxlength="20"
                                                value={direccion}
                                                onChange={(e) => SetDireccion(e.target.value)} required />
                                            {errors.direccion && <div className="invalid-feedback">{errors.direccion}</div>}
                                        </div>

                                        <button
                                            className="btn btn-success mt-4"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const { isValid, errors } = validateForm(nombre, direccion, id_personal);
                                                setErrors(errors);
                                                if (isValid) {
                                                    saveOrUpdateSede(e);
                                                }
                                            }}
                                        > Guardar </button>
                                        &nbsp; &nbsp;
                                        <Link to='/sedes' className='btn btn-danger mt-4'>
                                            Cancelar
                                        </Link>

                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default AddSedeComponet;