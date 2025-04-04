import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary-chocolate text-primary-light-chocolate py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/apartment"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Apartment
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 2.163c-3.259 0-3.667.014-4.947.072-2.905.132-4.164 1.457-4.293 4.293-.057 1.281-.072 1.689-.072 4.947 0 3.259.014 3.668.072 4.948.13 2.907 1.388 4.164 4.293 4.293 1.28.057 1.689.072 4.947.072 3.259 0 3.668-.014 4.948-.072 2.907-.13 4.164-1.387 4.293-4.293.057-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.13-2.906-1.387-4.164-4.293-4.293-1.281-.057-1.69-.072-4.948-.072zm0 5.838c-1.979 0-3.582 1.604-3.582 3.581 0 1.978 1.604 3.582 3.582 3.582 1.978 0 3.581-1.604 3.581-3.582 0-1.978-1.604-3.581-3.581-3.581zm0 5.838c-1.242 0-2.25-1.009-2.25-2.25 0-1.242 1.009-2.25 2.25-2.25 1.241 0 2.25 1.009 2.25 2.25 0 1.241-1.009 2.25-2.25 2.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Email: info@mywebsite.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
            <p className="text-sm">Address: 123 Main St, City, Country</p>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;