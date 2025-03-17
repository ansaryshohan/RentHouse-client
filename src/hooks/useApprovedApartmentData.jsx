import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useApprovedApartmentData = (
  currentPageNo,
  perPageData,
  priceSort,
  apartmentCategory,
  searchText
) => {
  const { axiosCredentialInstance } = useAxiosSecure();

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
      const res = await axiosCredentialInstance.get(
        `${
          import.meta.env.VITE_render_backend
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
