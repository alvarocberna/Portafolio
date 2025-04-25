import Image from "next/image";
import { data } from "../data";
import '../globals.css';

const { proyectos } = data;

interface IntVerProyecto {
    link: string,
    img: string,
    btn: string
}

export default function Projects() {
    const contenedor = proyectos.map((proy, index) => {
        const tecnologia = proy.tecnologias.map((tec, index) => {
            return (
                <li key={index}>{tec}</li>
            )
        })
        return (
            <div className="col-12 col-md-6 col-xl-4 " key={index}>
                <div className="m-auto col-10 d-flex flex-column  py-4 mb-5 divProySty">
                    <div className="titulo col-11 m-auto mb-3 titleLine">
                        <h3 className="h5">{proy.titulo}</h3>
                    </div>
                    <div className="descripcion col-11 m-auto mb-3">
                        <p className="col-12 m-auto">
                            {proy.descripcion}
                        </p>
                    </div>
                    <div className="tecnologias col-11 m-auto mb-3">
                        <h4 className="h6">Tecnologías utilizadas</h4>
                        <ul>
                            {tecnologia}
                        </ul>
                    </div>
                    <a href={proy.linkProyecto} target="_blank" className="w-100 d-flex">
                        <button className="col-10 m-auto bg-primary rounded py-1 text-white mb-3" style={{ border: 'none' }}>
                            Ver Proyecto
                        </button>
                    </a>
                    <a href={proy.linkRepositorio} target="_blank" className="w-100 d-flex">
                        <button className="col-10 m-auto bg-primary rounded py-1 text-white mb-3" style={{ border: 'none' }}>
                            Ver Repositorio
                        </button>
                    </a>
                </div>
            </div>
        )
    })
    return (
        <div className="w-100 d-flex flex-column mb100" id="proyectos">
            <h2 className="col-10 col-md-9 m-auto mb-5">
                Proyectos
            </h2>
            <div className="row col-10 m-auto d-flex">
                {contenedor}
            </div>
        </div>
    )
}