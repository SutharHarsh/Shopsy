import React from "react";
import Slider from "react-slick";
import Button from "../../components/Shared/Button";

import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/hero/watch.png";
import Image3 from "../../assets/hero/macbook.png";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Immerse in Sound",
    title: "Beats Solo",
    title2: "Wireless Headphones",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Stay Connected",
    title: "Apple Watch",
    title2: "Series 7",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Powerful Performance",
    title: "MacBook Pro",
    title2: "Laptop",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Text Content Section */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 animate-slideIn">
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {data.title}
                    </h1>
                    <h1 className="text-5xl uppercase text-white/75 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
                      {data.title2}
                    </h1>
                    <div>
                      <Button
                        text="Shop Now"
                        bgColor="bg-primary"
                        textColor="text-white"
                      />
                    </div>
                  </div>

                  {/* Image Section with Enhanced Zoom-In Animation */}
                  <div className="order-1 sm:order-2">
                    <div className="relative z-20">
                      <img
                        src={data.img}
                        alt=""
                        className="w-[600px] h-[600px] sm:h-[450px] mt-10 sm:scale-110 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] transition-transform duration-500 ease-in-out transform hover:scale-125 animate-zoomIn"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
