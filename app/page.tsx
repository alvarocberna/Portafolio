import Portada from "./components/2-portada";
import SobreMi from "./components/3-sobre-mi";
import Tecnologias from "./components/4-tecnologias";
import Proyectos from "./components/5-Proyectos";
import './globals.css';

export default function Home() {
  return (
    <div className="d-flex flex-column">
      <Portada />
      <SobreMi />
      <Tecnologias />
      <Proyectos />
    </div>
  );
}
