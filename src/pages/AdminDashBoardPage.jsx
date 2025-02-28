import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import bgImage from "../assets/image-2.webp"

const AdminDashBoardPage = () => {
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
    <div className="w-full min-h[100vh]">
      {/* dashboard header */}
      <div className="flex justify-between items-center px-6 py-4 pr-6 w-full border-b border-primary-light-chocolate">
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
      {/* welcome Image */}
      <div
        className="text-center w-full  h-[40vh]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full h-full bg-black/30 py-8  flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase bg-gradient-to-r from-black/60 to-transparent px-10">
            Welcome In DashBoard
          </h2>
        </div>
      </div>
    </div>)
}

export default AdminDashBoardPage