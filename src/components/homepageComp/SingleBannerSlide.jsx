import { Link } from "react-router-dom";

const SingleBannerSlide = ({ singleBannerData }) => {
  const { image, text } = singleBannerData;
  return (
    <div className="relative">
      <div className="absolute w-full h-full left-0 top-0 bg-black/30"></div>
      <img
        src={image}
        alt={text}
        className="w-full h-[550px] object-cover object-center"
      />
      <div className="absolute left-0 top-0 z-10 w-full h-full flex flex-col justify-center items-center gap-6">
        <h1 className="text-center text-3xl md:text-5xl font-bold text-white w-7/12 leading-tight">
          {text.split("-")[0]} <br/>{text.split("-")[1]}
        </h1>
       <Link to={"/apartments"}>
       <button
          type="button"
          className="px-8 py-3 font-semibold rounded-full bg-secondary-chocolate text-primary-light-chocolate"
        >
          Explore More
        </button>
       </Link>
      </div>
    </div>
  );
};

export default SingleBannerSlide;