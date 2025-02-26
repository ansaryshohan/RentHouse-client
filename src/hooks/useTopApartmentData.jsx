import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTopApartmentData = () => {
  const {
    isPending: topApartmentDataPending,
    error: topApartmentDataError,
    data: topApartmentData,
  } = useQuery({
    queryKey: ["topApartment"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_backend}/rent-easy/apartments/top-apartments`
      );
      // console.log(res.data.data);
      return res?.data?.data;
    },
  });

  return { topApartmentDataPending, topApartmentDataError, topApartmentData };
};

export default useTopApartmentData;
