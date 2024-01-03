import { Link } from 'react-router-dom';
import style from '../styles/Home.module.css';
import AnyImagem from "../assets/any.jpg"

export default function Home({ logotipo,card2 }) {
  return (
    <div className={style.container}>
      <img className={style.logotipo} src={logotipo} alt="" />
      <h1 className={style.h1}>Quem está assistindo?</h1>
      <section  className={style.Container_cards}>
     
        <Link to={'/PerfilAny'} >
          <img src={AnyImagem} alt="" />
      
          
          
        </Link>
       
      
        <Link to={'/PerfilError'}>
        <img src={card2} alt="" />
        </Link>
       
    

      
      
    
     
      </section>
    </div>
  );
}