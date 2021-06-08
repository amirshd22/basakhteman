import client from "./client"

export const endpoint = "/api/agahi"

// const getAccessToken = async() => {
//     const token = await authStorage.getToken()
//     console.log(token);
//     return token
// }

export const postAgahi = (values , token) => {
    return client.post(`${endpoint}/create-agahi/`, values, {
        headers:{
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
}


export const getAgahi = (token) => {
    return client.get(`${endpoint}/allAgahi/`, {
        headers:{
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
}