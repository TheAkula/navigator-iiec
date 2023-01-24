import axios from 'axios'

export const server_host = 'http://localhost:3001/'

export const api = axios.create({
  baseURL: server_host,
})

export const setAuthToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else delete axios.defaults.headers.common['Authorization']
}
