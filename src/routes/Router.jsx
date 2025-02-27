import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../layouts/DashBoardLayout";
import MainLayout from "../layouts/MainLayout";
import AddApartmentPage from "../pages/AddApartmentPage";
import AdminDashBoardPage from "../pages/AdminDashBoardPage";
import AllApartmentsDashboardPage from "../pages/AllApartmentsDashboardPage";
import AllUsersDashboardPage from "../pages/AllUsersDashboardPage";
import ApprovedApartmentPage from "../pages/ApprovedApartmentPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MyProfilePage from "../pages/MyProfilePage";
import RegisterPage from "../pages/RegisterPage";
import UserDashBoardPage from "../pages/UserDashBoardPage";
import SingleApartmentPage from "../pages/SingleApartmentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "apartments",
        element: <ApprovedApartmentPage />,
      },
      {
        path: "apartment/:id",
        element: <SingleApartmentPage />,
      },
      {
        path: "profile",
        element: <MyProfilePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "admin-home",
        element: <AdminDashBoardPage />,
      },
      {
        path: "user-home",
        element: <UserDashBoardPage />,
      },
      {
        path: "all-users",
        element: <AllUsersDashboardPage />,
      },
      {
        path: "all-apartments",
        element: <AllApartmentsDashboardPage />,
      },
      {
        path: "add-apartment",
        element: <AddApartmentPage />,
      },
    ],
  },
]);

export default router;
