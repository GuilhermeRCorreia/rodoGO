'use client'
import {useState, ReactElement } from "react";
import AdminPanelLayout from "components/navs/admin-panel-layout";
import { VerNotas } from "src/components/notasVer/verNotas";
import { Outlet } from "react-router-dom";

export default function See(): ReactElement {
  const[jwtToken, setJwtToken] = useState("")
  return (
    <>
      <main className="flex h-screen w-screen">
        <AdminPanelLayout>
          <div className="flex justify-center items-center">
            <VerNotas />
          </div>{" "}
          <Outlet context ={{ jwtToken, setJwtToken}}/>
        </AdminPanelLayout>
      </main>
    </>
  );
}
