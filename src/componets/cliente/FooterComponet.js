import React from 'react'
import varak from '../img/logo.png';
import { useLocation } from 'react-router-dom';
export const FooterComponet = () => {
    const location = useLocation();
    if (location.pathname !== '/') {
        return null;
    }

    return (
        <>
            <footer id="footer" class="footer">

                <div class="footer-newsletter">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12 text-center">
                                <h4>AFÍLIATE CON NOSOTROS</h4>
                            </div>
                            <div class="col-lg-6">
                                <form >
                                    <input type="email" name="email" /><input type="submit" value="Suscribirse" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-top">
                    <div class="container">
                        <div class="row gy-4">
                            <div class="col-lg-5 col-md-12 footer-info">
                                <a href="index.html" class="logo d-flex align-items-center">
                                    <img src={varak} class="img-fluid" alt="Value1" />
                                    <span>VARAK</span>
                                </a>
                                <p>Empresa encargada del mantenimiento de su vehÍculo</p>
                                <div class="social-links mt-3">
                                    <a href="/" class="twitter"><i class="bi bi-twitter"></i></a>
                                    <a href="/" class="facebook"><i class="bi bi-facebook"></i></a>
                                    <a href="/" class="instagram"><i class="bi bi-instagram"></i></a>
                                    <a href="/" class="linkedin"><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>

                            <div class="col-lg-2 col-6 footer-links">
                                <h4>MÁS INFORMACIÓN</h4>
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <a href="/">Home</a></li>
                                    <li><i class="bi bi-chevron-right"></i> <a href="/">Sobre nosotros</a></li>
                                    <li><i class="bi bi-chevron-right"></i> <a href="/">servicios</a></li>
                                    <li><i class="bi bi-chevron-right"></i> <a href="/">Términos de servicio</a></li>
                                    <li><i class="bi bi-chevron-right"></i> <a href="/">Política de privacidad</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-2 col-6 footer-links">
                                <h4>NUESTROS SERVICIOS</h4>
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <a href="/vehiculos">Vehículos</a></li>
                                    <li><i class="bi bi-chevron-right"></i> <a href="/clientes">Clientes</a></li>
                                    <li><i class="bi bi-chevron-right"></i> <a href="/personal">Personal</a></li>
                                    <li><i class="bi bi-chevron-right"></i> <a href="/Web/sedes">Sedes</a></li>
                                    <li><i class="bi bi-chevron-right"></i> <a href="/Web/reservas">Reserva</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                                <h4>CONTÁCTANOS</h4>
                                <p>
                                    Certus <br />
                                    Av. Santiago de Surco N° 4717<br />
                                    Santiago de Surco 15039 <br /><br />
                                    <strong>Teléfono:</strong> +51 999 888 777<br />
                                    <strong>Email:</strong> varak@gmail.com<br />
                                </p>

                            </div>

                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="copyright">
                        &copy; Copyright <strong><span>VARAK</span></strong>. All Rights Reserved
                    </div>

                </div>
            </footer>
        </>
    )
}

export default FooterComponet;