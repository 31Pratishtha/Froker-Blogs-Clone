import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Router from './router.jsx'
import { AdminContextProvider } from '../contexts/AdminContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AdminContextProvider>
            <Router />
        </AdminContextProvider>
    </React.StrictMode>
)
