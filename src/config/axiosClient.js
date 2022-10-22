import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: process.env[`REACT_APP_BACKEND_${process.env.REACT_APP_ENV === 'dev' ? 'DEV' : 'PROD'}_HOST`]
})