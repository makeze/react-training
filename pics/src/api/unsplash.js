import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID kW3cEPCLiahyXDGLjZLPVVFpn5S78GpoWx48-a0fJjo'
    }
});