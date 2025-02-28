import BannerSlider from "../components/homepageComp/BannerSlider";
import TopApartments from "../components/homepageComp/TopApartments";
import Title from "../components/shared/Title";

const HomePage = () => {
  return (
    <div className="">
      <Title title={"HomePage | RentEasy"} />
      <BannerSlider/>
      <TopApartments/>
    </div>
  )
}

export default HomePage