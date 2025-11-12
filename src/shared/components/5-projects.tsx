'use client'
import { useState } from "react";
import { data } from "../../app/data";
import Image from "next/image";
import '../../app/globals.css';
const { proyectos } = data;

type Proyecto = {
    titulo: string
    descripcion: string
    tecnologias: string[]
    imgProyecto: string
    linkProyecto: string
    imgCode: string
    linkRepositorio: string
}        

const CardProyecto = (props: Proyecto) => {
    const [expanded, setExpanded] = useState(false);
    return(
        // Container
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex mb-5 px-0">
           {/* contenedor principal - contiene 1) el contenedor expandible y 2) el btn expandir y ver rep y proy */}
            <div className='col-12 col-sm-11 d-flex flex-column mx-auto justify-content-between border' 
                    style={{borderRadius: '15px', background: '#3e3e3e'}}>
                {/* contenedor secundario - tiene la img, el contenido y el degradado*/}
                <div className="w-full d-flex flex-column position-relative mb-3" style={{minHeight: '350px', maxHeight: expanded ? 'none' : '350px', overflow: 'hidden', alignItems: 'start'}}>
                    {/* contenido - tiene su propio div para facilitar el posicionamiento del contenido*/}
                    <div className='d-flex flex-column col-12' style={{position: 'relative', top: '0'}}>
                        <div className='position-relative'  style={{width: '100%', height: '200px', top: '0px'}}>
                            <Image src={props.imgProyecto} alt='Abogado' fill style={{ objectFit: "cover",  objectPosition: "top", borderRadius: '15px 15px 0px 0px'}}/>
                        </div>
                        <div className='w-full d-flex flex-column py-3 px-3'>
                            <h2 className="col-12 h4 mb-2 text-start text-white">{props.titulo}</h2>
                            <p className='col-12 text-staer text-white'>{props.descripcion}</p>
                        </div>
                    </div>
                    {/* degradado */}
                    {!expanded &&  
                        <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: '50px', background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(62,62,62,1))'}}/>
                    }
                </div>
                <div className="col-11 m-auto d-flex justify-content-between mb-3">
                    <button onClick={() => setExpanded(!expanded)} className='d-flex col-2 rounded text-white' 
                        style={{background: '#2b7fcf', height: '35px', border: 'none'}}>
                        {
                            expanded ?
                            <p className="m-auto" style={{fontSize: '20px'}}>-</p> 
                            : 
                            <p className="m-auto" style={{fontSize: '20px'}}>+</p>
                         }
                    </button>
                    <a href={props.linkProyecto} target="_blank" className="col-5 d-flex" style={{textDecoration: 'none', height: '35px'}}>
                        <button className="col-11 m-auto rounded text-white h-100" style={{ border: 'none', background: '#d4b49e' }}>
                            Proyecto
                        </button>
                    </a>
                    <a href={props.linkRepositorio} target="_blank" className="col-5 d-flex" style={{textDecoration: 'none', height: '35px'}}>
                        <button className="col-11 m-auto rounded text-white h-100" style={{ border: 'none', background: '#d4b49e' }}>
                            Repositorio
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}


export function Projects() {
    const cardsProyectos = proyectos.map((proy, index) => {
        return (
            <CardProyecto key={index} {...proy}/>
        )
    })
    return (
        <div className="w-100 d-flex flex-column mb100" id="proyectos">
            <h2 className="col-10 col-md-9 m-auto mb-5">
                Proyectos
            </h2>
            <div className="row col-10 col-md-9 m-auto d-flex">
                {cardsProyectos}
            </div>
        </div>
    )
}