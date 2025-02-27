import { Link, NavLink } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import useAdmin from "../../hooks/useAdmin";

const SideBar = () => {
  const { isAdminDataPending, isAdminData } = useAdmin();
  
  return (
    <div className=" w-full h-[100vh] sticky top-0 bg-primary-chocolate text-primary-light-chocolate flex flex-col justify-start items-center gap-6  pt-6 px-3">
      <div className=" w-full mb-4 mt-4">
        {/* Logo & Website Name */}
        <Link to="/" className="flex items-center gap-1 w-full">
          <img src={logoImg} alt="Logo" className="w-12 h-12" />
          <span className="text-2xl md:text-3xl font-semibold uppercase">
            RentEasy
          </span>
        </Link>
      </div>
      {!isAdminDataPending && isAdminData ? (
        <>
          {/* admin route */}
          <div className=" w-full">
            <ul className="flex-col space-y-3 text-lg text-center">
              <li>
                <NavLink
                  to="/dashboard/admin-home"
                  className={({ isActive }) =>
                    `hover:text-gray-300 ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                >
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/all-users"
                  className={({ isActive }) =>
                    `hover:text-gray-300 ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                >
                  All Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-apartment"
                  className={({ isActive }) =>
                    `hover:text-gray-300 ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                >
                  Add Apartment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/all-apartments"
                  className={({ isActive }) =>
                    `hover:text-gray-300 ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                >
                  All Apartment
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          {/* user route */}
          <div className=" w-full">
            <ul className="flex-col space-y-3 text-lg text-center">
              <li>
                <NavLink
                  to="/dashboard/user-home"
                  className={({ isActive }) =>
                    `hover:text-gray-300 ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                >
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-apartment"
                  className={({ isActive }) =>
                    `hover:text-gray-300 ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                >
                  Add Apartment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-apartment"
                  className={({ isActive }) =>
                    `hover:text-gray-300 ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                >
                  Add Apartment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-bookings"
                  className={({ isActive }) =>
                    `hover:text-gray-300 ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                >
                  My Booking
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-apartments"
                  className={({ isActive }) =>
                    `hover:text-gray-300 ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                >
                  My Apartments
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
      <div className="w-full border border-dashed border-primary-light-chocolate my-2"></div>
      <div className=" w-full">
        <ul className="flex-col space-y-3 text-lg text-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-gray-300 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `hover:text-gray-300 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
