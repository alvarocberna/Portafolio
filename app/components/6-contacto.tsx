import React from 'react'
import '../globals.css';
import SendEmailForm from '../services/email';


export default function Contacto() {

    return (
        <div className='w-100 d-flex flex-column mb100' id='contacto'>
            <h2 className='col-10 col-md-9 col-lg-10 col-xl-9 m-auto mb-4'>Contacto</h2>
            <div className='col-10 col-md-9 col-lg-10 col-xl-9 d-flex flex-column m-auto'>
                <div className='w-100 d-flex flex-column flex-md-row m-auto'>
                    <SendEmailForm />
                </div>
            </div>
        </div>
    )
}