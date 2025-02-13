import Portada from "./components/2-portada";
import SobreMi from "./components/3-sobre-mi";
import Tecnologias from "./components/4-tecnologias";
import Proyectos from "./components/5-proyectos";
import Contacto from "./components/6-contacto";
import Footer from "./components/7-footer";
import './globals.css';

export default function Home() {
  return (
    <div className="d-flex flex-column">
      <Portada />
      <SobreMi />
      <Tecnologias />
      <Proyectos />
      <Contacto />
      <Footer />

    </div>
  );
}
