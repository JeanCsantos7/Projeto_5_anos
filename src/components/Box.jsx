
import style from "../styles/TrocaPerfil.module.css"
import AnyPerfil from "../assets/any.jpg"
import OutroPerfil from "../assets/Duvida.jpg"
import { Link } from "react-router-dom"
export default function Box()
{ 




  
  return(
     <>

    <div className={style.BoxContainer}>
  
 
  <Link className={style.span} to={'/PerfilAny'} >
  <img className={style.imagemPerfil} src={AnyPerfil} alt="" />
  <h3 className={style.h2}>Any Elisa</h3>
   </Link>
 
  

  
  
  <Link className={style.span} to={'/PerfilError'}> 
  <img className={style.imagemPerfil} src={OutroPerfil} alt="" />
  <h3 className={style.h2}>Outro</h3>
 
  </Link>

  <Link style={{textDecoration: 'none'}}  to={'/'}> 
  <h3 className={style.TituloSair}>Sair da Netflix</h3>
 
  </Link>
 


  
    </div>
     
      
      </>
    
    
  )

}