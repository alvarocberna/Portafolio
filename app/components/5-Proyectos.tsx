import Image from "next/image";
import { data } from "../data";
import '../globals.css';

const { perfilPersonal, tecnologias, proyectos } = data;

interface IntVerProyecto {
    link: string,
    img: string,
    btn: string
}

function VerProyecto({ link, img, btn }: IntVerProyecto) {
    return (
        <a href={link} className="col-6 mx-2 d-flex justify-content-center align-items-center " target='_blank'
            rel='noreferrer' style={{ position: 'relative', border: '1px solid #399cc0', borderRadius: '15px', height: '260px' }}>
            <Image src={img} alt="..." width={300} height={300} className="col-12 h-100" style={{ objectFit: 'cover', position: 'absolute', borderRadius: '15px' }} />
            <div className="proyImgFilter" style={{ position: 'absolute' }} />
            <button className="bg-primary px-4 py-2 rounded m-auto" style={{ border: 'none', color: 'white', position: 'absolute' }}>
                {btn}
            </button>
        </a>
    )
}

export default function Proyectos() {
    let contenedor = proyectos.map((proy, index) => {
        let tecnologia = proy.tecnologias.map((tec, index) => {
            return (
                <li key={index}>{tec}</li>
            )
        })
        return (
            <div className="col-10 col-md-9 m-auto d-flex flex-column py-4 mb-5 divProySty" key={index}>
                <div className="titulo col-11 m-auto mb-3" style={{ borderBottom: '2px solid #0cc0df' }}>
                    <h3 className="h3">Proyecto: {proy.titulo}</h3>
                </div>
                <div className="descripcion col-11 m-auto mb-3">
                    <p className="col-12 m-auto">
                        {proy.descripcion}
                    </p>
                </div>
                <div className="tecnologias col-11 m-auto mb-3">
                    <h4 className="h4">Tecnologías utilizadas</h4>
                    <ul>
                        {tecnologia}
                    </ul>
                </div>
                <div className="video codigo col-11 m-auto mb-3 d-flex flex-column flex-md-row justify-content-between">
                    <VerProyecto link={proy.linkProyecto} img={proy.imgProyecto} btn="Ver proyecto" />
                    <VerProyecto link={proy.linkRepositorio} img={proy.imgCode} btn="Ver repositorio" />
                </div>
            </div>
        )
    })
    return (
        <div className="w-100 d-flex flex-column mb100" id="proyectos">
            <h2 className="col-10 col-md-9 m-auto mb-5">
                Proyectos
            </h2>
            {contenedor}
        </div>
    )
}