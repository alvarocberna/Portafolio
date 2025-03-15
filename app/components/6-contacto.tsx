import React from 'react'
import '../globals.css';
import Image from 'next/image';
import { data } from '../data';
const { contacto } = data;


export default function Contacto() {
    const contenedor = contacto.infoContacto.map((cont, index) => {
        return (
            <address key={index} className='col-12 col-md-6 d-flex mb-3'>
                <a className='col-12 col-md-10 m-auto border rounded d-flex flex-column py-4' href={cont.link} style={{ textDecoration: 'none' }}>
                    <Image className=' m-auto mb-3' src={cont.icon} alt='...' width={50} height={50}></Image>
                    <p className=' text-center mb-0'>
                        {cont.direccion}
                    </p>
                </a>
            </address>
        )
    })
    return (
        <div className='w-100 d-flex flex-column mb100' id='contacto'>
            <h2 className='col-10 col-md-9 col-lg-10 col-xl-9 m-auto mb-5'>Contacto</h2>
            <div className='col-10 col-md-9 col-lg-10 col-xl-9 d-flex flex-column m-auto'>
                <p className='mb-5'>{contacto.descripcion}</p>
                <div className='w-100 d-flex flex-column flex-md-row m-auto'>
                    {contenedor}
                </div>

            </div>
        </div>
    )
}