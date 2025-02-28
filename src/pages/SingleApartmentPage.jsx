import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Title from "../components/shared/Title";
import PageHeader from "../components/shared/PageHeader";
import LeftSideCard from "../components/singleApartmentComp/LeftSideCard";
import RightSideCard from "../components/singleApartmentComp/RightSideCard";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import ErrorPage from "./ErrorPage";


const SingleApartmentPage = () => {
  const { id } = useParams();
  // console.log(id);
  const { isPending, error, data } = useQuery({
    queryKey: ["singleApartment", id],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_backend}/rent-easy/apartments/${id}`
      );
      return res?.data?.data;
    },
  });

  // console.log(data)

  if (isPending) return <LoadingSpinner/>;

  if (error) return <ErrorPage/>;

  return (
    <div className="">
      <Title title={"Apartment-Details | RentEasy"} />

      <div
        className="relative w-full min-h-screen pb-10 pt-4"
        style={{
          background:
            "linear-gradient(to right, #ab9d90 0%,#d6c9c0 22%,#d6c9c0 80%,#d6c9c0 80%,#ab9d90 100%)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative w-full h-full md:w-11/12 top-0 left-[50%] translate-x-[-50%] z-10 text-white ">
          <PageHeader titleText={data?.apartmentName} />
          <div className="w-full mx-auto pt-8 pb-10 px-10 bg-black flex flex-col md:flex-row justify-between gap-6 items-start">
            {/* left side card */}
            <LeftSideCard singleApartment={data} />
            {/* right side details section */}
            <RightSideCard singleApartment={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleApartmentPage