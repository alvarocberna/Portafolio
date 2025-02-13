import Portada from "./components/2-portada";
import SobreMi from "./components/3-sobre-mi";
import Tecnologias from "./components/4-tecnologias";
import Projects from "./components/5-projects";
import Contacto from "./components/6-contacto";
import Footer from "./components/7-footer";
import './globals.css';

export default function Home() {
  return (
    <div className="d-flex flex-column">
      <Portada />
      <SobreMi />
      <Tecnologias />
      <Projects />
      <Contacto />
      <Footer />
    </div>
  );
}
