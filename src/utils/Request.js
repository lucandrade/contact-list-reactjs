import Axios from "axios";
import config from '../env';

const token = window.localStorage.getItem('token');
const options = {
    baseURL: config.server,
    withCredentials: true,
    timeout: 30000
};

if (token) {
    options.headers = {
        Authorization: token
    }
}

const instance = Axios.create(options);
instance.interceptors.response.use(response => {
    return response;
}, err => {
    if (err.response && err.response.status) {
        instance.defaults.headers = {};
    } else {
        return Promise.reject(err);
    }
});

export default instance;