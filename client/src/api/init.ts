import axios from 'axios'

export const server_host = 'http://localhost:3001/'

export const api = axios.create({
  baseURL: server_host,
})
