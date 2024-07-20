import { createContext, useState } from 'react'

export const AdminContext = createContext({})

export function AdminContextProvider({ children }) {
    const [admin, setAdmin] = useState(false)

    return (
        <AdminContext.Provider value={{ admin, setAdmin }}>
            {children}
        </AdminContext.Provider>
    )
}
