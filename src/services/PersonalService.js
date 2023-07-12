import axios from "axios";

const PERSONAL_API_URL = "http://localhost:8082/personal/api";

class PersonalService {

    getAllPersonal() {
        return axios.get(PERSONAL_API_URL);
    }

    createPersonal(personal) {
        return axios.post(PERSONAL_API_URL, personal);
    }

    getPersonalById(personalId) {
        return axios.get(PERSONAL_API_URL + '/' + personalId);
    }

    updatePersonal(personalId, personal) {
        return axios.put(PERSONAL_API_URL + '/' + personalId, personal);
    }

    deletePersonal(personalId) {
        return axios.delete(PERSONAL_API_URL + '/' + personalId);
    }
}

export default new PersonalService();