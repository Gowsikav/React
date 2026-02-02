import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import { Footer } from "./src/components/Footer";
import { Body } from "./src/components/Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Error } from "./src/components/Error";
import { About } from "./src/components/About";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";

let AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
const appRouter= createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/about", element: <About/> },
      { path: "/", element: <Body /> },
      {path:"/restaurant/:resId", element:<RestaurantMenu/>}
    ],
    errorElement:<Error/>
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);