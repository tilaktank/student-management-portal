import React from 'react'
import "./Navbar.scss"
import { useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className={`navbar d-flex ${location?.pathname !== "/" ? "justify-content-between" : "justify-content-center"} align-items-center col-12`}>
            {location?.pathname !== "/" && <div className='btn-back btn btn-outline-light ms-2' onClick={() => navigate('/')}>
                <i className="fa-solid fa-arrow-left arrow-left" />
            </div>}
            <div className='title d-flex justify-content-center align-items-center'>
                <h3 className='mb-0'>Student Management Portal</h3>
            </div>
            <div></div>
        </div>
    )
}
