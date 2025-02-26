import { Link } from "react-router-dom";
import useTopApartmentData from "../../hooks/useTopApartmentData";
import SectionHeader from "../shared/SectionHeader";
import SingleTopApartment from "./SingleTopApartment";

const TopApartments = () => {
  const { topApartmentDataPending, topApartmentDataError, topApartmentData } =
    useTopApartmentData();

  if (topApartmentDataPending) return "Loading...";

  if (topApartmentDataError)
    return "An error has occurred: " + topApartmentDataError.message;
  // console.log(topApartmentData);

  return (
    <div className="bg-white text-primary-light-chocolate py-16">
      <SectionHeader
        title={"Top"}
        colorTitle={"Apartments"}
        subHeading={"Explore Our Apartments Find Your Perfect Home Today!"}
      />

      {/* top apartment cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5 w-11/12 mx-auto ">
        {topApartmentData.map((singleApartmentData) => (
          <SingleTopApartment
            key={singleApartmentData._id}
            singleApartment={singleApartmentData}
          />
        ))}
      </div>
      {/* view all apartment button */}
      <div className="pt-4 pb-3 w-full flex items-center justify-center">
        <Link to={"/apartments"}>
       <button
          type="button"
          className="px-12 py-3 rounded-4xl border border-secondary-chocolate bg-secondary-chocolate text-white text-lg font-bold hover:bg-primary-orange hover:text-white hover:transition-all hover:duration-500 hover:scale-x-[85%]">
          View More
        </button>
       </Link>
      </div>
    </div>
  );
};

export default TopApartments;
