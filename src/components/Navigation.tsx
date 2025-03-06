"use client";

import { TabNavigation, TabNavigationLink } from "./TabNavigation";
import { Notifications } from "./Notifications";

import { useLocation } from "react-router-dom";
import Logo from "../assets/17896095_5920854.jpg";
import { DropdownUserProfile } from "./UserProfile";
import { Link } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  return (
    <div className="shadow-s sticky top-0 z-20 bg-white dark:bg-gray-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-3 sm:px-6">
        <div>
          <span className="sr-only">Your Company</span>
          <img src={Logo} alt="Logo" className="h-6" />
        </div>
        <div className="flex h-[42px] flex-nowrap gap-1">
          <Notifications />
          <DropdownUserProfile />
        </div>
      </div>
      <TabNavigation className="mt-5">
        <div className="mx-auto flex w-full max-w-7xl items-center px-6">
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
            active={location.pathname === "/retention"}
          >
            <Link to="/retention">Retention</Link>
          </TabNavigationLink>
          <TabNavigationLink
            className="inline-flex gap-2"
            asChild
            active={location.pathname === "/workflow"}
          >
            <Link to="/workflow">Workflow</Link>
          </TabNavigationLink>
          <TabNavigationLink
            className="inline-flex gap-2"
            asChild
            active={location.pathname === "/agents"}
          >
            <Link to="/agents">Agents</Link>
          </TabNavigationLink>
        </div>
      </TabNavigation>
    </div>
  );
}

export { Navigation };
