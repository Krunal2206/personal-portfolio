"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MobileNavigation from "./MobileNavigation";

/**
 * Navigation container — handles sidebar toggle and shows appropriate navs for mobile/desktop.
 */
const Navigation = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <MobileNavigation />
    </>
  );
};

export default Navigation;
