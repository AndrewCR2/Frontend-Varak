import axios from "axios";

const USUARIO_API_URL = "http://localhost:8085/api/usuarios";
const LOGIN_API_URL = "http://localhost:8085/api/login";


class UsuarioService {

    createUsuario(usuario) {
        return axios.post(USUARIO_API_URL, usuario);
    }

    loginUsuario(usuario,config) {
        return axios.post(LOGIN_API_URL, usuario);
    }



}

export default new UsuarioService();