import {Portada, SobreMi, Tecnologias, Projects, Footer} from "../shared";
import './globals.css';

export default function Home() {
  return (
    <div className="d-flex flex-column" >
      <Portada />
      <SobreMi />
      <Tecnologias />
      <Projects />
      <Footer />
    </div>
  );
}
