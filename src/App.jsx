import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import HomePage from "./layouts/Home";
import VoucherPage from "./layouts/Voucher";

const App = () => {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/voucher",
      element: <VoucherPage />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
