'use client'
import { ThemeProvider } from "./components/theme-provider";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./globals.css";
import See from "./routes/see";
import Include from "./routes/include";
import Login from "./components/login/login";
import Movies from "./routes/movies";

const router = createBrowserRouter([

  {
    path: "/",
    element: (
      <div className="w-screen h-screen">
        {" "}
        <Login />
      </div>
    ),
  },
  {
    path: "/prenota",
    element: (
      <div className="w-screen h-screen">
        {" "}
        <See />
      </div>
    ),
  },
  {
    path: "/prenota/incluir",
    element: (
      <div className="w-screen h-screen">
        {" "}
        <Include />
      </div>
    ),
  },
  {
    path: "/movies",
    element: (
      <div className="w-screen h-screen">
        {" "}
        <Movies />
      </div>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    {" "}
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />{" "}
    </ThemeProvider>
  </React.StrictMode>
);
