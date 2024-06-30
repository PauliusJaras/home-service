import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import ServicesPage from "./pages/servicesPage";
import ErrorPage from "./pages/errorPage";
import AboutUsPage from "./pages/aboutUsPage";
import "./App.scss";
import Home from "./pages/home";
import LoginPage from "./pages/login/loginPage";
import { routes } from "./router/routes";
import RootLayout from "./components/layout/rootLayout";
import CategoryPage from "./pages/categoryPage";
import RegisterPage from "./pages/register/registerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootLayout>
        <Outlet />
      </RootLayout>
    ),
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
      {
        path: routes.register,
        element: <RegisterPage />,
      },
      {
        path: routes.search_category,
        element: <CategoryPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
