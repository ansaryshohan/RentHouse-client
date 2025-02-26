import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import { useAuthContext } from "../hooks/useAuthContext";

const RestrictedRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user?.email) {
    return <>{children}</>;
  }
  return <Navigate to={"/"} replace />;
};

export default RestrictedRoute;
