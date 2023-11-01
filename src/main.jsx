import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main.jsx";
import BookingPage from "./components/BookingPage.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        name: "home",
        path: "/",
        element: <Main />,
      },
      {
        path: "/reserve-table",
        element: <BookingPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
