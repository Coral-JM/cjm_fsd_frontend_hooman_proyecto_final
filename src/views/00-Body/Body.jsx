import React from 'react'
import { Route, Routes, Navigate} from 'react-router-dom'
import { Home } from '../01-Home/Home'
import { Register } from '../02-Register/Register'
import { Login } from '../03-Login/Login'
import { Profile } from '../04-Profile/Profile'
import { MyProfile } from '../05-MyProfile/MyProfile'
import { Locals } from '../06-Locals/Locals'
import { Favorites } from '../07-Favorites/Favorites'

export const Body = () => {
    return (
        <>
        <Routes>
            <Route path="*" element={<Navigate to="/"/>}/>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/myprofile" element={<MyProfile />}/>
            <Route path="/locals" element={<Locals />}/>
            <Route path="/favorites" element={<Favorites />}/>

        </Routes>
        </>
    )
}