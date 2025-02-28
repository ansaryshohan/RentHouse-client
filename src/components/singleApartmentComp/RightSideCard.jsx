import { Link } from "react-router-dom";
import apartmentIcon from "../../assets/apartments-100.png";
import lockIcon from "../../assets/lock-100.png";

import {
  FaDiamondTurnRight,
  FaLandmarkFlag,
  FaLandMineOn,
  FaLocationPin,
} from "react-icons/fa6";
import { GiBeveledStar } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const RightSideCard = ({ singleApartment }) => {
  const {
    apartmentName,
    location,
    houseNo,
    floorNo,
    blockNo,
    description,
    amenities,
    mainImage,
    images,
    adminApproval,
  } = singleApartment;
  const swiperImgArray = [mainImage, ...images];
  // console.log(swiperImgArray);
  return (
    <div className="w-full md:flex-1 relative overflow-hidden">
      {/* car image */}
      <div className="w-full">
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper w-full"
          >
            {swiperImgArray.map((singleImageUrl,idx) => (
              <SwiperSlide key={idx} className="max-w-full">
                {" "}
                <img
                  src={singleImageUrl}
                  alt={apartmentName}
                  className="rounded-2xl w-full object-center object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
      {/* location div */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full rounded-2xl border p-4 mt-6">
        <p className="text-sm text-dull-text flex items-center gap-1">
          <FaLocationPin /> <span>{location}</span>
        </p>
        <p className="text-sm text-dull-text flex items-center gap-1">
          <FaLandmarkFlag />
          <span>House NO:</span> <span>{houseNo}</span>
        </p>
        <p className="text-sm text-dull-text flex items-center gap-1">
          <FaLandMineOn />
          <span>Floor No:</span> <span>{floorNo}</span>, <span>Block No:</span>{" "}
          <span>{blockNo}</span>
        </p>
      </div>
      <div className="divider"></div>

      {/* info div */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full rounded-2xl border p-4 mt-6">
        <div className="flex items-center justify-around gap-2">
          <img src={apartmentIcon} alt="icon" className="w-14" />
          <div>
            <h3 className="font-bold text-base">Comfort First</h3>
            <p className="text-sm font-normal text-dull-text">
              We Care about you comfort
            </p>
          </div>
        </div>

        <div className="flex items-center justify-around gap-2">
          <img src={lockIcon} alt="icon" className="w-14" />
          <div>
            <h3 className="font-bold text-base">Stay Safe</h3>
            <p className="text-sm font-normal text-dull-text">
              Your safety is out first priority
            </p>
          </div>
        </div>
      </div>
      {/* general info div */}
      <div className="py-5 px-6 pt-10">
        <h3 className="flex items-center gap-2 text-primary-orange font-semibold tracking-wide leading-7">
          <span>
            <GiBeveledStar color="#ff3600" size={12} />
          </span>{" "}
          General Information
        </h3>
        <h3 className="text-3xl font-bold tracking-wide leading-8">
          Know About Our Apartment
        </h3>
        <p className="text-base font-medium text-dull-text leading-8 py-3">
          {description}
        </p>

        <div>
          <h3 className="flex items-center gap-2 text-lg text-white font-semibold tracking-wide leading-7">
            <span>
              <FaDiamondTurnRight color="#ff3600" size={16} />{" "}
            </span>
            24/7 Household Assistance
          </h3>
          <h3 className="flex items-center gap-2 text-lg text-white font-semibold tracking-wide leading-7">
            <span>
              <FaDiamondTurnRight color="#ff3600" size={16} />{" "}
            </span>
            Free Cancellation & Return
          </h3>
          <h3 className="flex items-center gap-2 text-lg text-white font-semibold tracking-wide leading-7">
            <span>
              <FaDiamondTurnRight color="#ff3600" size={16} />
            </span>{" "}
            Rent Now Pay When You Arrive
          </h3>
        </div>
      </div>
      <div className="divider"></div>

      {/* features section */}
      <div className="py-5 px-6">
        <h3 className="flex items-center gap-2 text-primary-orange font-semibold tracking-wide leading-7">
          <span>
            <GiBeveledStar color="#ff3600" size={12} />
          </span>{" "}
          Features
        </h3>
        <h3 className="text-3xl font-bold tracking-wide leading-8 mb-6">
          Premium amenities and features
        </h3>

        <div className="grid grid-cols-2 gap-2">
          {amenities?.map((feature, i) => (
            <h3
              className="flex items-center gap-2 text-lg text-white font-semibold tracking-wide leading-7"
              key={i}
            >
              <span>
                <FaDiamondTurnRight color="#ff3600" size={16} />{" "}
              </span>
              {feature}
            </h3>
          ))}
        </div>
      </div>
      {/* book now button */}
      <div className=" w-full bottom-12  flex items-center justify-center">
        <Link to={adminApproval === "approved" && `/dashboard/make-payment`}>
          <button className="px-12 py-3 rounded-4xl border border-primary-light-chocolate bg-transparent text-primary-light-chocolate text-lg font-bold hover:bg-primary-light-chocolate hover:text-white hover:transition-all hover:duration-500 hover:scale-x-[85%]">
            {" "}
            Make Agreement
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RightSideCard;
