import { createContext, useState } from 'react'

export const AlertContext = createContext()

const AlertContextProvider = ({ children }) => {
    const [alertContextState, setAlertContextState] = useState({
        isLoading: true,
        status: null,
        isDisplay: false,
        message: '',
    })
    const setAlertContext = (data) => {
        setAlertContextState({
            ...alertContextState,
            isLoading: false,
            isDisplay: true,
            ...data,
        })
        setTimeout(() => {
            setAlertContextState({
                isLoading: true,
                status: null,
                isDisplay: false,
                message: '',
            })
        }, 2000)
    }
    const alertContextData = { alertContextState, setAlertContext }
    return (
        <AlertContext.Provider value={alertContextData}>
            {children}
        </AlertContext.Provider>
    )
}
export default AlertContextProvider
