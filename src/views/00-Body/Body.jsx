import React from 'react'
import { Route, Routes, Navigate} from 'react-router-dom'
import { Home } from '../01-Home/Home'
import { Register } from '../02-Register/Register'
import { Login } from '../03-Login/Login'
import { Profile } from '../04-Profile/Profile'
import { MyProfile } from '../05-MyProfile/MyProfile'
import { Locals } from '../06-Locals/Locals'
import { Favorites } from '../07-Favorites/Favorites'
import { Reviews } from '../08-Reviews/Reviews'
import { Admin } from '../09-Admin/Admin'
import { Companies } from '../10-Companies/Companies'
import { Formulario } from '../11-Form/Form'
import { Detail } from '../12-Detail/Detail'
import { NewLocal } from '../13-NewLocal/NewLocal'
import { PendingLocals } from '../14-PendingLocals/PendingLocals'

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
            <Route path="/reviews" element={<Reviews />}/>
            <Route path="/admin" element={<Admin />}/>
            <Route path="/companies" element={<Companies />}/>
            <Route path="/petitions" element={<Formulario />}/>
            <Route path="/detail/:id" element={<Detail />}/>
            <Route path="/newlocal" element={<NewLocal />}/>
            <Route path="/pending" element={<PendingLocals />}/>
        </Routes>
        </>
    )
}