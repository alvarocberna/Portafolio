import React from 'react'
import Image from 'next/image'
import { data } from "../data/data";
const {portada} = data;
import {Writer} from './writer';

export function Portada() {
    const imgPortada = portada.foto;
    return (
        <div className="position-relative w-full d-flex flex-column" 
             style={{ height: '700px', marginBottom: '100px'}}>
            <Writer/>
            <Image src={imgPortada} alt='img portada' fill={true} style={{objectFit: 'cover'}}/>
        </div>
    )
}
