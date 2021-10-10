import { createContext, useState } from 'react'
import { login, register } from '../util/api'
export const AuthContext = createContext()
import setAuthToken from '../util/api'
const AuthContextProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isLoading: false,
        isAuthenticated: false,
        user: null,
    })
    const loginUser = async (data) => {
        try {
            const response = await login(data)
            return response
        } catch (error) {
            console.log(error)
            return { success: false, message: error.message }
        }
    }
    const registerUser = async (data) => {
        try {
            const response = await register(data)
            return response
        } catch (error) {
            console.log(error)
            return { success: false, message: error.message }
        }
    }
    const logoutUser = () => {
        localStorage.removeItem('tokenUser')
    }
    const AuthContextData = { authState, loginUser, registerUser, logoutUser }
    return (
        <AuthContext.Provider data={AuthContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider
