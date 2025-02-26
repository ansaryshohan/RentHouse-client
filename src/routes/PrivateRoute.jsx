import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import LoadingSpinner from "../components/shared/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();
  // console.log(location)

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return (
      <Navigate to={"/login"} state={{ from: location?.pathname }} replace />
    );
  }

  return <>{children}</>;
};

export default PrivateRoute;