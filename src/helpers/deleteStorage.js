const CerrarSesion = () => {

    localStorage.removeItem('token'); // Elimina el token del almacenamiento local
    localStorage.removeItem('data');
    window.location.reload();
}

export default CerrarSesion;