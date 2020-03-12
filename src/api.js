import axios from 'axios';

const api = axios.create({
    base_url: 'http://localhost:8080/api'
})

export default api;