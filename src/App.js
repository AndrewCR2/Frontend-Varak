import React from "react";
import './estilos.css';

import ListClientesComponet from './componets/cliente/ListClientesComponet';
import ListVehiculoComponet from './componets/vehiculo/ListVehiculoComponet';
import ListReservasComponets from './componets/reserva/ListReservasComponets';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddClienteComponet from './componets/cliente/AddClienteComponet';
import AddVehiculoComponent from './componets/vehiculo/AddVehiculoComponent';
import AddReservaComponet from './componets/reserva/AddReservaComponet';
import HeaderComponent from './componets/cliente/HeaderComponent';
import FooterComponent from './componets/cliente/FooterComponet';
import CreateUsuarioComponet from './componets/login/CreateUsuarioComponet';
import Login from './componets/login/LoginComponet';
import Inicio from "./componets/Inicio/paginaInicio";
import Principal from "./componets/Principal/Principal";
import validateToken from "./helpers/validateToken";
import Body from "./componets/Principal/Body";





function App() {

  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />

        <Routes>
          <Route exact path='/' element={<Inicio />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/create-usuario' element={<CreateUsuarioComponet />}></Route>
          {/* <Route exact path='/principal' element={<Principal />} onEnter={validateToken}></Route> */}

                //*Esto
          {/* <Route path='/clientes' element={<ListClientesComponet />}></Route>
          <Route path='/add-cliente' element={<AddClienteComponet />}></Route>
          <Route path='/edit-cliente/:id' element={<AddClienteComponet />}></Route>
          <Route path='/vehiculos' element={<ListVehiculoComponet />}></Route>
          <Route path='/add-vehiculo' element={<AddVehiculoComponent />}></Route>
          <Route path='/edit-vehiculo/:id' element={<AddVehiculoComponent />}></Route>
          <Route path='/reservas' element={<ListReservasComponets />}></Route>
          <Route path='/add-reserva' element={<AddReservaComponet />}></Route>
          <Route path='/edit-reserva/:id' element={<AddReservaComponet />}></Route> */}

          <Route
            path='/principal'
            element={<Body />}
            onEnter={validateToken} // Llama a validateToken al ingresar a la ruta
          />
          <Route
            path='/clientes'
            element={<ListClientesComponet />}
            onEnter={validateToken} // Llama a validateToken al ingresar a la ruta
          />
          <Route
            path='/add-cliente'
            element={<AddClienteComponet />}
            onEnter={validateToken} // Llama a validateToken al ingresar a la ruta
          />
          <Route
            path='/edit-cliente/:id'
            element={<AddClienteComponet />}
            onEnter={validateToken} // Llama a validateToken al ingresar a la ruta
          />
          <Route
            path='/vehiculos'
            element={<ListVehiculoComponet />}
            onEnter={validateToken} // Llama a validateToken al ingresar a la ruta
          />
          <Route
            path='/add-vehiculo'
            element={<AddVehiculoComponent />}
            onEnter={validateToken} // Llama a validateToken al ingresar a la ruta
          />
          <Route
            path='/edit-vehiculo/:id'
            element={<AddVehiculoComponent />}
            onEnter={validateToken} // Llama a validateToken al ingresar a la ruta
          />
          <Route
            path='/reservas'
            element={<ListReservasComponets />}
            onEnter={validateToken} // Llama a validateToken al ingresar a la ruta
          />
          <Route
            path='/add-reserva'
            element={<AddReservaComponet />}
            onEnter={validateToken} // Llama a validateToken al ingresar a la ruta
          />
          <Route
            path='/edit-reserva/:id'
            element={<AddReservaComponet />}
            onEnter={validateToken} // Llama a validateToken al ingresar a la ruta
          />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
