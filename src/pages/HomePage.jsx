import BannerSlider from "../components/homepageComp/BannerSlider";
import OurServicesSection from "../components/homepageComp/OurServicesSection";
import TopApartments from "../components/homepageComp/TopApartments";
import Title from "../components/shared/Title";

const HomePage = () => {
  return (
    <div className="">
      <Title title={"HomePage | RentEasy"} />
      <BannerSlider/>
      <TopApartments/>
      <OurServicesSection/>
    </div>
  )
}

export default HomePage