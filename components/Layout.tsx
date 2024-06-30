import React from "react";
import Board from "./Board";

function Layout({ children }: any) {
  return (
    <div className="min-w-full min-h-screen  h-screen overflow-hidden bg-blue-100 ">
      <Board />
      <main className="pl-48 pt-16">{children}</main>
    </div>
  );
}

export default Layout;
