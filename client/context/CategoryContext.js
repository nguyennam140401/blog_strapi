import { createContext, useState } from 'react'
export const CategoryContext = createContext()
import * as api from '../util/api'
const CategoryProvider = ({ children }) => {
    const [categoryState, setCategoryState] = useState([])
    const getAllCategory = async () => {
        const res = await api.getCategory()
        setCategoryState(res)
    }
    const CategoryContextData = { categoryState, getAllCategory }
    return (
        <CategoryContext.Provider value={CategoryContextData}>
            {children}
        </CategoryContext.Provider>
    )
}
export default CategoryProvider
