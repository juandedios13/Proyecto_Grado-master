import axios from 'axios'

export const axiosClient = (() => {
  let baseAxios = axios.create({
    baseURL: process.env[`REACT_APP_BACKEND_${process.env.REACT_APP_ENV === 'dev' ? 'DEV' : 'PROD'}_HOST`]
  })

  let token = localStorage.getItem('token')

  if (token) {
    baseAxios.defaults.headers.common['Authorization'] = JSON.parse(token).token
  }

  return baseAxios
})()