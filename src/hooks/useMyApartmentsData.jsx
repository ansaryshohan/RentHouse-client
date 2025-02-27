import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useAuthContext } from "./useAuthContext";


const useMyApartmentsData = (currentPageNo,perPageData,priceSort) => {
  const { axiosCredentialInstance } = useAxiosSecure();
  const {user}= useAuthContext();
  const {
    isPending: userApartmentDataPending,
    error: userApartmentDataError,
    data: userApartmentData,
    refetch,
  } = useQuery({
    queryKey: ["userApartments", currentPageNo, priceSort],
    queryFn: async () => {
      const res = await axiosCredentialInstance.get(
        `/rent-easy/apartments/user-apartments?userEmail=${user?.email}&perPageData=${perPageData}&pageNo=${currentPageNo}&priceSort=${priceSort}`
      );
      // console.log(res.data.data);
      return res?.data?.data;
    },
  });

  return {
    userApartmentDataPending,
    userApartmentDataError,
    userApartmentData,
    refetch,
  };
}

export default useMyApartmentsData