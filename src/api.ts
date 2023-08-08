import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

const getNotes = (params = {}) => axiosInstance.request({
    method: "get",
    url: '/posts',
    params,
})
const getNotesByID = (params = {},id:number) => axiosInstance.request({
    method: "get",
    url: `/posts/${{id}}`,
    params,
})

export default {
    axiosInstance,
    getNotes,
    getNotesByID,
}
