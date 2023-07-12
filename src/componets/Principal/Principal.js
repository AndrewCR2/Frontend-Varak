import React, { useEffect } from 'react';
import { useLocation, } from 'react-router-dom';

import varak from '../img/logo.png'; // Asegúrate de importar correctamente la imagen
import validateToken from '../../helpers/validateToken';
import CerrarSesion from '../../helpers/deleteStorage';
export const Principal = () => {

    useEffect(() => {
        validateToken();
    }, []);

    const location = useLocation();
    if (location.pathname !== '/principal' &&
        location.pathname !== '/clientes' &&
        location.pathname !== '/reservas' &&
        location.pathname !== '/sedes' &&
        location.pathname !== '/vehiculos') {
        return null;
    }


    return (
        <>
            <header id="header" class="header fixed-top">
                <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <a class="logo d-flex align-items-center" href="/principal">
                        <img src={varak} class="img-fluid" alt="Value1" /><span>VARAK</span>
                    </a>

                    <nav id="navbar" class="navbar">
                        <ul>
                            <li><a class="nav-link scrollto" href="/clientes">Clientes</a></li>
                            <li><a class="nav-link scrollto" href="/vehiculos">Vehiculos</a></li>
                            <li><a class="nav-link scrollto" href="/reservas">Reservas</a></li>
                            <li><a class="nav-link scrollto" href="/sedes">Sede</a></li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                                    aria-expanded="false">Opciones</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Ajustes</a></li>
                                    <li><a class="dropdown-item text-danger" href="#" onClick={CerrarSesion}>Cerrar Sesion</a></li>
                                </ul>
                            </li>

                        </ul>

                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>


                </div>
            </header>
        </>
    )
}

export default Principal;