import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllAgreementsData = (currentPageNo, perPageData, priceSort = "") => {
  const { axiosCredentialInstance } = useAxiosSecure();
  const {
    isPending: allAgreementsDataPending,
    error: allAgreementsDataError,
    data: allAgreementsData,
    refetch,
  } = useQuery({
    queryKey: ["allAgreements", currentPageNo, priceSort],
    queryFn: async () => {
      const res = await axiosCredentialInstance.get(
        `/rent-easy/agreements/all-agreements?perPageData=${perPageData}&pageNo=${currentPageNo}&priceSort=${priceSort}`
      );
      // console.log(res.data.data);
      return res?.data?.data;
    },
  });

  return {
    allAgreementsDataPending,
    allAgreementsDataError,
    allAgreementsData,
    refetch,
  };
};

export default useAllAgreementsData;
