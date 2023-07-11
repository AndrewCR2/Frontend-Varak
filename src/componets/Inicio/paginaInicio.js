import React from 'react';
import home from '../img/undraw_automobile_repair_ywci.svg';
import value1 from '../img/values-1.png';
import value2 from '../img/values-2.png';
import value3 from '../img/values-3.png';
import features from '../img/features.png';
import andrew from '../img/team/andrew.jpg';
import valentino from '../img/team/valentino.jpg';
import rousse from '../img/team/rousse.jpg';
import anabel from '../img/team/anabel.jpg';
import keisy from '../img/team/keisy22.jpg';

export const Inicio = () => {
    return (
        <div>
            <>
            
                <section id="hero" className="hero d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column justify-content-center">
                                <h1 data-aos="fade-up">
                                    Ofrecemos soluciones modernas para su vehiculo
                                </h1>
                                <p data-aos="fade-up" data-aos-delay={400}>
                                    Descubre la emoción de conducir con nuestra empresa de autos líder
                                    en el mercado. Nuestros vehículos ofrecen un equilibrio perfecto
                                    entre estilo, rendimiento y tecnología avanzada. Tenemos el auto
                                    perfecto para satisfacer tus necesidades y superar tus expectativas.
                                </p>
                                <div data-aos="fade-up" data-aos-delay={600}>
                                    <div className="text-center text-lg-start">
                                        <a href="#values" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                            <span>Ver Más</span>
                                            <i className="bi bi-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay={200} >
                            <img src={home} class="img-fluid" alt="Home" />
                            </div>
                        </div>
                    </div>
                </section>

                <main id="main">
                    <section id="values" className="values">
                        <div className="container" data-aos="fade-up">
                            <header className="section-header">
                                <h2>Nuestros Servicios</h2>
                                <p>Algunos de nuestros servicios incluyen:</p>
                            </header>
                            <div className="row">
                                <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="box">

                                    <img src={value1} class="img-fluid" alt="Value1" />
                                        <h3>Venta de vehículos nuevos</h3>
                                        <p>
                                            Contamos con una selección de autos nuevos de diferentes marcas
                                            y modelos. Nuestro equipo de ventas está capacitado para
                                            ayudarte a encontrar el vehículo que mejor se adapte a tus
                                            necesidades y preferencias.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={400} >
                                    <div className="box">
                                        <img src={value2} class="img-fluid" alt="Value2" />
                                        
                                        <h3>Asesoramiento personalizado</h3>
                                        <p>
                                            Nuestro equipo de ventas está a tu disposición para brindarte
                                            asesoramiento personalizado y responder a todas tus preguntas
                                            sobre nuestros vehículos y servicios. Estamos comprometidos en
                                            proporcionarte la mejor experiencia de compra.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-4 mt-lg-0"  data-aos="fade-up"  data-aos-delay={600} >
                                    <div className="box">
                                        <img src={value3} class="img-fluid" alt="Value3" /> 
                                        
                                        <h3>Financiamiento</h3>
                                        <p>
                                            Contamos con opciones de financiamiento para ayudarte a obtener
                                            el vehículo que deseas. Nuestro equipo puede asesorarte sobre
                                            los diferentes planes y ayudarte a encontrar la opción más
                                            conveniente para tus necesidades y presupuesto.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="valores" className="features">
                        <div className="container" data-aos="fade-up">
                            <header className="section-header">
                                <h2>Valores</h2>
                                <p>Nos guiamos por una serie de valores fundamentales</p>
                            </header>
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src={features} class="img-fluid" alt="Features" />
                                </div>
                                <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                                    <div className="row align-self-center gy-4">
                                        <div className="col-md-6" data-aos-delay={200}>
                                            <div className="feature-box d-flex align-items-center">
                                                <i className="bi bi-check" />
                                                <h3>Integridad</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-6" data-aos-delay={300}>
                                            <div className="feature-box d-flex align-items-center">
                                                <i className="bi bi-check" />
                                                <h3>Innovación</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-6" data-aos-delay={400}>
                                            <div className="feature-box d-flex align-items-center">
                                                <i className="bi bi-check" />
                                                <h3>Respeto</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-6" data-aos-delay={500}>
                                            <div className="feature-box d-flex align-items-center">
                                                <i className="bi bi-check" />
                                                <h3>Responsabilidad</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="team" className="team">
                        <div className="container" data-aos="fade-up">
                            <header className="section-header">
                                <h2>Grupo 3</h2>
                                <p>Nuestro equipo</p>
                            </header>
                            <div className="row gy-4" style={{ justifyContent: "center" }}>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up"  data-aos-delay={100}>
                                    <div className="member">
                                        <div className="member-img">
                                        <img src={andrew} class="img-fluid" alt="Andrew" />

                                            <div className="social">
                                                <a href="">
                                                    <i className="bi bi-twitter" />
                                                </a>
                                                <a href="">
                                                    <i className="bi bi-facebook" />
                                                </a>
                                                <a href="">
                                                    <i className="bi bi-instagram" />
                                                </a>
                                                <a href="">
                                                    <i className="bi bi-linkedin" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>André Coca</h4>
                                            <span>Equipo Desarrollo</span>
                                            <p>
                                                <strong>
                                                    "Tener un gran poder conlleva una gran responsabilidad 🕷️"
                                                </strong>
                                            </p>
                                            <p>
                                                Full stack Dev. Estudiante, programador y jugador de clash.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch"   data-aos="fade-up" data-aos-delay={200}  >
                                    <div className="member">
                                        <div className="member-img">
                                        <img src={valentino} class="img-fluid" alt="Valentino" />
                                            <div className="social">
                                                <a href="">
                                                    <i className="bi bi-twitter" />
                                                </a>
                                                <a href="">
                                                    <i className="bi bi-facebook" />
                                                </a>
                                                <a href="">
                                                    <i className="bi bi-instagram" />
                                                </a>
                                                <a href="">
                                                    <i className="bi bi-linkedin" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>Valentino Gómez</h4>
                                            <span>Equipo Desarrollo</span>
                                            <p>
                                                <strong>"No renuncies a tus sueños, sigue durmiendo"</strong>
                                            </p>
                                            <p>
                                                Estudiante de programación y trabajador part time, me gusta
                                                dormir. Prefiero los gatos porque son God y ex jugador de
                                                pokemon Unite, main greninja. Actual jugador de clash royale
                                                rumbo a las 7000 copas y me gusta el chaufa. Ya mencioné que
                                                me gusta dormir? También me gusta ver anime y sí me baño.{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-3 col-md-6 d-flex align-items-stretch"
                                    data-aos="fade-up"
                                    data-aos-delay={300}
                                >
                                    <div className="member">
                                        <div className="member-img">
                                        <img src={rousse} class="img-fluid" alt="Rousse" />
                                            <div className="social">
                                                <a href="">
                                                    <i className="bi bi-twitter" />
                                                </a>
                                                <a href="">
                                                    <i className="bi bi-facebook" />
                                                </a>
                                                <a href="">
                                                    <i className="bi bi-instagram" />
                                                </a>
                                                <a href="">
                                                    <i className="bi bi-linkedin" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>Rousse Cahuas</h4>
                                            <span>Equipo Desarrollo</span>
                                            <p>
                                                <strong>
                                                    "Necesito dinerito para ser V.I.P - Dónde está mi botella?"
                                                </strong>
                                            </p>
                                            <p>
                                                Muchacha responsable y con buenos gustos musicales, se queja
                                                constantemente de la ortografía de los demás. Su modelo a
                                                seguir es Susy Díaz y desea hablar inglés como Tongo.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div  className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={400}  >
                                    <div className="member">
                                        <div className="member-img">
                                        <img src={anabel} class="img-fluid" alt="Anabel" />
                                            <div className="social">
                                                <a href="">
                                                    <i className="bi bi-twitter" />
                                                </a>
                                                <a href="">
                                                    <i className="bi bi-facebook" />
                                                </a>
                                                <a href="">
                                                    <i className="bi bi-instagram" />
                                                </a>
                                                <a href="">
                                                    <i className="bi bi-linkedin" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>Anabel Huanca</h4>
                                            <span>Equipo Desarrollo</span>
                                            <p>
                                                <strong>🦆Es que tengo sueño D':</strong>
                                            </p>
                                            <p>
                                                Me gusta todo lo que incluya diseño y el arte pero aquí estoy
                                                estudiando programación, fan de clash royale con 5000 copas,
                                                skin de jinx en Lol porque sí. Mi sueño es ser front-end
                                                completo en el desarrollo web, estudiar diseño gráfico y
                                                viajar..
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={500}>
                                    <div className="member">
                                        <div className="member-img">
                                        <img src={keisy} class="img-fluid" alt="Keisy" />
                                            <div className="social">
                                                <a href="">
                                                    <i className="bi bi-twitter" />
                                                </a>
                                                <a href="">
                                                    <i className="bi bi-facebook" />
                                                </a>
                                                <a href="">
                                                    <i className="bi bi-instagram" />
                                                </a>
                                                <a href="">
                                                    <i className="bi bi-linkedin" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>Keisy Vallejos</h4>
                                            <span>Equipo Desarrollo</span>
                                            <p>
                                                <strong>
                                                    Hablen mal mi... Total... Ni me va, ni me viene, ni me
                                                    interesa - Apúrate patito
                                                </strong>
                                            </p>
                                            <p>
                                                Amante de Bad Bunny y Ferxxo. Mi mayor virtud es la
                                                puntualidad. Siempre team verano nunca invierno.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>

        </div>
    );

}
export default Inicio;