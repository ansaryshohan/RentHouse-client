import { FaUsersRays } from "react-icons/fa6";
import { GiDeathStar } from "react-icons/gi";
import { PiClockUserFill } from "react-icons/pi";
import bgImage from "../../assets/cat-5.webp";
import SectionHeader from "../shared/SectionHeader";
import SingleService from "./SingleService";

const OurServicesSection = () => {
  const serviceData = [
    {
      id: 1,
      title: "Sell Property",
      description:
        " We provide expert property valuation, professional marketing, and connect you with serious buyers. From listing to closing, our team handles everything, ensuring a smooth transaction.",
      icon: <PiClockUserFill size={45} color="#2c1c14" />,
    },
    {
      id: 2,
      title: "Rent Property",
      description:
        "We handle everything from listing your property and screening tenants to lease agreements and rent collection. With expert marketing and hassle-free management.",
      icon: <GiDeathStar size={45} color="#2c1c14" />,
    },
    {
      id: 3,
      title: "Family house",
      description:
        " Whether you're buying, selling, or renting, we offer expert guidance, secure transactions, and tailored property options. Enjoy a smooth and stress-free experience with our dedicated team.",
      icon: <FaUsersRays size={45} color="#2c1c14" />,
    },
  ];

  return (
    <div className="bg-white text-primary-light-chocolate pt-16">
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: "40vh",
        }}
      >
        <div className="bg-black/60 h-full w-full flex items-center justify-center py-10">
          <div className="bg-white/30 backdrop-blur-lg px-10 w-10/12 mx-auto rounded-2xl py-6">
            <SectionHeader title={"Our"} colorTitle={"Services"} />
            <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
              {serviceData.map((service) => (
                <SingleService key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesSection;
