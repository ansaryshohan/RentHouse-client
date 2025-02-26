import { Link } from "react-router-dom";
import Title from "../components/shared/Title";
import RegisterForm from "../components/login&RegisterComp/RegisterForm";
import SocialLogin from "../components/login&RegisterComp/SocialLogin";
import registerImg from "../assets/house-login.webp"

const RegisterPage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to right, #603813, #b29f94)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className=" min-h-[80vh]  text-white"
    >
      <Title title={"Register | RentEasy"}/>

      <div className="w-full lg:w-11/12 mx-auto flex justify-center items-center gap-8 min-h-screen    text-white py-10">
        <div className="hidden md:block w-1/2 relative">
          <img src={registerImg} alt=" registration image" />
        </div>
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl">
          <h1 className="text-4xl font-bold text-center mb-4">Register</h1>
          <RegisterForm />
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            <p className="px-3 text-sm ">Sign Up with social accounts</p>
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          </div>
          <SocialLogin />
          <p className="text-xs text-center sm:px-6 ">
            Already have an account?
            <Link
              rel="noopener noreferrer"
              to={"/login"}
              className="underline text-gray-50 ml-2"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;