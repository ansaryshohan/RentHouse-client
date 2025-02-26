import { Link, NavLink } from "react-router-dom";
import logoImg from "../../assets/logo.png";

const SideBar = () => {
  return (
    <div className=" w-full h-full  bg-primary-chocolate text-primary-light-chocolate flex flex-col justify-start items-center gap-6  pt-6 px-3">
      <div className=" w-full mb-4">
        {/* Logo & Website Name */}
        <Link to="/" className="flex items-center gap-1 w-full">
          <img src={logoImg} alt="Logo" className="w-12 h-12" />
          <span className="text-2xl md:text-3xl font-semibold uppercase">
            RentEasy
          </span>
        </Link>
      </div>
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
