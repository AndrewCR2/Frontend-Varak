import axios from 'axios';
import React, { useState } from 'react';

import { validateForm } from '../../helpers/validateLogin';
import { useNavigate } from "react-router-dom";
import UsuarioService from '../../services/UsuarioService';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const sendUsuario = (e) => {
    e.preventDefault();
    const usuario = { email, password };

    UsuarioService.loginUsuario(usuario).then((response) => {
      console.log(response.data);
      // const token = response.data.tokenJwt;
      // const { nombre, apellido, email } = response.data;
      // const usuario = {
      //   nombre,
      //   apellido,
      //   email
      // }
      if (response.data != "Fail") {
        localStorage.setItem('token', response.data);
        setLoginError(false);
        navigate('/principal');
      } else {
        setLoginError(true);
      }
    }).catch(error => {
      console.log(error);
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
                      <h2 className="text-center">Login</h2>
                      <div className="row justify-content-center">


                        <div className="col-lg-6 ">

                          {loginError && (
                            <div className="row justify-content-center">
                              <div className="col-md-12">
                                <div className="alert alert-danger error-message" role="alert">
                                  Las credenciales no coinciden
                                </div>
                              </div>
                            </div>
                          )}
                          <div className="row gy-4 justify-content-center ">
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
                              <input type="password" name="password" maxLength="55"
                                className={`form-control ${errors.password ? 'is-invalid' : password && 'is-valid'}`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                              />
                              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                            </div>

                            <div class="pt-3 mb-4">
                              <a href="/create-usuario" class="pt-2"> <span >Crear cuenta</span> </a>

                              <button className="btn btn-dark btn-lg btn-block mt-2" onClick={(e) => {
                                e.preventDefault();
                                const { isValid, errors } = validateForm(email, password);
                                setErrors(errors);
                                if (isValid) {
                                  sendUsuario(e);
                                }
                              }}
                              > Ingresar </button>
                            </div>

                          </div>

                        </div>
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
};

export default Login;