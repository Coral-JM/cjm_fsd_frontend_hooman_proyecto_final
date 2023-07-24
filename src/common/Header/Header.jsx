import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userData } from '../../views/userSlice'

export const Header = () => {
    const navigate = useNavigate();
    const datos = useSelector(userData);
    const role = datos?.role_id;

    return (
        <div className="headerDesign">
            <div className="navLinks">
                <div className="right">
                    <div className="hoomanLink" onClick={()=>navigate("/")}>Hooman</div>
                    <div onClick={() => navigate("/locals")}className="barRestLink">Bares & Restaurantes</div>
                </div>
                <div className="submitLink">

                    {role === 1 && (
                        <div onClick={() => navigate("/admin")}>Admin</div>
                    )}
                    {role === 2 && (
                        <>
                            <div onClick={() => navigate("/favorites")} className='favoritesLink'>♡</div>
                            <div onClick={() => navigate("/profile")} className='profileLink'>Perfil</div>
                        </>
                    )}
                    {(!role || role === 0) && (
                        <div onClick={() => navigate("/login")}>Login</div>
                    )}
                </div>
                </div>
            </div>
        // </div>
    )
}
