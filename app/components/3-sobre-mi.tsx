import Image from "next/image";
import { data } from "../data";
const { perfilPersonal } = data;

export default function SobreMi() {
    const descripcion = perfilPersonal.descripcion;
    const contenedor = descripcion.map((parr, index) => {
        return (
            <p className="mb-3" key={index}>
                {parr}
            </p>
        )
    })
    return (
        <div className="w-100 d-flex flex-column mb100" id="sobre-mi">
            <h2 className="col-10 col-md-9 col-lg-10 col-xl-9 m-auto mb-5">Sobre mi</h2>
            <div className="col-10 col-md-9 col-lg-10 col-xl-9 d-flex flex-column flex-lg-row justify-content-between align-items-center m-auto">
                <div className="col-12 col-lg-4 d-flex flex-column">
                    <Image src={perfilPersonal.fotoPerfil} width={300} height={300} alt="img usuario"
                        className="imgPerfil m-auto mb-3" />
                </div>
                <div className="col-12 col-lg-7 d-flex flex-column">
                    {contenedor}
                    <a href="#contacto" className="bg-primary text-white col-12 col-md-6 m-auto text-center py-2 rounded"
                        style={{ textDecoration: 'none' }}>Contacto</a>
                </div>
            </div>
        </div>
    )
}