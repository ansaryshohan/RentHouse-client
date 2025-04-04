import Marquee from "react-fast-marquee";
import img1 from "../../assets/partner-01-e1582734705113.jpg"
import img2 from "../../assets/partner-02-e1582734691936.jpg"
import img3 from "../../assets/partner-03-e1582734671602.jpg"
import img4 from "../../assets/partner-04-e1582734649458.jpg"
import img5 from "../../assets/partner-05-e1582734603812.jpg"

const SponsorSection = () => {
  const images= [img1,img2,img3,img4,img5,img1,img2]
  return (
    <div>
      <div className="w-10/12 mx-auto py-6 border-t border-t-gray-300">
      <Marquee pauseOnHover={true}>
        <div className="flex justify-around items-center gap-8">
        {
          images.map((image,idx)=><img src={image} key={idx} />)
        }
      </div>
      </Marquee>
      </div>
    </div>
  )
}

export default SponsorSection