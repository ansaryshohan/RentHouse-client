import BannerSlider from "../components/homepageComp/BannerSlider";
import ContactUsSection from "../components/homepageComp/ContactUsSection";
import OurServicesSection from "../components/homepageComp/OurServicesSection";
import SponsorSection from "../components/homepageComp/SponsorSection";
import TopApartments from "../components/homepageComp/TopApartments";
import Title from "../components/shared/Title";

const HomePage = () => {
  return (
    <div className="">
      <Title title={"HomePage | RentEasy"} />
      <BannerSlider/>
      <TopApartments/>
      <OurServicesSection/>
      <ContactUsSection/>
      <SponsorSection/>
    </div>
  )
}

export default HomePage