"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import AuthProvider  from "./authProvider";
import StoreProvider, { useAppSelector } from "./redux";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  const isSideBarOpen = useAppSelector((state) => state.global.isSidebarOpen);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      <Sidebar />
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${isSideBarOpen ? "" : "md:pl-64"}`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <AuthProvider>
      <Dashboard>{children}</Dashboard>
      </AuthProvider>
    </StoreProvider>
  );
};

export default DashboardWrapper;
