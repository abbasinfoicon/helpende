'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [show, setShow] = useState(false);
    const handleToggle = () => {
        setShow(!show)
    }
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark w-100 position-absolute p-0 nav-bg-c">
                <div className="container">
                    <Link className="navbar-brand fw-bold p-0" href="/">
                        <img src="./assets/img/logo.png" alt="" />
                    </Link>

                    <button className="navbar-toggler" onClick={handleToggle}>
                        <span className={`navbar-toggler-icon ${show ? 'navbar-close-icon' : ''}`}></span>
                    </button>

                    <div className={`collapse navbar-collapse ${show ? 'show' : ''}`}>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 w-100 justify-content-end">
                            <li className="nav-item">
                                <Link className="nav-link active" ariaCurrent="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="holischtische-massage"> Over Helpende Handen</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" href="over-mij">Tarieven </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" href="retreat">Behandelingen</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="contact">Contact</Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="tarieven">Tarieven</Link></li>
                                    <li><Link className="dropdown-item" href="reviews">Reviews</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header