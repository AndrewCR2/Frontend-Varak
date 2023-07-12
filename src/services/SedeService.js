import axios from "axios";

const SEDE_API_URL = "http://localhost:8084/sede/api";

class SedeService {

    getAllSedes() {
        return axios.get(SEDE_API_URL);
    }

    createSede(sede) {
        return axios.post(SEDE_API_URL, sede);
    }

    getSedeById(sedeId) {
        return axios.get(SEDE_API_URL + '/' + sedeId);
    }

    updateSede(sedeId, sede) {
        return axios.put(SEDE_API_URL + '/' + sedeId, sede);
    }

    deleteSede(sedeId) {
        return axios.delete(SEDE_API_URL + '/' + sedeId);
    }
}

export default new SedeService();