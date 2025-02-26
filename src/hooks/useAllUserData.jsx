import { useQuery } from "@tanstack/react-query";
import axiosCredentialInstance from "../axios/axiosCredentialInstance";


const useAllUserData = (currentPageNo,perPageData) => {
  const {
    isPending: allUsersDataPending,
    error: allUsersDataError,
    data: allUsersData,
    refetch
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosCredentialInstance.get(
        `${import.meta.env.VITE_backend}/rent-easy/user/all-users?perPageData=${perPageData}&pageNo=${currentPageNo}`
      );
      // console.log(res.data.data);
      return res?.data?.data;
    },
  });

  return { allUsersDataPending, allUsersDataError,allUsersData,refetch };
}

export default useAllUserData