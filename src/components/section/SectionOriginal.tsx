import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setOriginalData } from "../../store/originalSlice";
import "./original.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SectionOriginal = () => {
  const Dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213"
      )
      .then((data: any) => Dispatch(setOriginalData(data)));
  }, []);

  const imageData = useSelector(
    (state: any) => state?.netflixOriginal?.originalImageurl
  );

  return (
    <div className="original__box">
      <h1>Netflix Originals</h1>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="swiper"
      >
        {imageData.map((itemUrl: any, index: any) => {
          return (
            <>
              <SwiperSlide className="Card" key={index}>
                <img
                  src={itemUrl}
                  alt="movies-poster"
                  className="swiper-image"
                />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SectionOriginal;
