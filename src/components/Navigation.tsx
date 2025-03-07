"use client";

import { TabNavigation, TabNavigationLink } from "./TabNavigation";
import { Notifications } from "./Notifications";
import { useLocation } from "react-router-dom";
import { DropdownUserProfile } from "./UserProfile";
import { Link } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  return (
    <div className="shadow-s sticky top-0 z-20 bg-white dark:bg-gray-950">
      <div className="mx-auto flex items-center justify-between px-4 pt-3 sm:px-6">
        <div className="flex items-center gap-2 px-7">
          <span className="text-2xl font-bold">KAIE</span>
        </div>
        <div className="flex h-[42px] flex-nowrap gap-1">
          <Notifications />
          <DropdownUserProfile />
        </div>
      </div>
      <TabNavigation className="mt-5">
        <div className="mx-auto flex w-full items-center px-10 space-x-4">
          <TabNavigationLink
            className="inline-flex gap-2"
            asChild
            active={location.pathname === "/dashboard"}
          >
            <Link to="/dashboard">Dashboard</Link>
          </TabNavigationLink>
          <TabNavigationLink
            className="inline-flex gap-2"
            asChild
            active={location.pathname === "/messages"}
          >
            <Link to="/messages">Messages</Link>
          </TabNavigationLink>
          <TabNavigationLink
            className="inline-flex gap-2"
            asChild
            active={location.pathname === "/api-keys"}
          >
            <Link to="/api-keys">API Keys</Link>
          </TabNavigationLink>
          <TabNavigationLink
            className="inline-flex gap-2"
            asChild
            active={location.pathname === "/usage"}
          >
            <Link to="/usage">Usage</Link>
          </TabNavigationLink>
          <TabNavigationLink
            className="inline-flex gap-2"
            asChild
            active={location.pathname === "/support"}
          >
            <Link to="/support">Support</Link>
          </TabNavigationLink>
          <TabNavigationLink
            className="inline-flex gap-2"
            asChild
            active={location.pathname === "/documentation"}
          >
            <Link to="/documentation">Documentation</Link>
          </TabNavigationLink>
          <TabNavigationLink
            className="inline-flex gap-2"
            asChild
            active={location.pathname === "/playground"}
          >
            <Link to="/playground">Playground</Link>
          </TabNavigationLink>
          <TabNavigationLink
            className="inline-flex gap-2"
            asChild
            active={location.pathname === "/billing"}
          >
            <Link to="/billing">Billing</Link>
          </TabNavigationLink>
        </div>
      </TabNavigation>
    </div>
  );
}

export { Navigation };
