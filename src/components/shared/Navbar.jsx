import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logoImg from "../../assets/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const user = {
    isLoggedIn: true, // Change to false to test
    name: "John Doe",
    profilePic: "https://i.pravatar.cc/40?img=10", // Dummy profile image
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary-chocolate text-primary-light-chocolate sticky top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo & Website Name */}
        <Link to="/" className="flex items-center gap-1">
          <img
            src={logoImg}
            alt="Logo"
            className="w-12 h-12"
          />
          <span className="text-2xl md:text-3xl font-semibold uppercase">RentEasy</span>
        </Link>

        {/* Nav Links (Hidden in Mobile) */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-gray-300 ${isActive ? "border-b-2 border-white" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apartments"
              className={({ isActive }) =>
                `hover:text-gray-300 ${isActive ? "border-b-2 border-white" : ""}`
              }
            >
              Apartment
            </NavLink>
          </li>
        </ul>

        <div className="flex justify-end gap-6 pr-6">
          {/* User Profile / Login */}
        <div className="relative">
          {user.isLoggedIn ? (
            <div
              className="cursor-pointer flex items-center gap-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src={user.profilePic}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
          ) : (
            <Link to="/login" className="text-lg hover:text-gray-300">
              🔑 Login
            </Link>
          )}

          {/* Dropdown Menu */}
          {isDropdownOpen && user.isLoggedIn && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg py-2">
              <p className="px-4 py-2 font-semibold">{user.name}</p>
              <hr />
              <Link
                to="/dashboard"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Dashboard
              </Link>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => alert("Logged Out!")}
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
