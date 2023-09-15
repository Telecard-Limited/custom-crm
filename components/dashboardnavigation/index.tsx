"use client";
import { cn } from "@/lib/utils";
import React, { PropsWithChildren, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
const Layout = (props: PropsWithChildren) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div
      className={cn({
        "grid bg-zinc-100 min-h-screen": true,
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      })}
    >
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setSidebarCollapsed}
        shown={showSidebar}
      />
      <div className="">
        <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
