import axios from 'axios'

export const server_host = 'http://localhost:3001/'

export const api = axios.create({
    baseURL: server_host,
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
