'use client'
import React from 'react'
import '../../app/globals.css';
import SendEmailForm from '../../app/services/email';
import { useState } from 'react';
import exp from 'constants';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons'
import {faEllipsis} from '@fortawesome/free-solid-svg-icons'
import { height } from '@fortawesome/free-brands-svg-icons/fa11ty';

export function Contacto() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            {
                expanded ? 
                <div className='px-3 py-2 rounded col-2 bg-white'
                style={{position: 'fixed', bottom: '10px', right: '10px', border: '1px solid #b3b3b3', transition: '0.4s'}}>
                    <div className='position-relative'>
                        <div className='position-absolute ' style={{top: '-5px', right: '0', cursor: 'pointer'}}
                        onClick={() => {setExpanded(false)}}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </div>
                    </div>
                    <SendEmailForm/>
                </div>
                :
                <div className='d-flex px-3 py-2 text-white btnContact' 
                    onClick={() => {setExpanded(true)}}>
                    <p className='m-auto'>
                        <FontAwesomeIcon style={{fontSize: '25px'}} icon={faEllipsis} />
                    </p>
                </div>
            }
        </div>
        
    )
}