import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./search.css";
import { setTrendingMovieData } from "../store/movieSlice";


const Sectionsearch = ({showModal}:any) => {
const [searchData, setsearchData] = useState([])

    const Dispatch = useDispatch();
    const urlImage = "https://image.tmdb.org/t/p/original/"
  
    const ImgData = useSelector(
      (state: any) => state?.search?.search);
  
useEffect(()=>{

  setsearchData(ImgData)

},[ImgData])

  
  
      console.log("ImgData",ImgData)
      
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
    <div className="search__box">
      
        {searchData.map((item: any, index: any) => {
          return (
            <>
              <div className="search__card" key={index}>
                <img
                  src={`${urlImage}${item.backdrop_path}`}
                  alt="movies-poster"
                  className="search__card_image"
                  onClick={()=>handleClick(item)}
                  id={item.id}

                />
              </div>
            </>
          );
        })}
    </div>
  )
}

export default Sectionsearch