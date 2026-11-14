import { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import UserContext from "./context/UserContext";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const AppLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedIn: isLoggedIn, setIsLoggedIn }}>
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const Cart = lazy(() => import("./components/Cart"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        { path: "/contact", element: <Contact /> },
        {
          path: "/cart",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "/restaurant/:id",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <RestaurantMenu />
            </Suspense>
          ),
        },
      ],
      errorElement: <Error />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  },
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={appRouter} future={{ v7_startTransition: true }} />,
);
