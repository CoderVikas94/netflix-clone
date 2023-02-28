import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./trending.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { setComedyData } from "../../store/comedySlice";
import { setTrendingMovieData } from "../../store/movieSlice";


const SectionComedy = ({showModal}:any) => {

  const urlImage = "https://image.tmdb.org/t/p/original/"


  
  const Dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_genres=28"
      )
      .then((data: any) => Dispatch(setComedyData(data)));
  }, []);

  const imageData = useSelector(
    (state: any) => state?.comedy?.comedy
  );

  
  const handleClick= async(e:any)=>{
   await axios.get(
         `https://api.themoviedb.org/3/movie/${e.id}?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0`
           ).then((data: any) =>{
             Dispatch(setTrendingMovieData(data))
 
           }
             ) ;
     
           showModal();
          }


  
  return (
    <div className="trending__box">
    <h1>Comedy Movies</h1>
<Swiper
// install Swiper modules
modules={[Navigation, Pagination, Scrollbar, A11y]}
spaceBetween={5}
slidesPerView={5}
navigation
loop={true}
breakpoints={{769:{slidesPerView: 5,slidesPerGroup: 5,}}}
pagination={{ clickable: true }}
scrollbar={{ draggable: true }}
onSwiper={(swiper) => console.log(swiper)}
onSlideChange={() => console.log('slide change')}
className="swiper"
>

{imageData?.map((item:any,index:any)=>{
return <>
<SwiperSlide className='Card'  key={index}>
<img 
 src={`${urlImage}${item.poster_path}`}  
 alt='movies-poster' className="swiper-trending-image"        
 onClick={()=>handleClick(item)} 
 />
</SwiperSlide>

</>
})}
</Swiper>
</div>
  )
}

export default SectionComedy