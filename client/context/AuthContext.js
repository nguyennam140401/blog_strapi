import { createContext, useState, useEffect } from 'react'
import { login, register } from '../util/api'
export const AuthContext = createContext()
import setAuthToken from '../util/setAuthToken'
const AuthContextProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        // isLoading: false,
        isAuthenticated: false,
        user: null,
        jwt: null,
    })
    const loginUser = async (data) => {
        try {
            const response = await login(data)
            console.log(response)
            setAuthToken(response.jwt)
            setAuthState({
                isAuthenticated: true,
                user: response.user,
                jwt: response.jwt,
            })
            localStorage.setItem('tokenUser', JSON.stringify(response))
            return { success: true, data: response }
        } catch (error) {
            console.log(error)
            return { success: false, message: error.message }
        }
    }
    useEffect(() => {
        if (localStorage.getItem('tokenUser')) {
            const data = JSON.parse(localStorage.getItem('tokenUser'))
            console.log(data)
            setAuthState({
                isAuthenticated: true,
                user: data.user,
                jwt: data.jwt,
            })
        }
    }, [])
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
        setAuthToken('')
        setAuthState({
            // isLoading: false,
            isAuthenticated: false,
            user: null,
            jwt: null,
        })
        console.log('da log out')
    }
    const AuthContextData = { authState, loginUser, registerUser, logoutUser }
    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider
