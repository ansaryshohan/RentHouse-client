import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "./useAuthContext";
import useAxiosSecure from "./useAxiosSecure";

const useSingleAgreementUserData = () => {
  const { axiosCredentialInstance } = useAxiosSecure();
  const { user } = useAuthContext();
  const {
    isPending: userUnpaidAgreementDataPending,
    error: userUnpaidAgreementDataError,
    data: userUnpaidAgreementData,
    refetch,
  } = useQuery({
    queryKey: ["userUnpaidAgreement"],
    queryFn: async () => {
      const res = await axiosCredentialInstance.get(
        `/rent-easy/agreements/${user?.email}`
      );
      // console.log(res.data.data);
      return res?.data?.data;
    },
  });

  return {
    userUnpaidAgreementDataPending,
    userUnpaidAgreementDataError,
    userUnpaidAgreementData,
    refetch,
  };
};


export default useSingleAgreementUserData