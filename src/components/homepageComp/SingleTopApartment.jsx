import { FaBath, FaBed, FaLocationPin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SingleTopApartment = ({ singleApartment }) => {
  const {
    _id,
    apartmentName,
    location,
    price,
    addedBy: { email, name },
    category,
    availability,
    houseInfo: { bedroom, bathroom },
    mainImage,
  } = singleApartment;

  // year formatting for year
  // const fullDate = new Date(year);
  // const formattedYear = fullDate.getFullYear();

  // date formatting for dateAdded
  // const dateObj = new Date(dateAdded);
  // const formattedDate = `${String(dateObj.getDate()).padStart(2, "0")}-${String(
  //   dateObj.getMonth() + 1
  // ).padStart(2, "0")}-${dateObj.getFullYear()}`;

  return (
    <div className="bg-black rounded-3xl pb-4">
      {/* card image */}
      <div className="relative">
        <Link to={`/apartment/${_id}`}>
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
        </Link>
      </div>
      {/* apartment name and info */}
      <div className=" w-10/12 mx-auto py-4 px-2 border-b border-dashed border-dull-text/70 mb-2">
        <h3 className="text-xl font-semibold hover:text-secondary-chocolate hover:duration-500 mb-1">
          <Link to={`/apartment/${_id}`}>{apartmentName}</Link>
        </h3>
        <p className="text-sm text-dull-text flex items-center gap-1">
          <FaLocationPin /> <span>{location}</span>
        </p>
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
  );
};

export default SingleTopApartment;
