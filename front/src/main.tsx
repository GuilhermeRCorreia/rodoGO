'use client'
import { ThemeProvider } from "./components/theme-provider";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'; // Importação do React Query
import "./globals.css";
import Login from "./components/login/login";
import See from "./routes/see";
import Include from "./routes/include";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="w-screen h-screen"><Login /></div>,
  },
  {
    path: "/prenota",
    element: <div className="w-screen h-screen"><See /></div>,
  },
  {
    path: "/prenota/incluir",
    element: <div className="w-screen h-screen"><Include /></div>,
  },
]);

// Criação da instância do QueryClient
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {/* Envolver o RouterProvider com QueryClientProvider */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
