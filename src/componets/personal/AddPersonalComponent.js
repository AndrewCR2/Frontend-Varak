import React, { useEffect, useState } from 'react'
import PersonalService from '../../services/PersonalService';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import img1 from '../assets/img/features-2.png';
import { Letters } from '../../helpers/Letters';
import { Numbers } from '../../helpers/Numbers';
import { validateForm } from '../../helpers/validatePersonal';
import features2 from '../img/features-2.png';
import validateToken from '../../helpers/validateToken';
export const AddPersonalComponet = () => {
    useEffect(() => {
        validateToken();
    }, []);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [id_sede, setId_sede] = useState('');
    const [cargo, setCargo] = useState('');
    const [turno, setTurno] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const [errors, setErrors] = useState({
        nombre: '',
        apellido: '',
        id_sede: '',
        cargo: '',
        turno: ''
    });

    const saveOrUpdatePersonal = (e) => {
        e.preventDefault();
        const personal = { nombre, apellido, id_sede, cargo, turno };

        if (id) {
            PersonalService.updatePersonal(id, personal).then((response) => {
                console.log(response.data);
                navigate('/personal');
            }).catch(error => {
                console.log(error);
            })
        } else {
            PersonalService.createPersonal(personal).then((response) => {
                console.log(response.data);
                navigate('/personal');
            }).catch(error => {
                console.log(error);
            })
        }

    }

    useEffect(() => {
        PersonalService.getPersonalById(id).then((response) => {

            setNombre(response.data.nombre);
            setApellido(response.data.apellido);
            setId_sede(response.data.id_sede);
            setCargo(response.data.cargo);
            setTurno(response.data.turno);
        }).catch(error => {
            console.log(error);
        })
    }, []);



    const title = () => {
        if (id) {
            return <h2 className='text-center'>Actualizar Personal</h2>;
        } else {
            return <h2 className='text-center'>Agregar Personal</h2>;
        }
    }
    return (
        <div>
            <main id="main">
                <section id="contact" class="contact  mt-5">

                    <div class="container">

                        <header class="section-header">
                            <h2>{title()}</h2>
                            <p>Nuevo Personal</p>
                        </header>

                        <div class="row gy-4">
                            <div class="col-lg-6">
                                <img src={features2} class="img-fluid" alt="Features2" />
                            </div>

                            <div class="col-lg-6">

                                <form>
                                    <div class="row gy-4 justify-content-center" >
                                    <div className={`col-md-12 ${errors.nombre && 'has-error'}`}>
                                            <label className='form-label'>Nombre</label>
                                            <input
                                                type="text"
                                                placeholder='Ingrese su nombre'
                                                name='nombre'
                                                className={`form-control  ${errors.nombre ? 'is-invalid' : nombre && 'is-valid'}`}
                                                maxlength="20"
                                                value={nombre}
                                                onChange={(e) => setNombre(e.target.value)} required />
                                            {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                                        </div>
                                        <div className={`col-md-12 ${errors.apellido && 'has-error'}`}>
                                            <label className='form-label'>Apellido</label>
                                            <input
                                                type="text"
                                                placeholder='Ingrese su apellido'
                                                name='apellido'
                                                className={`form-control  ${errors.apellido ? 'is-invalid' : apellido && 'is-valid'}`}
                                                maxlength="20"
                                                value={apellido}
                                                onChange={(e) => setApellido(e.target.value)} required />
                                            {errors.apellido && <div className="invalid-feedback">{errors.apellido}</div>}
                                        </div>
                                        <div className={`col-md-6 ${errors.id_sede && 'has-error'}`}>
                                            <label className='form-label'>id_sede</label>
                                            <input
                                                type="text"
                                                placeholder='Ingrese su id_sede'
                                                name='id_sede'
                                                className={`form-control  ${errors.id_sede ? 'is-invalid' : id_sede && 'is-valid'}`}
                                                minLength="1"
                                                value={id_sede}
                                                onChange={(e) => setId_sede(e.target.value)}
                                                onKeyPress={Numbers} required />
                                            {errors.id_sede && <div className="invalid-feedback">{errors.id_sede}</div>}
                                        </div>
                                        <div className={`col-md-12 ${errors.cargo && 'has-error'}`}>
                                            <label className='form-label'>cargo</label>
                                            <input
                                                type="text"
                                                placeholder='Ingrese su cargo'
                                                name='cargo'
                                                className={`form-control  ${errors.cargo ? 'is-invalid' : cargo && 'is-valid'}`}
                                                maxlength="15"
                                                value={cargo}
                                                onChange={(e) => setCargo(e.target.value)} required />
                                            {errors.cargo && <div className="invalid-feedback">{errors.cargo}</div>}
                                        </div>
                                        <div className={`col-md-12 ${errors.turno && 'has-error'}`}>
                                            <label className='form-label'>turno</label>
                                            <input
                                                type="text"
                                                placeholder='Ingrese su turno'
                                                name='turno'
                                                className={`form-control  ${errors.turno ? 'is-invalid' : turno && 'is-valid'}`}
                                                maxlength="10"
                                                value={turno}
                                                onChange={(e) => setTurno(e.target.value)} required />
                                            {errors.turno && <div className="invalid-feedback">{errors.turno}</div>}
                                        </div>

                                        <button
                                            className="btn btn-success mt-4"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const { isValid, errors } = validateForm(nombre, apellido, id_sede, cargo, turno);
                                                setErrors(errors);
                                                if (isValid) {
                                                    saveOrUpdatePersonal(e);
                                                }
                                            }}
                                        > Guardar </button>
                                        &nbsp; &nbsp;
                                        <Link to='/personal' className='btn btn-danger mt-4'>
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

export default AddPersonalComponet;