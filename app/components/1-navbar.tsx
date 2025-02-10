import React from 'react'
import Link from 'next/link'
import '../globals.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg py-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">PORTAFOLIO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse my-0" id="navbarNavAltMarkup">
                    <div className="navbar-nav col-12 justify-content-end">
                        <Link className="navbtn col-12 col-md-2" aria-current="page" href="/#sobre-mi">
                            Sobre mi
                        </Link>
                        <Link className="navbtn col-12 col-md-2" href="/#tecnologias">
                            Tecnologías
                        </Link>
                        <Link className="navbtn col-12 col-md-2" href="/#proyectos">
                            Proyectos
                        </Link>
                        <Link className="navbtn col-12 col-md-2" href="/#proyectos">
                            Contacto
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
