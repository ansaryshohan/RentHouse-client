import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllApartmentData = (currentPageNo,perPageData, priceSort="" ) => {
  const { axiosCredentialInstance } = useAxiosSecure();
  const {
    isPending: allApartmentDataPending,
    error: allApartmentDataError,
    data: allApartmentData,
    refetch,
  } = useQuery({
    queryKey: ["allApartment", currentPageNo, priceSort],
    queryFn: async () => {
      const res = await axiosCredentialInstance.get(
        `/rent-easy/apartments/all-apartments?perPageData=${perPageData}&pageNo=${currentPageNo}&priceSort=${priceSort}`
      );
      // console.log(res.data.data);
      return res?.data?.data;
    },
  });

  return {
    allApartmentDataPending,
    allApartmentDataError,
    allApartmentData,
    refetch,
  };
};

export default useAllApartmentData;
