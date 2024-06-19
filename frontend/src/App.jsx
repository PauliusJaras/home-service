import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import ServicesPage from "./pages/servicesPage";
import ErrorPage from "./pages/errorPage";
import AboutUsPage from "./pages/aboutUsPage";
import Navbar from "./components/navbar";
import "./App.scss";
import Home from "./pages/home";
import LoginPage from "./pages/loginPage";
import { routes } from "./router/routes";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: routes.home,
        element: <Home />,
      },
      {
        path: routes.services,
        element: <ServicesPage />,
      },
      {
        path: routes.aboutUs,
        element: <AboutUsPage />,
      },
      {
        path: routes.login,
        element: <LoginPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
