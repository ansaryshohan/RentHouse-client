import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllUserData = (currentPageNo,perPageData) => {
  const {axiosCredentialInstance}= useAxiosSecure();
  const {
    isPending: allUsersDataPending,
    error: allUsersDataError,
    data: allUsersData,
    refetch
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosCredentialInstance.get(
        `${import.meta.env.VITE_render_backend}/rent-easy/user/all-users?perPageData=${perPageData}&pageNo=${currentPageNo}`
      );
      // console.log(res.data.data);
      return res?.data?.data;
    },
  });

  return { allUsersDataPending, allUsersDataError,allUsersData,refetch };
}

export default useAllUserData