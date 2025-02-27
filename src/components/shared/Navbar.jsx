import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logoImg from "../../assets/logo.png";
import useAdmin from "../../hooks/useAdmin";
import { useAuthContext } from "../../hooks/useAuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, setUser, logOut } = useAuthContext();
  const { axiosCredentialInstance } = useAxiosSecure();
  const { isAdminData, isAdminDataPending } = useAdmin();

  const handleLogOut = () => {
    setIsDropdownOpen(false);
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
    <nav className="bg-primary-chocolate text-primary-light-chocolate sticky top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo & Website Name */}
        <Link to="/" className="flex items-center gap-1">
          <img src={logoImg} alt="Logo" className="w-12 h-12" />
          <span className="text-2xl md:text-3xl font-semibold uppercase">
            RentEasy
          </span>
        </Link>

        {/* Nav Links (Hidden in Mobile) */}
        <ul className="hidden md:flex space-x-6 text-lg">
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
              to="/apartments"
              className={({ isActive }) =>
                `hover:text-gray-300 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              Apartment
            </NavLink>
          </li>
        </ul>

        <div className="flex justify-end gap-6 pr-6">
          {/* User Profile / Login */}
          <div className="relative">
            {user?.email ? (
              <div
                className="cursor-pointer flex items-center gap-2"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <img
                  src={user?.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover object-center"
                />
              </div>
            ) : (
              <Link
                to="/login"
                className="text-lg  py-2 px-3 rounded-2xl border border-primary-light-chocolate hover:bg-primary-light-chocolate hover:text-primary-chocolate"
              >
                🔑 Login
              </Link>
            )}

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg py-2">
                <p className="px-4 py-2 font-semibold">{user.displayName}</p>
                <hr />

                {!isAdminDataPending && isAdminData ? (
                  <Link
                    to="/dashboard/admin-home"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    to="/dashboard/user-home"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                )}
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu (Hamburger) */}
          <div className="md:hidden flex justify-center items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <GiHamburgerMenu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-primary-chocolate py-2">
          <li>
            <NavLink
              to="/"
              className="block py-2 text-lg hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apartments"
              className="block py-2 text-lg hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Apartment
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
