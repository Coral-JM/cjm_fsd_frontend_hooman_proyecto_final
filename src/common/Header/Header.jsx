import React, { useState } from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'

export const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="headerDesign">
            <div className="navLinks">
                <div className="right">
                    <div className="hoomanLink" onClick={()=>navigate("/")}>Hooman</div>
                    <div className="barRestLink">Bares & Restaurantes</div>
                </div>
                <div className="left">
                    <div className="submitLinks">Login</div>
                </div>
            </div>
        </div>
    )
}