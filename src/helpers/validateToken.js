
const validateToken = async () => {

    const token = localStorage.getItem('token');

    if (!token) {
        window.location = '/';
        return;
    }

    const resp = await fetch('http://localhost:8085/api/auth', {
        headers: { 'token': token }
    });
    try {
        const { tokenJwt, nombre } = await resp.json();
        localStorage.setItem('token', tokenJwt);
        localStorage.setItem('data', nombre);
    } catch (error) {
        console.error('Error al validar el token:', error);
        window.location = '/';
    }
};

export default validateToken;
