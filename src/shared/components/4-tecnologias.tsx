import { data } from "../../app/data";
const { tecnologias } = data;
import iconstar from '../../../public/imgs/img_blue_star.png';
import Image from "next/image";
import '../../app/globals.css';

interface DetalleTec {
    tecnologia: string;
    valor: number;
}


export function Tecnologias() {
    const cardsTecnologias = tecnologias.map((e, index) => {
        const list = e.detalle.map((det: DetalleTec, index: number) => {
            return (
                <li key={index} className="">
                    {det.tecnologia}
                </li>
            )
        })
        return (
            <div className="col-12 col-md-4 d-flex mb-4 px-0" key={index}>
                <div className="col-12 col-md-11 m-auto px-3 py-3 divTec" 
                    style={{background: `${e.color}`, position: 'relative', height: '100%' }}>
                    <h3 className="h4 text-white">{e.titulo}</h3>
                    <ul className="ps-4 text-white">
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
            <div className="row col-10 col-md-9 d-flex justify-content-left m-auto">
                {cardsTecnologias}
            </div>
        </div>
    )
}