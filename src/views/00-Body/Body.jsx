import React from 'react'
import { Route, Routes, Navigate} from 'react-router-dom'
import { Home } from '../01-Home/Home'
import { Register } from '../02-Register/Register'
import { Login } from '../03-Login/Login'

export const Body = () => {
    return (
        <>
        <Routes>
            <Route path="*" element={<Navigate to="/"/>}/>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
        </>
    )
}