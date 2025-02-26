import { Outlet } from "react-router-dom";
import SideBar from "../components/DashboardComp/SideBar";

const DashBoardLayout = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen items-stretch">
      <div className="col-span-3 lg:col-span-3 border">
        <SideBar/>
      </div>
      <div className="col-span-9 lg:col-span-9">
        <Outlet/>
      </div>
    </div>
  )
}

export default DashBoardLayout