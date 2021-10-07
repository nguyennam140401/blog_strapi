import { createContext, useState } from 'react'

export const AlertContext = createContext()

const AlertContextProvider = ({ children }) => {
    const [alertContextState, setAlertContextState] = useState({
        isLoading: true,
        status: null,
        isDisplay: false,
        message: '',
    })
    const alertContextData = { alertContextState, setAlertContextState }
    return (
        <AlertContext.Provider value={alertContextData}>
            {children}
        </AlertContext.Provider>
    )
}
export default AlertContextProvider
