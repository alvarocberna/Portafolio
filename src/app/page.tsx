import {Portada, SobreMi, Tecnologias, Projects, Contacto, Footer} from "../shared";
import './globals.css';

export default function Home() {
  return (
    <div className="d-flex flex-column" >
      <Portada />
      <SobreMi />
      <Tecnologias />
      <Projects />
      {/* <Contacto /> */}
      <Footer />
    </div>
  );
}
