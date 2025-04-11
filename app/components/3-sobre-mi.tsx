import Image from "next/image";
import { data } from "../data";
const { perfilPersonal } = data;

export default function SobreMi() {
    const descripcion = perfilPersonal.descripcion;
    const contenedor = (
        <div>
            {
                descripcion.map((elem, index) => {
                    if (typeof elem === 'string') {
                        return <p key={index} className="mb-0 mt-3">{elem}</p>
                    } else if (Array.isArray(elem)) {
                        return (
                            <ul key={index} className="mt-0">
                                {elem.map((subElem, subIndex) => (
                                    <li key={subIndex}>{subElem}</li>
                                ))}
                            </ul>
                        )
                    }
                    return null; // Manejo de caso no esperado
                })
            }
        </div>
    );

    return (
        <div className="w-100 d-flex flex-column mb100" id="sobre-mi">
            <h2 className="col-10 col-md-9 col-lg-10 col-xl-9 m-auto mb-3">Sobre mi</h2>
            <div className="col-10 col-md-9 col-lg-10 col-xl-9 d-flex flex-column m-auto mb-3">
                <div className="col-12 d-flex flex-column flex-md-row justify-content-around align-items-center mb-3">
                    <div className="col-12 col-md-5 col-lg-6 h5 mb-3" style={{ textAlign: 'justify' }}>
                        ¡Hola! Mi nombre es Álvaro, y soy estudiante de la carrera de Analista Programador Computacional.
                        Actualmente me encuentro en la búsqueda de práctica, la cual puedo iniciar partir del mes de mayo.
                    </div>
                    <Image src={perfilPersonal.fotoPerfil} width={300} height={300} alt="img usuario"
                        className="imgPerfil" />
                </div>
                <div className="col-12 d-flex flex-column mb-3" style={{ textAlign: 'justify' }}>
                    {contenedor}
                </div>
                <a href="#contacto" className="bg-primary text-white col-12 col-sm-8 col-md-6 m-auto text-center py-2 rounded"
                    style={{ textDecoration: 'none' }}>Contacto</a>
            </div>
        </div>
    )
}