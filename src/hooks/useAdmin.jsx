import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "./useAuthContext";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, } = useAuthContext();
  const {axiosCredentialInstance} = useAxiosSecure()
  const {
    isPending: isAdminDataPending,
    error: isAdminDataError,
    data: isAdminData,
    refetch,
  } = useQuery({
    queryKey: ["userRole", user?.email],
    queryFn: async () => {
        const res = await axiosCredentialInstance.get(
          `${import.meta.env.VITE_render_backend}/rent-easy/user/user-role/${
            user?.email
          }`
        );
        return res?.data?.data;
    },
  });
  // console.log(userRoleData)

  return { isAdminDataPending, isAdminDataError, isAdminData, refetch };
};

export default useAdmin;
