import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/image-1.webp";
import image2 from "../../assets/image-2.webp";
import image3 from "../../assets/house-3.jpg";
import image4 from "../../assets/image-4.webp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Pagination,Navigation, Autoplay } from "swiper/modules";
import SingleBannerSlide from "./SingleBannerSlide";

const BannerSlider = () => {
  const bannerData = [
  {
    id: 1,
    text: "Find Your Dream Home - Hassle-Free Living Starts Here!",
    image: image1,
  },
  {
    id: 2,
    text: "Effortless Property Management - Rent, Buy & Sell with Confidence!",
    image: image2,
  },
  {
    id: 3,
    text: "Smart Living, Smarter Choices - Explore the Best Apartments Today!",
    image: image3,
  },
  {
    id: 4,
    text: "Your Perfect Space Awaits - Secure, Affordable, and Convenient!",
    image: image4,
  },
];
  return (
    <div className="bg-[#040308] text-white">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // autoplay={{
        //   delay: 1500,
        //   pauseOnMouseEnter: true,
        //   disableOnInteraction: true,
        // }}
        speed={1500}
        grabCursor={true}
        modules={[Pagination,Navigation,Autoplay]}
        className="mySwiper"
      >
        {bannerData.map((banner) => (
          <SwiperSlide key={banner.id}>
            <SingleBannerSlide singleBannerData={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;