import { Swiper, SwiperSlide } from 'swiper/react'

import {useState} from 'react'
import Continuar1 from "../assets/Continuar1.jpeg"
import Continuar2 from "../assets/Continuar2.jpeg"
import Continuar3 from "../assets/Continuar3.jpeg"
import Continuar4 from "../assets/Continuar4.jpeg"
import Continuar5 from "../assets/Continuar5.jpeg"
import style from "../styles/SliderPopulares.module.css"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SliderPopulares()
{  const[sliderPerView, setSliderPerView] = useState(2)
    const data= [{id:1, imagem: Continuar1, text: '4 temporada - 2023' }, {id:2, imagem: Continuar2,  text: '4 temporada - 2023' }, {id:3, imagem: Continuar3,  text: '4 temporada - 2023' },
        {id:4, imagem: Continuar4, text: '4 temporada - 2023' }, {id:5, imagem: Continuar5, text: '4 temporada - 2023' }
    ]
    return(
      
      <div className={style.container}>
        <h1 className={style.tituloHeader}>Populares na Netflix</h1>
 <Swiper 
          
          slidesPerView={sliderPerView}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
            >
  
           
  
              {
              data.map((item) => {
                  return(
                    

                      <SwiperSlide key={item.id}>
                      <img className={style.slide_item} src={item.imagem} alt="" />
                      <h3 className={style.h3}>{item.text}</h3>
                      </SwiperSlide>
                  )
              })
           }
              
          
         
  
  
          </Swiper>
     
       </div> )
       
}