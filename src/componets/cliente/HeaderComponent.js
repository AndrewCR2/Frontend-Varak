import React from 'react'
import varak from '../img/logo.png';
import { useLocation } from 'react-router-dom';


export const HeaderComponent = () => {
    const location = useLocation();
    if (location.pathname !== '/' ) {
        return null;
    }

    return (
        <>

            <header id="header" class="header fixed-top">
                <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <a class="logo d-flex align-items-center" href="/">
                        <img src={varak} class="img-fluid" alt="Value1" /><span>VARAK</span>
                    </a>

                    <nav id="navbar" class="navbar">
                        <ul>
                            <li><a class="nav-link scrollto active mr-4" href="/home">Home</a></li>
                            <li><a class="nav-link scrollto active" href="/login"> <button type="button" class="btn btn-outline-primary">Iniciar Sesión</button></a></li>
                            <li><a class="nav-link scrollto active" href="/create-usuario">  <button class="btn btn-primary " type="submit">Crear Cuenta</button></a></li>

                        </ul>

                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>


                </div>
            </header>
        </>
    )
}

export default HeaderComponent;