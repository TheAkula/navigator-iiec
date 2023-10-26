import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_HOST,
})

api.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers['Authorization'] =
        'Bearer ' + localStorage.getItem('token')
    }

    return config
  },
  (error) => {
    Promise.reject(error)
  },
)
