import React from "react";
import downloadIcon from '../media/contact-icons/download.svg'
import LinkedIn from '../media/contact-icons/linkedin.png'
import GitHub from '../media/contact-icons/github.png'
import Gmail from '../media/contact-icons/gmail.png'

function PantallaContacto({lang}){

    return(<div>
        <div className="bg-contacto contenedor">
      <footer id="contacto" className="cuarterscreen">
        <p className="text-center text-white spc-yt texto" id="despedida">{(lang === true ? "Gracias por tomarte el tiempo de leer mi portfolio! Lo agradezco de corazon, y espero que pronto podamos trabajar juntos." : "Thank you for taking your time to read my portfolio! I'm grateful from the bottom of my heart, and i hope we get to work together soon.")}</p>
        <div className="ctn-redes">
        <a href="https://drive.google.com/file/d/1sChoW8LDeGnfbWUpkXlxibiS7indemVK/view?usp=share_link" target="blank_"><img className="redes" src={downloadIcon} alt="cv" border="0"/></a>
          <a href="https://www.linkedin.com/in/ignacio-correa-a94b97246/" target="blank_"><img className="redes" src={LinkedIn} alt="linkedin" border="0"/></a>
          <a href="https://github.com/Igniske" target="blank_"><img className="redes" src={GitHub} alt="github" border="0"/></a>
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=igniskedev@gmail.com&tf=cm"target="blank_"><img className="redes" src={Gmail} alt="gmail" border="0"/></a>
          <div className="redes"></div>
        </div>
        
         
        
          
              
        </footer>
       
        </div>
    </div>)
}

export default PantallaContacto;