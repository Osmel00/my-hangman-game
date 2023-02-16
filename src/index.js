import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./routes/RootLayout";
import { Home } from "./routes/Home";
import { Play } from "./routes/Play";
import { Contexto } from "./routes/context/Contexto";
import { Images } from "./routes/Images";
import { EndPlay } from "./routes/EndPlay";
import { Winner } from "./routes/Winner";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/play",
        element: <Play />,
        children: [
          {
            path: "/play/:idfoto",
            element: <Images />,
          },
        ],
      },
      {
        path: "/end",
        element: <EndPlay />,
      },
      {
        path: "/winner",
        element: <Winner />,
      },
    ],
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
