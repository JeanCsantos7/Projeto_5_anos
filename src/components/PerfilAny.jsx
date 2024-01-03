
import imagem from "../assets/Netflix-Logo.png"
import style from '../styles/PerfilAny.module.css'; 
import sino from '../assets/notification-bell-clipart-design-illustration-free-png.webp'
import any from '../assets/any.jpg'
import seta from '../assets/seta-para-baixo.png'
import { Link } from "react-router-dom";
import Foto1 from "../assets/FotoPrimeiraTemp.jpeg"
import Foto2 from "../assets/FotoSegundaTemp.jpeg"
import Foto3 from "../assets/FotoTerceiraTemp.jpeg"
import Foto4 from "../assets/FotoQuartaTemp.jpeg"
import Foto5 from "../assets/FotoQuintaTemp.jpeg"
import Continuar1 from "../assets/Continuar1.jpeg"
import Continuar2 from "../assets/Continuar2.jpeg"
import Continuar3 from "../assets/Continuar3.jpeg"
import Continuar4 from "../assets/Continuar4.jpeg"
import Continuar5 from "../assets/Continuar5.jpeg"
import Box from "../components/Box"
import Slider from "../components/Slider"
import SliderPopulares from "./SliderPopulares";

import React, { useInsertionEffect, useState } from "react"

export default function PerfilAny() { 
  const [Perfil, setPerfil] = useState('')
  const [toggle, setToggle] = useState(true)

  
  const alertaSino = () => {
    alert('Feliz 5 anos pra nós amor, eu te amo muito!!')
  }
  
  const testando = () => {
    setPerfil(toggle ? Box : '')
    setToggle(!toggle)
    
  }

  return (
    <>
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

      <main>
        <div className={style.ContainerInfos}>
          <h1 className={style.tituloHeader2}>Como tudo começou</h1>
          <p className={style.paragrafoHeader2}>Adentraremos a vida de Any e Jean, um casal querama se desenrola não apenas nos momentos de alegria, mas também explora as complexidades da vida a dois. </p>
          <button className={style.btnHeader}>Assistir</button>
          <button className={style.btnHeader2}>Mais informações</button>
        </div>
      </main>
   
      <section>
        <h1 className={style.tituloHeader}>Populares na Netflix</h1>

        <div className={style.containerPopulares} >
          <span>
            <img className={style.fotosCard} src={Foto1} alt="" />
            <h2>1 temporada - 2019</h2>
            <p>Drama - Romance - Comédia</p>
          </span>

          <span>
            <img className={style.fotosCard} src={Foto2} alt="" />
            <h2>2 temporada - 2020</h2>
            <p>Drama - Romance - Comédia</p>
          </span>

          <span>
            <img className={style.fotosCard} src={Foto3} alt="" />
            <h2>3 temporada - 2021</h2>
            <p>Drama - Romance - Comédia</p>
          </span>

          <span>
            <img className={style.fotosCard} src={Foto4} alt="" />
            <h2> 4 temporada - 22/23</h2>
            <p>Drama - Romance - Comédia</p>
          </span>

          <span>
            <img className={style.fotosCard} src={Foto5} alt="" />
            <h2>5 temporada - 2024</h2>
            <p>Drama - Romance - Comédia</p>
          </span>
        </div>

        <h1 className={style.tituloHeader}>Continuar Assistindo</h1>

        <div className={style.containerPopulares} >
          <span>
            <img className={style.fotosCard} src={Continuar1} alt="" />
            <h2>4 temporada - 2023</h2>
            <p>Drama - Romance - Comédia</p>
          </span>

          <span>
            <img className={style.fotosCard} src={Continuar2} alt="" />
            <h2>4 temporada - 2023</h2>
            <p>Drama - Romance - Comédia</p>
          </span>

          <span>
            <img className={style.fotosCard} src={Continuar3} alt="" />
            <h2>4 temporada - 2023</h2>
            <p>Drama - Romance - Comédia</p>
          </span>

          <span>
            <img className={style.fotosCard} src={Continuar4} alt="" />
            <h2> 4 temporada - 2023</h2>
            <p>Drama - Romance - Comédia</p>
          </span>

          <span>
            <img className={style.fotosCard} src={Continuar5} alt="" />
            <h2>4 temporada - 22/23</h2>
            <p>Drama - Romance - Comédia</p>
          </span>
        </div>
      </section>
     
      <Slider></Slider>
      <SliderPopulares></SliderPopulares>
    </>

  )
}
