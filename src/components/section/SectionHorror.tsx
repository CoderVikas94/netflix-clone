import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./trending.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { setHorrorData } from "../../store/horrorSlice";

const SectionHorror = () => {
  const Dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_genres=27"
      )
      .then((data: any) => Dispatch(setHorrorData(data)));
  }, []);

  const imageData = useSelector((state: any) => state?.horror?.horrorImageurl);

  return (
    <div className="trending__box">
      <h1>Horror Movies</h1>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="swiper"
      >
        {imageData?.map((itemUrl: any, index: any) => {
          return (
            <>
              <SwiperSlide className="Card" key={index}>
                <img
                  src={itemUrl}
                  alt="movies-poster"
                  className="swiper-trending-image"
                />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SectionHorror;
