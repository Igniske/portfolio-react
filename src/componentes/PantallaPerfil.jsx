import React from "react";
import logoUno from '../media/html.svg'
import logoDos from '../media/css.svg'
import logoTres from '../media/js.svg'
import logoCuatro from '../media/bootstrap.svg'
import logoCinco from '../media/tailwind.svg'
import logoSeis from '../media/react.svg'
import logoSiete from '../media/git.svg'
import logoOcho from '../media/psql.svg'
import logoNueve from '../media/bash.svg'
import logoDiez from '../media/nodejs.svg'

function PantallaPerfil({lang}){

    const certLinks = ["https://www.freecodecamp.org/certification/Igniske/responsive-web-design",
  "https://www.freecodecamp.org/certification/Igniske/javascript-algorithms-and-data-structures",
"https://www.freecodecamp.org/certification/Igniske/front-end-development-libraries",
"https://www.freecodecamp.org/certification/Igniske/relational-database-v8",
"https://www.udemy.com/certificate/UC-c5c8c133-456e-4df3-8458-fac71a16d62a/",
"https://www.udemy.com/certificate/UC-91b1ec01-0ce2-4f6a-a23b-93fc66730a32/",
"https://www.udemy.com/certificate/UC-788f7534-8599-4fe8-81ea-c1f9701c8301/",
"https://www.udemy.com/certificate/UC-e2b97c1d-563a-4c03-88cd-760b694b30de/" ]

  const certEsp = ["Diseño web adaptable en FCC", 
  "Algoritmos y estructura de datos con JavaScript en FCC",
  "Desarrollo Front-end con librerias en FCC",
  "Bases de datos relacionales en FCC",
  "Curso de JavaScript de cero a heroe en Udemy",
  "Consultas en SQL para principiantes en Udemy",
  "Tailwind CSS en 1 hora: masteriza Tailwind CSS rapidamente en Udemy",
  "Bootcamp de Git y Github para desarrolladores"  
]

const certEng = ["Responsive web desing on FCC",
  "Javascript Algorithms and data structure on FCC",
  "Front-end development libraries on FCC",
  "Relation databases on FCC",
  "JavaScript from zero to hero on Udemy",
  "SQL queries for beginners on Udemy",
  "Tailwind CSS in 1 hour: Master Tailwind CSS Quickly on Udemy",
  "Practical Git & Github Bootcamp for Developers"
]

    const logos = [logoUno,logoDos,logoTres,logoCuatro,logoCinco,logoSeis,logoSiete,logoOcho,logoNueve,logoDiez]

    function mapping(){
        const listMap = certLinks.map((val, index) =><li key={"cert" + index}><a key={"link" + index} href={val} target="_blank">{(lang === true ? certEsp[index] : certEng[index])}</a></li>
         )
         return <ul key="lista" className="certificados">{listMap}</ul>
    }

    function mapLogos(){
      const logoMap = logos.map((val, index) => <div key={"elem" + index} className="elemento">
      <img key={"img" + index} className="icon-skill" src={val} alt={"skill" + index}/>
    </div>)
    return logoMap
    }

    return(
        <div className="bg-inicio text-white">
      <div className="py-3" id="welcome-section"></div>
    <section className="fullscreen">
      <h1 className="display-3 text-center spc-yt titulo" id="home-1">{(lang === true ? "Bienvenidos a mi portfolio!" : "Welcome to my portfolio!")}</h1>
      <div id="btn-mas">
        <img src="https://i.ibb.co/XYvN7rv/perfil.jpg" alt="..." className="rounded-circle perfil spc-mtb"/>
      </div>
        <h2 className="display-5 text-center spc-y subtitulo" id="home-2">{(lang === true ? "Te cuento un poco sobre mi" : "About me")}</h2>
        <div className="mx-info">
          <ul className="list-group">
            
            <li key="primero"><p className="texto" id="home-3">{(lang === true ? "Me llamo Ignacio Correa, resido en Buenos Aires, Argentina y tengo 27 años." : "My name is Ignacio Correa, i live in Buenos Aires, Argentina and i'm 27 years old.")}</p></li>
            <li key="segundo"><p className="texto" id="home-4">{(lang === true ? "Actualmente me encuentro estudiando programacion web, poseo conocimiento en HTML, CSS, y JavaScript, ademas del manejo de librerias como Boostrap, D3 y React." : "I find my self studying web design, i have knowledge on HTML, CSS and Javascript, i also manage libraries and frameworks like Boostrap, D3 and React.")}</p></li>
            <li key="tercero"><p className="texto" id="home-5">{(lang === true ? "Busco desarrollarme profesionalmente en el mundo de la programacion, ejercitando mis habilidades actuales y adquiriendo nuevos conocimientos en otros lenguajes, como Python y Java." : "I seek to develop professionally in the world of programming, excercising my actual skills and earning new knowledge of other languages")}</p></li>
            <li key="cuarto"><p className="texto spc-y" id="home-6">{(lang === true ? "Soy una persona con grandes habilidades de adaptacion, a la hora de trabajar en equipo considero que la comunicacion y el respeto son fundamentales. Me considero una persona detallista. He trabajado por muchos años en la atencion y servicio al cliente, lo que me brindo habilidades interpersonales." : "I'm a person with great capacities of adaptation, at work i think that the communication and being polite are fundamental. I also define my self as a punctilious person. I've worked for many years in customer support and customer service, which gave me a lot of intrapersonal skills.")}</p></li>
            
              
            
          </ul>
          </div>

        <div className="accordion bg-inicio spc-y" id="accordionPanelsStayOpenExample">
          <div className="accordion-item bg-inicio">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button id="accord-1" className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              {(lang === true ? "Mis certificaciones" : "My certifications")}
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
              <div className="accordion-body">
                
                <div className="d-flex justify-content-center">
                  {mapping()}
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item bg-inicio">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button id="accord-2" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            {(lang === true ? "Mis habilidades tecnicas" : "My hard skills")}
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
              
              <div className="grilla">
                {mapLogos()}
               </div>

            </div>
          </div>
        </div>
        </div>
        
          </section>
      </div>
    )
}

export default PantallaPerfil;