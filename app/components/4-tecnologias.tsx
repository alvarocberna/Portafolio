import { data } from "../data";
const { tecnologias } = data;
import iconstar from '../../public/imgs/img_blue_star.png';
import Image from "next/image";
import '../globals.css'

interface DetalleTec {
    tecnologia: string;
    valor: number;
}

function star(det: DetalleTec) {
    return (
        <span className='d-flex'>
            {Array.from({ length: det.valor }, (_, index) => (
                <Image className="mb-0 ms-2" key={index} src={iconstar} width={15} height={15} alt="..."></Image>
            ))}
        </span>

    )
}

export default function Tecnologias() {

    const contenedorDiv = tecnologias.map((e, index) => {
        const list = e.detalle.map((det: DetalleTec, index: number) => {
            return (
                <li key={index} className="d-flex d-flex align-items-center">{det.tecnologia}: {star(det)}</li>
            )
        })
        return (
            <div className="col-12 col-md-6 d-flex mb-4" key={index}>
                <div className="col-11 m-auto px-3 py-3 divTec">
                    <h3 className="h4">{e.titulo}</h3>
                    <ul>
                        {list}
                    </ul>
                </div>
            </div>
        )
    })
    return (
        <div className="w-100 d-flex flex-column mb100" id="tecnologias">
            <h2 className="col-10 col-md-9 m-auto mb-5">
                Tecnologías
            </h2>
            <div className="row col-10 col-md-9 d-flex justify-content-around m-auto">
                <p className="mb-5 px-0">
                    Breve resumen de las tecnologías con las que he trabajado y/o domino, acompañado de una
                    estimación personal de mi nivel de conocimiento. He determinado una estrella para aquellas
                    tecnologías con las que he trabajado en alguna ocasión, dos estrellas para las que he trabajado
                    en algunas ocasiones con ellas y poseo un conocimiento mayor, y tres estrellas para las
                    tecnologías con las que trabajo constantemente y tengo un conocimiento más profundo.
                </p>
                {contenedorDiv}
            </div>
        </div>
    )
}