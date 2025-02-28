import { FaBath, FaBed } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { RiArrowRightUpFill } from "react-icons/ri";

const LeftSideCard = ({ singleApartment,handleAgreement }) => {
  const {
    apartmentName,
    location,
    price,
    addedBy: { email, name },
    category,
    availability,
    houseInfo: { bedroom, bathroom },
    mainImage,
  } = singleApartment;

  return (
    <div className="w-full md:w-4/12 md:sticky md:top-24">
      <div className="bg-black rounded-3xl pb-4">
        {/* card image */}
        <div className="relative">
          <img
            src={mainImage}
            alt={apartmentName}
            className="w-full h-48 object-cover object-center rounded-t-3xl"
          />
          <p className="absolute w-full px-3 bottom-2 left-1 text-white text-base font-medium bg-gradient-to-r from-black/60 to-black/0">
            <span className="text-2xl font-bold">${price}</span>
          </p>
          <p className="absolute px-3 top-2 right-2">
            <span className="text-sm font-bold  badge badge-info">
              {category}
            </span>
            {availability ? (
              <span className="text-sm font-bold  badge badge-neutral">
                available
              </span>
            ) : (
              <span className="text-base font-bold  badge badge-error">
                not available
              </span>
            )}
          </p>
        </div>
        {/* apartment name and info */}
        <div className=" w-10/12 mx-auto py-4 px-2 border-b border-dashed border-dull-text/70 mb-2">
          <h3 className="text-xl font-semibold hover:text-primary-orange hover:duration-500 mb-1">
            {apartmentName}
          </h3>
          <p className="text-sm text-dull-text flex items-center gap-1">
            <FaLocationPin /> <span>{location}</span>
          </p>
          {/* book now button */}
          <div className="w-full flex items-center justify-start pt-4">
            <div
              onClick={handleAgreement}
              className="hover:transition-all hover:duration-500 hover:scale-x-[95%] flex items-center gap-0.5"
            >
              <button className="px-5 py-2 rounded-4xl border border-primary-orange  text-base font-bold bg-secondary-chocolate text-white ">
                {" "}
                Make Agreement
              </button>
              <button className="px-2 py-2 rounded-full border border-primary-light-chocolate  text-base font-bold bg-secondary-chocolate text-white text-center">
                <RiArrowRightUpFill size={20} color="#ffffff" />
              </button>
            </div>
          </div>
        </div>
        {/* apartment info bedroom and bathroom  */}
        <div className=" w-10/12 mx-auto py-4  border-b border-dashed border-dull-text/70 mb-2 flex items-stretch justify-around gap-4">
          <div
            className="flex items-center justify-between gap-3"
            title={"Bedrooms"}
          >
            <p>
              <FaBed />
            </p>
            <p className="text-xs font-medium">{bedroom} bedrooms</p>
          </div>
          <div
            className="flex items-center justify-between gap-3"
            title="bathroom"
          >
            <p>
              {" "}
              <FaBath />
            </p>
            <p className="text-xs font-medium">{bathroom} bathroom</p>
          </div>
        </div>
        {/* user info */}
        <div className="w-10/12 mx-auto py-4 mb-2 flex items-stretch justify-between gap-2 text-dull-text text-xs">
          <p>
            Agent: <span className="font-medium text-white">{name}</span>
          </p>
          <p>
            email: <span>{email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSideCard;
