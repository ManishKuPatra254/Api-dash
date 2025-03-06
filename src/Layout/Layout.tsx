"use client";
import React from "react";

import { cx } from "../lib/utils";

import { Sidebar } from "../components/Sidebar";
import { Button } from "../components/Button";
import { Bell, Menu, Search } from "lucide-react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="relative flex mx-auto max-w-screen-2xl h-screen overflow-hidden">
      <aside className="fixed left-0 top-0 z-40 h-full">
        <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      </aside>
      <div
        className={cx(
          "flex flex-col w-full overflow-y-auto",
          isCollapsed ? "lg:ml-[60px]" : "lg:ml-64"
        )}
      >
        <header className="sticky top-0 z-50 w-full dark:border-gray-800 dark:bg-gray-950 border-b bg-white">
          <div className="flex h-16 items-center sm:px-6">
            <div className="flex flex-1 items-center justify-between">
              {/* Search */}
              <div className="flex items-center">
                <Button variant="ghost" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
                <div className="hidden md:flex relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <input
                    type="search"
                    placeholder="Search..."
                    className="h-9 w-[240px] rounded-md border border-gray-200 bg-white pl-8 px-3 text-sm focus:border-[#7367f0] focus:outline-none focus:ring-1 focus:ring-[#7367f0] dark:border-gray-800 dark:bg-gray-950"
                  />
                </div>
              </div>

              {/* Right side icons */}
              <div className="flex items-center space-x-4">
                <Button variant="ghost" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[11px] text-white">
                    4
                  </span>
                </Button>
                <div className="h-8 w-8 rounded-full bg-[#7367f0] flex items-center justify-center">
                  <span className="text-sm font-medium text-white">JD</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="">
          <div className="bg-white sm:p-6 lg:rounded-lg dark:bg-gray-925 lg:dark:border-gray-900">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
