'use client'
import React from 'react'
import Link from 'next/link'
import '../globals.css';
import { useState } from 'react';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg py-3">
            <div className="container-fluid">
                <Link className="navbar-brand ms-2" href="/">PORTAFOLIO</Link>
                <button className="navbar-toggler" onClick={() => { setOpen(!open) }} id='btnMenu' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {
                    open ?
                        <div className="navbar-collapse my-0" id="navbarNavAltMarkup">
                            <div className="navbar-nav col-12 justify-content-end">
                                <Link className="navbtn col-12 col-lg-2" aria-current="page" href="/#sobre-mi">
                                    Sobre mi
                                </Link>
                                <Link className="navbtn col-12 col-lg-2" href="/#tecnologias">
                                    Tecnologías
                                </Link>
                                <Link className="navbtn col-12 col-lg-2" href="/#proyectos">
                                    Proyectos
                                </Link>
                                <Link className="navbtn col-12 col-lg-2" href="/#contacto">
                                    Contacto
                                </Link>
                            </div>
                        </div>
                        :
                        <div className="collapse navbar-collapse my-0" id="navbarNavAltMarkup">
                            <div className="navbar-nav col-12 justify-content-end">
                                <Link className="navbtn col-12 col-lg-2" aria-current="page" href="/#sobre-mi">
                                    Sobre mi
                                </Link>
                                <Link className="navbtn col-12 col-lg-2" href="/#tecnologias">
                                    Tecnologías
                                </Link>
                                <Link className="navbtn col-12 col-lg-2" href="/#proyectos">
                                    Proyectos
                                </Link>
                                <Link className="navbtn col-12 col-lg-2" href="/#contacto">
                                    Contacto
                                </Link>
                            </div>
                        </div>
                }

            </div>
        </nav>
    )
}
