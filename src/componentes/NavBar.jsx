import React from "react";

function NavBar( {langSwitch, lang} ){

    return(<div>
        <nav className="navbar navbar-expand-lg navbar-light bg-barra py-2 fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
           
          <li className="nav-item">
            <div className="nav-link text-white point" onClick={langSwitch}>{(lang === true ? "ESP > ENG" : "ENG > ESP")}</div>
          </li>
          <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="#welcome-section">{lang === true ? "Inicio" : "Home"}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-white" href="#projects">{lang === true ? "Proyectos" : "Projects"}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-white" href="#contacto">{lang === true ? "Contacto" : "Contacts"}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>

    )

}

export default NavBar;