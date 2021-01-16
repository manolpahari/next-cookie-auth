import axios from 'axios';

axios.defaults.withCredentials = true;

export const loginUser = async (email, password) => {
    const { data } = await axios.post('/api/login', { email, password });
    return data;
}

export const getUserProfile = async () => {
    const { data } = await axios.get('/api/profile');
    return data;
}