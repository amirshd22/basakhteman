import axios from 'axios'

export const apiEndpointURL = "http://192.168.1.35:8000"

const client = axios.create({
    baseURL:apiEndpointURL
})

export default client