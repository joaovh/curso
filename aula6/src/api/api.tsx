import axios from 'axios';

const api = axios.create ({
    baseURL: 'https://api.agilefacil.com.br/api/v1/',headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    });

    export {api};