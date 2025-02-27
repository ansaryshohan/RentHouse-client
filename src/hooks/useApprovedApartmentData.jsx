import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useApprovedApartmentData = (
  currentPageNo,
  perPageData,
  priceSort,
  apartmentCategory,
  searchText
) => {
  const {
    isPending: approvedApartmentDataPending,
    error: approvedApartmentDataError,
    data: approvedApartmentData,
    refetch,
  } = useQuery({
    queryKey: [
      "approvedApartment",
      currentPageNo,
      priceSort,
      apartmentCategory,
      searchText,
    ],
    queryFn: async () => {
      const res = await axios.get(
        `${
          import.meta.env.VITE_backend
        }/rent-easy/apartments/approved-apartments?perPageData=${perPageData}&pageNo=${currentPageNo}&priceSort=${priceSort}&apartmentType=${apartmentCategory}&searchText=${searchText}`
      );
      // console.log(res.data);
      return res?.data?.data;
    },
  });

  return {
    approvedApartmentDataPending,
    approvedApartmentDataError,
    approvedApartmentData,
    refetch,
  };
};

export default useApprovedApartmentData;
