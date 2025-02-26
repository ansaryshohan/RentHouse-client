import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllApartmentData = (currentPageNo, perPageData,priceSort,apartmentCategory,searchText) => {
  const {
    isPending: allApartmentDataPending,
    error: allApartmentDataError,
    data: allApartmentData,
    refetch
  } = useQuery({
    queryKey: ["allApartment",currentPageNo,priceSort,apartmentCategory,searchText],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_backend}/rent-easy/apartments/approved-apartments?perPageData=${perPageData}&pageNo=${currentPageNo}&priceSort=${priceSort}&apartmentType=${apartmentCategory}&searchText=${searchText}`
      );
      // console.log(res.data);
      return res?.data?.data;
    },
  });

  return { allApartmentDataPending, allApartmentDataError, allApartmentData,refetch };
};

export default useAllApartmentData;
