import { Link } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { useAuthContext } from "../hooks/useAuthContext";

const MyProfilePage = () => {
  const { user, loading } = useAuthContext();
  const { isAdminDataPending, isAdminData } = useAdmin();
  console.log(user);
  return (
    <div className="p-10 flex justify-center">
      <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
        {!loading && (
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square object-cover object-center"
          />
        )}

        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {user?.displayName}
            </h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
              {user?.email}
            </p>
            {!isAdminDataPending && (
              <p className="px-5 text-xs sm:text-base dark:text-gray-600 mb-2">
                Role: {!isAdminData ? "User" : "Admin"}
              </p>
            )}
          </div>
          <div className="flex justify-center pt-2 space-x-4 align-center">
            {!isAdminDataPending && isAdminData ? (
              <Link
                to="/dashboard/admin-home"
                className="block px-4 py-2 bg-gray-300 hover:bg-gray-200 text-primary-chocolate font-semibold"
              >
                Go To Dashboard
              </Link>
            ) : (
              <Link
                to="/dashboard/user-home"
                className="block px-4 py-2 bg-gray-300 hover:bg-gray-200 text-primary-chocolate font-semibold"
              >
                Go To Dashboard
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
