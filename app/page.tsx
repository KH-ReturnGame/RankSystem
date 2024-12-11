"use client"

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Card from "../components/Card";
import FetchData from "../components/Fetch";
import { useState } from "react";

export default function Home() {
  const slides = [
    { title: "채훈이 피하기", bgColor: "bg-white/20 backdrop-blur-md" },
    { title: "Game 2", bgColor: "bg-white/20 backdrop-blur-md" },
    { title: "Game 3", bgColor: "bg-white/20 backdrop-blur-md" },
    // { title: "Game 4", bgColor: "bg-white opacity-20 backdrop-blur-md" },
    // { title: "Game 5", bgColor: "bg-white opacity-20 backdrop-blur-md" },
    // { title: "Game 6", bgColor: "bg-white opacity-20 backdrop-blur-md" },
    // { title: "Game 7", bgColor: "bg-white opacity-20 backdrop-blur-md" },
  ];

  const [cardData, setCardData] = useState<{ name: string; score: string }[]>([{name:"", score:""}]); // 카드에 표시할 데이터 상태
  const [prvIndex, setPrvIndex] = useState(-1); // 이전 슬라이드 인덱스
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = async (swiper: SwiperClass) => {
    setCurrentIndex(swiper.realIndex);
    if (currentIndex !== prvIndex) {
      try {
        const data = await FetchData(currentIndex); // FetchData 호출
        setCardData(data);
        setPrvIndex(currentIndex); // 이전 인덱스 갱신
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-700">
      <div className="w-full h-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000, // 4초마다 슬라이드 전환
            disableOnInteraction: false, // 사용자가 상호작용해도 자동 슬라이드 유지
          }}
          onSlideChange={ handleSlideChange }
          onSlideChangeTransitionEnd={ handleSlideChange }
          className="w-full h-full flex items-center justify-center"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Card title={slide.title} bgColor={slide.bgColor} index={index} _data={cardData} c_index={currentIndex}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}