import axios from 'axios'

export const http = axios.create({
    baseURL: "http://192.168.10.175:8000/api/"
})
