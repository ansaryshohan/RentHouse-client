import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";

const useAdmin = () => {
  const {user}= useAuthContext();
  const {
    isPending: userRoleDataPending,
    error: userRoleDataError,
    data: userRoleData,
    refetch
  } = useQuery({
    queryKey: ["userRole",user.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_backend}/rent-easy/user/user-role/${user.email}`
      );
      // console.log(res.data);
      return res?.data?.data;
    },
  });
  // console.log(userRoleData)

  return { userRoleDataPending, userRoleDataError, userRoleData,refetch };
}

export default useAdmin