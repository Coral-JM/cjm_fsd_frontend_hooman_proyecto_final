import axios from 'axios';
const root = "http://localhost:8000/api";

export const registerMe = async (user) => {
    return await axios.post(`${root}/register`, user);
}

export const loginMe = async (userData) => {
    let res = await axios.post(`${root}/login`, userData);
    return res.data
}
export const getProfile = async (token) => {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    let res = await axios.get(`${root}/profile/myprofile`, config);
    console.log(res)
    return res;
  };

  export const getLocals = async () => {
    return await axios.get(`${root}/locals`)
  }