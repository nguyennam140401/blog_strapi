import axios from 'axios'
const uri = 'http://localhost:1337'
export const getCategory = async () => {
    const res = await axios.get(`${uri}/categories`)
    return res.data
}
export const getOneCategory = async (id, sortData) => {
    const res = await axios.get(`${uri}/categories/${id}`)
    return res.data
}
export const getCarousel = async () => {
    const res = await axios.get(`${uri}/carousels`)
    return res.data
}

export const getPost = async (sortData) => {
    let urlcurrent = `${uri}/posts`
    if (sortData) {
        urlcurrent += '?_sort='
        for (var x in sortData) {
            console.log(x)
            urlcurrent += x + ':' + sortData[x]
        }
        console.log(urlcurrent)
    }
    console.log(sortData)
    const res = await axios.get(urlcurrent)
    return res.data
}
export const getPostOfCategory = async (id, textFind, sortData) => {
    let urlcurrent = `${uri}/posts?category=${id}`
    if (textFind) {
        urlcurrent += `&title_contains=${textFind}`
    }
    if (sortData) {
        urlcurrent += '&_sort='
        for (var x in sortData) {
            console.log(x)
            urlcurrent += x + ':' + sortData[x]
        }
        console.log(urlcurrent)
    }
    console.log(sortData)
    const res = await axios.get(urlcurrent)
    return res.data

    // const res = await axios.get(
    //     `${uri}/posts?category=${id}&title_contains=${textFind}`
    // )
    // return res.data
}
export const getOnePost = async (id) => {
    const res = await axios.get(`${uri}/posts/${id}`)
    return res.data
}
export const searchPost = async (text) => {
    const res = await axios.get(`${uri}/posts?title_contains=${text}`)
    return res.data
}
export const countPost = async () => {
    const res = await axios.get(`${uri}/posts/count`)
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
export const createPost = async (data) => {
    console.log(data.get('files.image'))
    const res = await axios.post(`${uri}/posts`, data)
    return res.data
}
export const uploadImg = async (data) => {
    const res = await axios.post(`${uri}/upload`, data)
    return res.data
}

export const fetchPostUser = async (id) => {
    const res = await axios.get(`${uri}/posts?author=${id}`)
    return res.data
}
