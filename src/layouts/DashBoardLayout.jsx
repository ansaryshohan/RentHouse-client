import { Outlet } from "react-router-dom";
import SideBar from "../components/DashboardComp/SideBar";
import DashboardNavbar from "../components/shared/DashboardNavbar";

const DashBoardLayout = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen items-stretch">
      <div className="col-span-3 lg:col-span-3 border h-full bg-primary-chocolate">
        <SideBar />
      </div>
      <div className="col-span-9 lg:col-span-9 h-full flex flex-col">
        <div className="">
          <DashboardNavbar />
        </div>
        <div
          className=" flex-1"
          style={{
            background:
              "linear-gradient(to right, #ab9d90 0%,#d6c9c0 22%,#d6c9c0 80%,#d6c9c0 80%,#ab9d90 100%)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
