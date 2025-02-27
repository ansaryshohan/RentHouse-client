import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const {isAdminData,isAdminDataPending} = useAdmin();
  const location = useLocation();
  // console.log(location)

  if (loading && isAdminDataPending) {
    return <LoadingSpinner />;
  }

  if (!user && !isAdminData) {
    return (
      <Navigate to={"/login"} state={{ from: location?.pathname }} replace />
    );
  }

  return <>{children}</>;
};

export default AdminRoute;