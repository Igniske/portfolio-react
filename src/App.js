import { useState } from 'react';
import './App.css';
import NavBar from './componentes/NavBar';
import PantallaContacto from './componentes/PantallaContacto';
import PantallaPerfil from './componentes/PantallaPerfil';
import PantallaProyectos from './componentes/PantallaProyectos'

function App() {

  const [lang, setLang] = useState(true)

  function langSwitch (event) {
    event.preventDefault()
    setLang(!lang)
  }

  return (
    <div className="App">
     <NavBar langSwitch={langSwitch} lang={lang}></NavBar>
     <PantallaPerfil lang={lang}></PantallaPerfil>
     <PantallaProyectos lang={lang}></PantallaProyectos>
     <PantallaContacto lang={lang}></PantallaContacto>
    </div>
  );
}

export default App;
