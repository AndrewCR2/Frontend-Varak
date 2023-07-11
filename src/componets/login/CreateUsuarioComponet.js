import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
// import img1 from '../assets/img/features-2.png';
import { Letters } from '../../helpers/Letters';
import { validateForm } from '../../helpers/validateUsuario';
import UsuarioService from '../../services/UsuarioService';

export const CreateUsuarioComponet = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    var ms = '';
    const [errors, setErrors] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: ''
    });

    const saveUsuario = (e) => {
        e.preventDefault();
        const usuario = { nombre, apellido, email, password };

        UsuarioService.createUsuario(usuario).then((response) => {

            if (response.status !== 200) {
                console.log(response.data);
                setLoginError(false);
                navigate('/login');
            } else {
                setLoginError(true);
            }

        }).catch(error => {
            setLoginError(true);
            if (error.response) {
                const errorMessage = error.response.data;
                console.log(errorMessage);
                setErrorMessage(errorMessage);
            }

        })
    }

    return (
        <section class="vh-100 sect-login">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col col-xl-10">
                        <div class="card">
                            <div class="row g-0">
                                <div class="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" class="img-fluid" />
                                </div>


                                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div class="card-body p-4 p-lg-5 text-black">
                                        <form id="formulario1" method="post">
                                            <h2 className="text-center">Crear Cuenta</h2>
                                            <div className="row justify-content-center">
                                                <form>
                                                    {loginError && (
                                                        <div className="row justify-content-center">
                                                            <div className="col-md-12">
                                                                <div className="alert alert-danger error-message" role="alert">
                                                                    {errorMessage}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                    <div className="row gy-4 justify-content-center">
                                                        <div className={`col-md-6 ${errors.nombre ? 'has-error' : nombre && 'is-valid'}`}>
                                                            <label className="form-label">Nombre</label>
                                                            <input
                                                                type="text"
                                                                name="nombre"
                                                                className={`form-control form-control-sm ${errors.nombre ? 'is-invalid' : nombre && 'is-valid'}`}
                                                                maxLength="25"
                                                                value={nombre}
                                                                onChange={(e) => setNombre(e.target.value)}
                                                                onKeyPress={Letters}
                                                                required
                                                            />
                                                            {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                                                        </div>
                                                        <div className={`col-md-6 ${errors.apellido ? 'has-error' : apellido && 'is-valid'}`}>
                                                            <label className="form-label">Apellido</label>
                                                            <input
                                                                type="text"
                                                                name="apellido"
                                                                className={`form-control ${errors.apellido ? 'is-invalid' : apellido && 'is-valid'}`}
                                                                maxLength="20"
                                                                value={apellido}
                                                                onChange={(e) => setApellido(e.target.value)}
                                                                onKeyPress={Letters}
                                                                required
                                                            />
                                                            {errors.apellido && <div className="invalid-feedback">{errors.apellido}</div>}
                                                        </div>

                                                        <div className={`col-md-12 ${errors.email ? 'has-error' : email && 'is-valid'}`}>
                                                            <label className="form-label">Correo</label>
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                className={`form-control ${errors.email ? 'is-invalid' : email && 'is-valid'}`}
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                required
                                                            />
                                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                                        </div>
                                                        <div className={`col-md-12 ${errors.password ? 'has-error' : password && 'is-valid'}`}>
                                                            <label className="form-label">Contraseña</label>
                                                            <input
                                                                type="password"
                                                                name="password"
                                                                maxLength="55"
                                                                className={`form-control ${errors.password ? 'is-invalid' : password && 'is-valid'}`}
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                                required
                                                            />
                                                            {errors.password && <div
                                                                className="invalid-feedback">{errors.password}</div>}
                                                        </div>

                                                        <div class="pt-3 mb-4">
                                                            <button className="btn btn-dark btn-lg btn-block"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    const { isValid, errors } = validateForm(nombre, apellido, email, password);
                                                                    setErrors(errors);
                                                                    if (isValid) {
                                                                        saveUsuario(e);
                                                                    }
                                                                }}
                                                            > Crear</button>
                                                        </div> </div>
                                                </form>


                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}


export default CreateUsuarioComponet;