import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTopApartmentData = () => {
  const { axiosCredentialInstance } = useAxiosSecure();
  const {
    isPending: topApartmentDataPending,
    error: topApartmentDataError,
    data: topApartmentData,
  } = useQuery({
    queryKey: ["topApartment"],
    queryFn: async () => {
      const res = await axiosCredentialInstance.get(
        `${
          import.meta.env.VITE_render_backend
        }/rent-easy/apartments/top-apartments`
      );
      // console.log(res.data.data);
      return res?.data?.data;
    },
  });

  return { topApartmentDataPending, topApartmentDataError, topApartmentData };
};

export default useTopApartmentData;
