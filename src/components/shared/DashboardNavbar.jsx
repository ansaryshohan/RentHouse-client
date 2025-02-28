import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../../hooks/useAuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const DashboardNavbar = () => {
  const { user, logOut, setUser } = useAuthContext();
  const { axiosCredentialInstance } = useAxiosSecure();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(async () => {
        // cookie set when login
        try {
          const { data } = await axiosCredentialInstance.post(`/remove-jwt`);
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
  };
  return (
    <div className="flex justify-between items-center px-6 py-4 pr-6 w-full h-full border-b border-primary-light-chocolate">
      <p className="flex gap-1 items-center">
        <span className="text-sm font-medium">Email :</span>
        <span className="text-base font-semibold text-primary-chocolate">
          {user?.email}
        </span>
      </p>
      <p>
        <button
          onClick={handleLogOut}
          className="text-base font-bold py-2 px-3 rounded-2xl border border-primary-light-chocolate text-primary-chocolate hover:bg-primary-light-chocolate hover:text-primary-chocolate"
        >
          LogOut
        </button>
      </p>
    </div>
  );
};

export default DashboardNavbar;
