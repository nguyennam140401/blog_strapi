import { createContext, useState } from 'react'

export const SortContext = createContext()
const SortContextProvider = ({ children }) => {
    const [sortState, setSortState] = useState({
        published_at: 'desc',
    })
    const data = { sortState, setSortState }
    return <SortContext.Provider value={data}>{children}</SortContext.Provider>
}
export default SortContextProvider
