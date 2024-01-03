
import Ratinho from "../assets/Sonoplastia do Ratinho.mp4"
import style from "../styles/PerfilError.module.css"
import React, {useState} from "react"
import imagem from "../assets/Netflix-Logo.png"
import sino from '../assets/notification-bell-clipart-design-illustration-free-png.webp'
import any from '../assets/any.jpg'
import seta from '../assets/seta-para-baixo.png'
import { Link } from "react-router-dom";
import Box from "../components/Box"

export default function PerfilError()
{ const [reprodutor, setReprodutor] = useState(true)
  const[Perfil, setPerfil] = useState('')
 const[toggle, setToggle] = useState(true)



 const alertaSino = () => {
  alert('Feliz 5 anos pra nós amor, eu te amo muito!!')
}


 const testando = () => {
  setPerfil(toggle ? Box : '')
  setToggle(!toggle)
}

  
  const teste = () => {
    setReprodutor(reprodutor ? <video autoPlay className={style.videoErro} src={Ratinho} controls></video> : '')
  }

  return(
    
    <div>

<Link to={'/'}><img className={style.logotipo} src={imagem} alt="" /></Link>
      <nav className={style.navbar}>
        <a className={style.a} href="#">Inicio</a>
        <a className={style.a} id={style.Ocultar} href="#">Series</a>
        <a className={style.a} id={style.Ocultar} href="#">Filmes</a>
        <a className={style.a} href="#">Bônus</a>
        <a onClick={testando} className={style.a} id={style.alternarPerfil} href="#">Trocar Perfil</a>
        <img onClick={alertaSino} className={style.sino} src={sino} alt="" />
        <img className={style.imagemAny} src={any} alt="" />
        <img onClick={testando}  className={style.seta} src={seta} alt="" />
      </nav>
      <p>{Perfil}</p>

      <span className={style.container}>
      <h1 className={style.h1}>ASSISTIR PRÉVIA</h1>
        <button className={style.btn} onClick={teste}>Assistir</button>
        <p>{reprodutor}</p>
      </span>
       
        
       
      </div>
    
      
     
    
  )


}