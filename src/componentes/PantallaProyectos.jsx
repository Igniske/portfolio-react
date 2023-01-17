import React from "react";
import Quiz from '../media/proyect-icons/quiz.png'
import Dice from '../media/proyect-icons/dice.png'
import DrumKit from '../media/proyect-icons/drumkit.png'
import Calculadora from '../media/proyect-icons/calculadora.png'
import Tateti from '../media/proyect-icons/tateti.svg'
import Timer from '../media/proyect-icons/timer.svg'
import Ppt from '../media/proyect-icons/ppt.png'

function PantallaProyectos({lang}){

const proTituloEsp = ["Estos son algunos de los proyectos que he realizado:",
"Juego: Ta-Te-Ti",
"Piedra, papel o tijera",
"Contador Pomodoro",
"Aplicacion de Quiz",
"Simulador de dados",
"Calculadora con JS",
"Simulador de bateria"
]

const proTituloEng = ["These are some of the projects i've worked on:",
"Game: Tic-tac-toe",
"Rock, paper or scissors",
"25 + 5 Clock",
"Quiz App",
"Dice simulator",
"Javascript calculator",
"Drum-kit Simulator"
]

const descEsp = ["El juego de tic tac toe para dos personas.",
"En este juego podrás hacer elecciones contra el programa.",
"Un contador de pomodoro con tiempos intercambiables.",
"En esta app puedes contestar un preguntas sobre desarrollo front end.",
"Puedes lanzar cierta cantidad de dados e inclusive alterar su valor.",
"Calculadora no cientifica creada con Javascript",
"Un simulador de una bateria que emite audios segun las teclas presionadas"
]

const descEng = ["The classic game Tic, tac, toe for two persons",
"In this game you can play against the IA",
"A 25+5 clock with interchangeable timers",
"In this app you can answer a quiz about front-end development",
"You can roll any number of dices, and even change their values",
"A non-cientific calculator made with Javascript",
"A drum-kit simulator that plays audio based on the pressed keys"]

    const proyectos = [Tateti,
     Ppt,
      Timer,
        Quiz,
        Dice,
        Calculadora,
        DrumKit
      ]

        const linkCodePen =["https://codepen.io/Igniske/full/GRGpbwx",
      "https://codepen.io/Igniske/full/dyKomwm",
    "https://codepen.io/Igniske/full/zYaEeBE",
  "https://codepen.io/Igniske/full/dyjRLKo",
"https://codepen.io/Igniske/full/ZERyrqm",
"https://codepen.io/Igniske/full/dyKVaZw",
"https://codepen.io/Igniske/full/xxzVpYq"]


        const linkGitHub=["https://github.com/Igniske/tictactoe",
        "https://github.com/Igniske/Piedra-papel-o-tijera",
      "",
    "https://github.com/Igniske/quiz-app",
  "https://github.com/Igniske/simulador-de-dados",
"",
""
]

    function cardMap(){
        const cardProyectos = proyectos.map((value, index) => <div key={"card" + index} className="card mx-spc">
        <img src={value} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{(lang === true ? proTituloEsp[index + 1] : proTituloEng[index + 1])}</h5>
            <p className="card-text">{(lang === true ? descEsp[index] : descEng[index])}</p>
            <a href={linkCodePen[index]} target="_blank" className="btn btn-primary">{(lang === true ? "Probar" : "Test")}</a>
            <a href="" target="_blank" className="btn btn-primary">{(lang === true ? "Codigo" : "Code")}</a>
        </div>
    </div>)
    return cardProyectos
    }

    return(<div>
        <div className="bg-proyectos">
      <section id="projects" className="greatscreen">
        <h2 className="spc-y spc-yt text-white text-center display-7" id="titulo-1">{(lang === true ? proTituloEsp[0] : proTituloEng[0])}</h2>
        
        <div className="d-flex align-content-start flex-wrap spc-yt centrar">

        {cardMap()}

        </div>

        <div id="btn-mas">
          <button type="button" className="btn btn-primary boton-cambiable-3 btn-lg spc-mtb"><a className="text-white sin-linea" href="https://codepen.io/Igniske/collections/public" target="blank" id="boton-cambiable-3">{(lang === true ? "Ver mas" : "See more")}</a></button>
        </div>
        
        
        
           </section>
          </div>
    </div>)
}

export default PantallaProyectos;