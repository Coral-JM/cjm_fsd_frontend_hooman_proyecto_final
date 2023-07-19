import axios from 'axios';
const root = "http://localhost:8000/api";

export const registerMe = async (user) => {
    return await axios.post(`${root}/register`, user);
}