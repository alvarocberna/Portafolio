import { data } from "../../app/data";
const { perfilPersonal } = data;

export function SobreMi() {
    const dataDescripcion = perfilPersonal.descripcion;
    const descripcion = (
        <ul>
            {
                dataDescripcion.map((desc, index) => {
                    return (
                        <li key={index}>{desc}</li>
                    )
                })
            }
        </ul>
    );

    return (
        <div className="w-100 d-flex flex-column mb-5" id="sobre-mi">
            <h2 className="col-10 col-md-9 col-lg-10 col-xl-9 m-auto mb-3">Sobre mi</h2>
            <div className="col-10 col-md-9 col-lg-10 col-xl-9 d-flex flex-column m-auto mb-3">
                {descripcion}
            </div>
        </div>
    )
}