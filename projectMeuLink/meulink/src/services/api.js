import axios from 'axios';

export const key = "9e06bf1532cca89f669793b944e734bdb9eda3e2";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    // cabeçalho da requizisão
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;


// configurando a api