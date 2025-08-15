import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../assets/pexels-alex-green-5699456.jpg";
import img2 from "../../assets/pexels-cottonbro-4098369.jpg";
import img3 from "../../assets/pexels-nappy-935977.jpg";

const slides = [
  {
    image: img1,
    title: "Get to Know Your Career",
    subtitle: "Discover your strengths and explore endless possibilities.",
  },
  {
    image: img2,
    title: "Register Now for Expert Guidance",
    subtitle: "Work with mentors who know the industry inside and out.",
  },
  {
    image: img3,
    title: "Discover the Right Path for You",
    subtitle: "Choose a career path that aligns with your true potential.",
  },
];

const Banner = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="rounded-xl shadow-lg"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-[400px] overflow-hidden group rounded-xl">
              <img
                src={slide.image}
                alt=""
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-xl"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
                <h3 className="text-lg md:text-xl font-light mb-2 opacity-90 animate-fadeIn">
                  {slide.subtitle}
                </h3>
                <h2 className="text-2xl md:text-4xl font-extrabold leading-snug drop-shadow-lg animate-slideUp">
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
