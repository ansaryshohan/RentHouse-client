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
import SingleApartmentPage from "../pages/SingleApartmentPage";
import UserDashBoardPage from "../pages/UserDashBoardPage";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import MyApartmentDashboardPage from "../pages/MyApartmentDashboardPage";
import MakePaymentDashboardPage from "../pages/MakePaymentDashboardPage";

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
        element: (
          <PrivateRoute>
            {" "}
            <MyProfilePage />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: (
          <RestrictedRoute>
            <LoginPage />
          </RestrictedRoute>
        ),
      },
      {
        path: "register",
        element: (
          <RestrictedRoute>
            {" "}
            <RegisterPage />{" "}
          </RestrictedRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout />,
    errorElement: <ErrorPage />,
    children: [
      // admin dashboard routes
      {
        path: "admin-home",
        element: (
          <AdminRoute>
            {" "}
            <AdminDashBoardPage />{" "}
          </AdminRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminRoute>
            {" "}
            <AllUsersDashboardPage />
          </AdminRoute>
        ),
      },
      {
        path: "all-apartments",
        element: (
          <AdminRoute>
            {" "}
            <AllApartmentsDashboardPage />{" "}
          </AdminRoute>
        ),
      },
      // user dashboard routes
      {
        path: "user-home",
        element: (
          <PrivateRoute>
            {" "}
            <UserDashBoardPage />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "make-payment",
        element: (
          <PrivateRoute>
            {" "}
            <MakePaymentDashboardPage />{" "}
          </PrivateRoute>
        ),
      },
      // common routes
      {
        path: "add-apartment",
        element: (
          <PrivateRoute>
            {" "}
            <AddApartmentPage />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "my-apartments",
        element: (
          <PrivateRoute>
            {" "}
            <MyApartmentDashboardPage />{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
