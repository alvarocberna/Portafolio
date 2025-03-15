import React from 'react'

export default function VideoPresentacion() {
    return (
        <div className='w-100 d-flex flex-column'>
            <h2 className='col-10 col-md-9 col-lg-10 col-xl-9 m-auto my-5'>Video de presentación</h2>
            <div className='col-10 col-md-9 col-lg-10 col-xl-9 d-flex flex-column m-auto'>
                <iframe src='https://www.youtube.com/embed/Jkpz7eFdpBU'
                    className='m-auto rounded col-12 col-sm-9 col-md-8 col-lg-6 col-xl-5' height={300} >
                </iframe>
            </div>
        </div>
    )
}
