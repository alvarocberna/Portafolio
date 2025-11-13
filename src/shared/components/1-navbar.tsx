'use client'
import React from 'react'
import Link from 'next/link'
import '../../app/globals.css';
import { useState } from 'react';

export function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg py-3 position-absolute w-100" style={{zIndex: 1}}>
            <div className="container-fluid">
                <Link className="navbar-brand ms-2" style={{color: '#d2d2d2'}} href="/">
                    PORTAFOLIO
                </Link>
                <button className="navbar-toggler" onClick={() => { setOpen(!open) }} id='btnMenu' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {
                    open ?
                        <div className="navbar-collapse my-0" id="navbarNavAltMarkup">
                            <div className="navbar-nav col-12 justify-content-end ">
                                <Link className="navbtn col-12 col-lg-2 position-relative mt-2 mb-2" aria-current="page" href="/#sobre-mi">
                                    <div className='navbtn-bg'></div>
                                    <div className='position-absolute top-0 w-100 h-100 d-flex'>
                                        <p className='m-auto'>
                                            Sobre mi
                                        </p>
                                    </div>
                                </Link>
                                <Link className="navbtn col-12 col-lg-2 position-relative mb-2" aria-current="page" href="/#tecnologias">
                                    <div className='navbtn-bg'></div>
                                    <div className='position-absolute top-0 w-100 h-100 d-flex'>
                                        <p className='m-auto'>
                                            Tecnologías
                                        </p>
                                    </div>
                                </Link>
                                <Link className="navbtn col-12 col-lg-2 position-relative mb-2" aria-current="page" href="/#proyectos">
                                    <div className='navbtn-bg'></div>
                                    <div className='position-absolute top-0 w-100 h-100 d-flex'>
                                        <p className='m-auto'>
                                            Proyectos
                                        </p>
                                    </div>
                                </Link>
                                {/* <Link className="navbtn col-12 col-lg-2 position-relative mb-2" aria-current="page" href="/#contacto">
                                    <div className='navbtn-bg'></div>
                                    <div className='position-absolute top-0 w-100 h-100 d-flex'>
                                        <p className='m-auto'>
                                            Contacto
                                        </p>
                                    </div>
                                </Link> */}
                            </div>
                        </div>
                        :
                        <div className="collapse navbar-collapse my-0" id="navbarNavAltMarkup">
                            <div className="navbar-nav col-12 justify-content-end">
                                <Link className="navbtn d-flex col-12 col-lg-2" aria-current="page" href="/#sobre-mi">
                                    <p className='navparr m-auto'>
                                        Sobre mi
                                    </p>
                                </Link>
                                <Link className="navbtn d-flex col-12 col-lg-2" href="/#tecnologias">
                                    <p className='navparr m-auto'>
                                        Tecnologías
                                    </p>
                                </Link>
                                <Link className="navbtn d-flex col-12 col-lg-2" href="/#proyectos">
                                    <p className='navparr m-auto'>
                                        Proyectos
                                    </p>
                                </Link>
                                {/* <Link className="navbtn d-flex col-12 col-lg-2" href="/#contacto">
                                    <p className='navparr m-auto'>
                                       Contacto
                                    </p>
                                </Link> */}
                            </div>
                        </div>
                }

            </div>
        </nav>
    )
}
