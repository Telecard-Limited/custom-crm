"use client";
import { cn } from "@/lib/utils";
import React, { PropsWithChildren, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import DashboardCards from "./dashboardCards"; // Import the DashboardCards component

const Layout = (props: PropsWithChildren) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      <div
        className={cn({
          "grid bg-zinc-100 min-h-screen min-w-screen": true,
          "grid-cols-sidebar": !collapsed,
          "grid-cols-sidebar-collapsed": collapsed,
          "transition-[grid-template-columns] duration-300 ease-in-out": true,
        })}
      >
        {/* Main Content Container */}
        <div className="grid">
          <div className="">
            <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
            {props.children}
          </div>

          {/* Include the DashboardCards component */}
          <DashboardCards />
        </div>
        {/* Sidebar */}
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setSidebarCollapsed}
          shown={showSidebar}
        />
      </div>
    </>
  );
};

export default Layout;
