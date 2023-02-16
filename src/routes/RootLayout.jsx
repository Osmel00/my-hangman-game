import React from "react";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="flex items-center w-full h-screen bg-gradient-to-b from-slate-50 to-green-800">
      <Outlet />
    </div>
  );
};
