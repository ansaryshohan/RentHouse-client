import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosCredentialInstance from "../axios/axiosCredentialInstance";
import { useAuthContext } from "./useAuthContext";

const useAxiosSecure = () => {
  const { logOut, setUser } = useAuthContext();
  const navigate = useNavigate();
  axiosCredentialInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axiosCredentialInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        logOut()
          .then(async () => {
            // cookie set when login
            try {
              const { data } = await axiosCredentialInstance.post(
                `/remove-jwt`
              );
              // console.log(data)
              toast.success(data?.message);
              setUser(null);
              navigate("/login");
              return;
            } catch (error) {
              console.error(
                "Failed to get JWT token:",
                error.response?.data || error.message
              );
            }
          })
          .catch(() => toast.error("error in logged out"));
      }
    }
  );

  return { axiosCredentialInstance };
};

export default useAxiosSecure;
