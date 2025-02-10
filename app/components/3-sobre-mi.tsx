import Image from "next/image";
import { data } from "../data";
const { perfilPersonal } = data;

export default function SobreMi() {
    let descripcion = perfilPersonal.descripcion;
    let contenedor = descripcion.map((parr, index) => {
        return (
            <p className="mb-3" key={index}>
                {parr}
            </p>
        )
    })
    return (
        <div className="w-100 d-flex flex-column mb100" id="sobre-mi">
            <h2 className="col-10 col-md-9 m-auto mb-5">Sobre mi</h2>
            <div className="col-10 col-md-9 d-flex flex-column flex-md-row justify-content-between m-auto">
                <div className="col-12 col-md-4 d-flex">
                    <Image src={perfilPersonal.fotoPerfil} width={350} height={350} alt="img usuario" className="imgPerfil m-auto mb-4 mb-md-0" />
                </div>
                <div className="col-12 col-md-7">
                    {contenedor}
                </div>
            </div>
        </div>
    )
}