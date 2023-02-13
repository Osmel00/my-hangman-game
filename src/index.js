import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./routes/RootLayout";
import { Home } from "./routes/Home";
import { Play } from "./routes/Play";
import { Contexto } from "./routes/context/Contexto";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/play",
    element: <Play />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 // <React.StrictMode>
      <Contexto>
        <RouterProvider router={router} />
    </Contexto>
  //</React.StrictMode>
);
