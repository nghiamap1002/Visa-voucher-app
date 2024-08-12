import { createContext } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { io } from "socket.io-client";
import './App.css';
import { API_URL } from "./config";
import HomePage from "./layouts/Home";
import VoucherPage from "./layouts/Voucher";

export const SocketContext = createContext(null)

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

  const socket = io(API_URL)

  return (
    <SocketContext.Provider value={socket}>
      <RouterProvider router={router} />
    </SocketContext.Provider>
  );
};

export default App;
