import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import PageHeader from "../components/shared/PageHeader";
import Title from "../components/shared/Title";
import LeftSideCard from "../components/singleApartmentComp/LeftSideCard";
import RightSideCard from "../components/singleApartmentComp/RightSideCard";
import { useAuthContext } from "../hooks/useAuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";
import ErrorPage from "./ErrorPage";

const SingleApartmentPage = () => {
  const { id } = useParams();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { axiosCredentialInstance } = useAxiosSecure();
  // console.log(id);
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["singleApartment", id],
    queryFn: async () => {
      const res = await axiosCredentialInstance.get(
        `${import.meta.env.VITE_render_backend}/rent-easy/apartments/${id}`
      );
      return res?.data?.data;
    },
  });

  const handleAgreement = async () => {
    if (!user) {
      navigate("/login", { state: { from: `/apartment/${id}` } });
      return;
    }
    const agreementData = {
      userName: user?.displayName,
      userEmail: user?.email,
      apartmentId: id,
      floorNo: data?.floorNo,
      blockNo: data?.blockNo,
      houseNo: data.houseNo,
      location: data.location,
      price: data?.price,
      apartmentImage: data?.mainImage,
      apartmentName: data.apartmentName,
    };
    const response = await axiosCredentialInstance.post(
      "/rent-easy/agreements/add-agreement",
      agreementData
    );
    // console.log(response?.data, response?.status);
    if (response?.status === 200) {
      refetch();
      Swal.fire({
        icon: "error",
        title: "Unsuccessful",
        text: response?.data?.message,
      });
      return;
    }
    navigate("/dashboard/make-payment");
  };
  // console.log(data)

  if (isPending) return <LoadingSpinner />;

  if (error) return <ErrorPage />;

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
            <LeftSideCard
              singleApartment={data}
              handleAgreement={handleAgreement}
            />
            {/* right side details section */}
            <RightSideCard
              singleApartment={data}
              handleAgreement={handleAgreement}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleApartmentPage;
