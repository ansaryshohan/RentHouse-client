import { Link } from "react-router-dom";
import loginImg from "../assets/house-login.webp";
import LoginForm from "../components/login&RegisterComp/LoginForm";
import SocialLogin from "../components/login&RegisterComp/SocialLogin";
import Title from "../components/shared/Title";
const LoginPage = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to left, #603813, #b29f94)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className=" min-h-screen  text-white flex justify-center items-center gap-10"
    >
      <Title title={"Login | RentEasy"} />
      <div className="w-full lg:w-11/12 flex justify-center items-center gap-8 min-h-screen text-white">
        <div className="hidden md:block w-1/2 relative">
          <img src={loginImg} alt="" />
        </div>
        <div className="w-full md:w-1/2 max-w-md p-8 space-y-3 rounded-xl">
          <h1 className="text-4xl font-bold text-center mb-4">Login</h1>
          <LoginForm />
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            <p className="px-3 text-sm ">Login with social accounts</p>
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          </div>
          <SocialLogin />
          <p className="text-xs text-center sm:px-6 ">
            Don{"'"}t have an account?
            <Link
              rel="noopener noreferrer"
              to={"/register"}
              className="underline text-gray-50 ml-2"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
