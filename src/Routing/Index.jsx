import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavbarApp from '../Layout/NavbarApp/NavbarApp'
import IndexAcceuil from '../Components/Acceuil/IndexAcceuil'
import IndexDemo from '../Components/Demo/IndexDemo'

const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<NavbarApp />}>
                <Route path="home" element={<IndexAcceuil />} />
                <Route path="demo" element={<IndexDemo/>} />
                <Route index element={<IndexAcceuil />} />
            </Route>
        </Routes>
    )
}

export default Index