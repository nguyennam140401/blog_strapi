import axios from 'axios'
const uri = 'http://localhost:1337'
export const getCategory = async () => {
    const res = await axios.get(`${uri}/categories`)
    return res.data
}
export const getOneCategory = async (id) => {
    const res = await axios.get(`${uri}/categories/${id}`)
    return res.data
}
export const getCarousel = async () => {
    const res = await axios.get(`${uri}/carousels`)
    return res.data
}

export const getPost = async () => {
    const res = await axios.get(`${uri}/posts`)
    return res.data
}
export const getPostOfCategory = async (id, textFind = '') => {
    const res = await axios.get(
        `${uri}/posts?category=${id}&title_contains=${textFind}`
    )
    return res.data
}
export const getOnePost = async (id) => {
    const res = await axios.get(`${uri}/posts/${id}`)
    return res.data
}
export const searchPost = async (text) => {
    const res = await axios.get(`${uri}/posts?title_contains=${text}`)
    return res.data
}
export const getFeatured = async () => {
    const res = await axios.get(`${uri}/featureds`)
    return res.data
}
export const getInfor = async () => {
    const res = await axios.get(`${uri}/infors/1`)
    return res.data
}
export const register = async (data) => {
    const res = await axios.post(`${uri}/auth/local/register`, data)
    return res.data
}
export const login = async (data) => {
    const res = await axios.post(`${uri}/auth/local`, data)
    return res.data
}
