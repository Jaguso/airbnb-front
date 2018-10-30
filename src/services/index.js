import axios from 'axios';

const API_URL = "https://airbnb-backend-42.herokuapp.com/api/v1";

const createUser = (data) => axios.post(`${API_URL}/users/signup`, data)

const loginUser = (data) => axios.post(`${API_URL}/users/login`, data)

export { 
  createUser,
  loginUser 
}
  
