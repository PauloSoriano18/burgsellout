import axios from "axios";

const base_api_url = "http://burgsellout/api/v1";

///Route

export default {
    // AUTH
    getRegister: (data) =>
        axios.post(`${base_api_url}/auth/register`, data).catch((error) => {
            console.log(error.response);
            console.log(data);
        }),

    getLogin: (data) =>
        axios.post(`${base_api_url}/auth/login`, data).catch((error) => {
            console.log(error.response);
            console.log(data);
        }),
    getLogout: () =>
        axios.post(`${base_api_url}/auth/logout`).catch((error) => {
            console.log(error.response);
        }),
    getUserAll: () =>
        axios.get(`${base_api_url}/admin/user`).catch((error) => {
            console.log(error.response);
        }),
    getUserById: (id) =>
        axios.get(`${base_api_url}/admin/user/${id}`).catch((error) => {
            console.log(error.response);
        }),
    getUserUpdate: (data, id) =>
        axios.put(`${base_api_url}/admin/user/${id}`, data).catch((error) => {
            console.log(error.response);
        }),
    getUsuarioDeleteById: (id) =>
        axios.delete(`${base_api_url}/admin/user/${id}`).catch((error) => {
            console.log(error.response);
        }),
    getCategoriaAll: () =>
        axios.get(`${base_api_url}/admin/categoria`).catch((error) => {
            console.log(error.response);
        }),
    getCategoriaStore: (data) =>
        axios.post(`${base_api_url}/admin/categoria`, data).catch((error) => {
            console.log(error.response);
            console.log(data);
        }),
    getCategoriaById: (id) =>
        axios.get(`${base_api_url}/admin/categoria/${id}`).catch((error) => {
            console.log(error.response);
        }),
    getCategoriaUpdate: (data, id) =>
        axios
            .put(`${base_api_url}/admin/categoria/${id}`, data)
            .catch((error) => {
                console.log(error.response);
            }),
    getCategoriaDeleteById: (id) =>
        axios.delete(`${base_api_url}/admin/categoria/${id}`).catch((error) => {
            console.log(error.response);
        }),

    /************************************************************* */
    getFacturadoByCanal: (canal) =>
        axios.get(`${base_api_url}/client/resfac/${canal}`).catch((error) => {
            console.log(error.response);
        }),
    getObjetivoByCanal: (canal) =>
        axios.get(`${base_api_url}/client/objetivo/${canal}`).catch((error) => {
            console.log(error.response);
        }),
};
