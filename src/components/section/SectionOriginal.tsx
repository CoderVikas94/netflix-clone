import {useEffect,useState} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setOriginalData } from '../../store/originalSlice'
import './original.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const SectionOriginal = () => {
  const Dispatch = useDispatch()

    useEffect(() => {
   
    axios.get("https://api.themoviedb.org/3/discover/movie?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213").then((data:any)=>Dispatch(setOriginalData(data)))
    
      
    }, [])


    const imageData =  useSelector((state:any)=>state?.netflixOriginal?.originalImageurl)
  
console.log("imageData",imageData)

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};




  return (
    <div className='original__box'>
      <h1>Netflix Originals</h1>
      <Slider  {...settings} className="original__slider">
      {imageData.map((itemUrl:any,index:any)=>{
       return <>
      <div className='Card' key={index}>
        <img src={itemUrl} alt='movies-poster'/>

    </div> 
    </>
    })}
    </Slider>
    </div>
  )
}

export default SectionOriginal