import { data } from "../data";
const { tecnologias } = data;

export default function Tecnologias() {
    let contenedorDiv = tecnologias.map((e, index) => {
        let list = e.detalle.map((det: any, index: any) => {
            return (
                <li key={index}>{det.tecnologia}: {det.valor}</li>
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
                {contenedorDiv}
            </div>
        </div>
    )
}