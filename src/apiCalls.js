import axios from 'axios';
// const root = "https://hooman-backend.vercel.app/api/api";
const root = 'http://localhost:8000/api'


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
    // console.log(res)
    return res;
  };

  export const getLocals = async () => {

    return await axios.get(`${root}/locals/active`)
  }

  export const  updateProf = async (data, token) => {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.post(`${root}/profile/myprofile`, data, config);
    console.log(data)
    return res;
  };

  export const getFavorites = async (token) => {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.get(`${root}/favorites`, config);
    // console.log(res)
    return res;
  }
  export const getReviews = async (token) => {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.get(`${root}/reviews`, config);
    // console.log(res)
    return res;
  }

  export const getCompanies = async (token) => {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.get(`${root}/petitions/companies`, config);
    // console.log(res)
    return res;
  }
  export const newCompany = async (form, token) => {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
      let res = await axios.post(`${root}/petitions`, form, config);
      return res.data;
  };

  export const searchLocalsInput = (search) => {
    return axios.get(`${root}/locals/filter`, {params: { search: search,},});
  };

  export const searchLocals = (specifications) => {
    return axios.post(`${root}/locals/spec`, { specifications });
  };
  export const getLocalById = async (id) => {
    return await axios.get(`${root}/detail/${id}`)
  }

  export const addFavorite = (localId, token) => {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const data = {
      local_id: localId,
    };
    return axios.post(`${root}/locals/fav`, data, config);
  };


  export const newReview = async (rev, token) => {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
      let res = await axios.post(`${root}/detail/${rev.local_id}`, rev, config);
      return res.data;
  };

  export const deleteFavorite = (token, localId) => {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const data = {
      local_id: localId,
    };
    return axios.delete(`${root}/favorites`, { ...config, data });
  };

  export const newLocal = async  (token, formData) => {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.post(`${root}/newlocal`, formData, config);
    return res.data;
  } 
  export const getMyCompany = (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axios.get(`${root}/profile/company`, config);
  };