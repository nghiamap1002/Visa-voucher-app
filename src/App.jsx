import { createContext, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import HomePage from "./layouts/Home";
import VoucherPage from "./layouts/Voucher";
import { socket } from "./socket";


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


  useEffect(() => {

    const eventFunc = () => socket.emit('closePayment', { sessionId: socket.id })

    window.addEventListener('unload', eventFunc);
    return () => {
      window.removeEventListener('unload', eventFunc)
    }
  }, [])


  return (
    <RouterProvider router={router} />
  );
};

export default App;
