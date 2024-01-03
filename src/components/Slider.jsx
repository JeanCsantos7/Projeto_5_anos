

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import React, {useState} from "react"
import Foto1 from "../assets/FotoPrimeiraTemp.jpeg"
import Foto2 from "../assets/FotoSegundaTemp.jpeg"
import Foto3 from "../assets/FotoTerceiraTemp.jpeg"
import Foto4 from "../assets/FotoQuartaTemp.jpeg"
import Foto5 from "../assets/FotoQuintaTemp.jpeg"
import style from "../styles/Slider.module.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
  const[slidesPerView, setSlidesPerView] = useState(3)
  const data = [{id: 1, imagem: Foto1, text: '1 temporada - 2019' },{id: 2, imagem: Foto2, text: '2 temporada - 2020' }, {id: 3, imagem: Foto3, text: '3 temporada - 2021' }, 
    {id: 4, imagem: Foto4, text: '4 temporada - 22/23' }, {id: 5, imagem: Foto5, text: '5 temporada - 2024' }]
    
  return (
    
    <div className={style.container} >
        <h1 className={style.tituloHeader}>Continuar Assistindo</h1>
      
    <Swiper
      // install Swiper modules
     
     
      slidesPerView={slidesPerView}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
      
    
    >

     {
      data.map((item) => {
        return(
            <SwiperSlide key={item.id}>
            <img src={item.imagem} alt="Slider" className={style.slide_item} />
            <h3>{item.text}</h3>


        </SwiperSlide>
        )
       
      })
     }
      
   
     
    
    </Swiper>
  ;

  </div>)
};