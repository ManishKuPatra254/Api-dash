// "use client";
// import { Tooltip } from "./Tooltip";
// import { cx, focusRing } from "../lib/utils";
// import {
//   Activity,
//   Compass,
//   CreditCard,
//   FileText,
//   HelpCircle,
//   Key,
//   LayoutGrid,
//   MessageSquare,
//   PanelRightClose,
//   PanelRightOpen,
//   Play,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import MobileSidebar from "./MobileSidebar";
// // import { UserProfileDesktop, UserProfileMobile } from "./UserProfile";

// const navigation = [
//   { name: "Dashboard", href: "/dashboard", icon: LayoutGrid },
//   { name: "Messages", href: "/messages", icon: MessageSquare },
//   { name: "API Keys", href: "/api-keys", icon: Key },
//   { name: "Usage", href: "/usage", icon: Activity },
//   { name: "Support", href: "/support", icon: HelpCircle },
//   { name: "Documentation", href: "/docs", icon: FileText },
//   { name: "Playground", href: "/playground", icon: Play },
//   { name: "Billing", href: "/billing", icon: CreditCard },
// ] as const;

// interface SidebarProps {
//   isCollapsed: boolean;
//   toggleSidebar: () => void;
// }

// export function Sidebar({ isCollapsed, toggleSidebar }: SidebarProps) {
//   const pathname = useLocation();
//   const isActive = (itemHref: string) => {
//     if (itemHref === "/settings") {
//       return pathname.pathname.startsWith("/settings");
//     }
//     return (
//       pathname.pathname === itemHref || pathname.pathname.startsWith(itemHref)
//     );
//   };
//   return (
//     <>
//       {/* sidebar (lg+) */}
//       <nav
//         className={cx(
//           isCollapsed ? "lg:w-[60px]" : "lg:w-64",
//           "hidden h-screen lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col",
//           "border-r"
//         )}
//       >
//         <aside className="flex h-full flex-col gap-y-4 px-3 py-4">
//           <div>
//             <div className="flex items-center gap-x-1.5">
//               <button
//                 className="group inline-flex rounded-md p-2 hover:bg-gray-200/50 hover:dark:bg-gray-900"
//                 onClick={toggleSidebar}
//               >
//                 {isCollapsed ? (
//                   <PanelRightClose
//                     className="size-5 shrink-0 text-gray-500 group-hover:text-gray-700 dark:text-gray-500 group-hover:dark:text-gray-300"
//                     aria-hidden="true"
//                   />
//                 ) : (
//                   <PanelRightOpen
//                     className="size-5 shrink-0 text-gray-500 group-hover:text-gray-700 dark:text-gray-500 group-hover:dark:text-gray-300"
//                     aria-hidden="true"
//                   />
//                 )}
//               </button>
//               <span
//                 className={cx(
//                   "text-sm font-semibold text-gray-900 transition-opacity dark:text-gray-50",
//                   isCollapsed ? "opacity-0" : "opacity-100"
//                 )}
//               >
//                 <span>Celerity</span>
//               </span>
//             </div>
//           </div>
//           <nav
//             aria-label="core navigation links"
//             className="flex flex-1 flex-col space-y-10"
//           >
//             <div>
//               <span
//                 aria-hidden={isCollapsed}
//                 className={cx(
//                   "block h-6 text-xs font-medium leading-6 text-gray-500 transition-opacity dark:text-gray-500",
//                   isCollapsed ? "opacity-0" : "opacity-100"
//                 )}
//               >
//                 Platform
//               </span>
//               <ul role="list" className="mt-1 space-y-2">
//                 {navigation.map((item) => (
//                   <li key={item.name}>
//                     {isCollapsed ? (
//                       <Tooltip
//                         side="right"
//                         content={item.name}
//                         sideOffset={6}
//                         showArrow={false}
//                         className="z-[999]"
//                       >
//                         <Link
//                           to={item.href}
//                           className={cx(
//                             isActive(item.href)
//                               ? "text-blue-600 dark:text-blue-500"
//                               : "text-gray-700 dark:text-gray-300",
//                             "inline-flex items-center rounded-md p-2 text-sm font-medium transition hover:bg-gray-200/50 hover:dark:bg-gray-900",
//                             focusRing
//                           )}
//                         >
//                           <item.icon
//                             className="size-5 shrink-0"
//                             aria-hidden="true"
//                           />
//                         </Link>
//                       </Tooltip>
//                     ) : (
//                       <Link
//                         to={item.href}
//                         className={cx(
//                           isActive(item.href)
//                             ? "text-blue-600 dark:text-blue-500"
//                             : "text-gray-700 dark:text-gray-300",
//                           "flex items-center gap-x-2.5 rounded-md p-2 text-sm font-medium transition-opacity hover:bg-gray-200/50 hover:dark:bg-gray-900",
//                           focusRing
//                         )}
//                       >
//                         <item.icon
//                           className="size-5 shrink-0"
//                           aria-hidden="true"
//                         />
//                         {item.name}
//                       </Link>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <span
//                 aria-hidden={isCollapsed}
//                 className={cx(
//                   "block h-6 text-xs font-medium leading-6 text-gray-500 transition-opacity dark:text-gray-500",
//                   isCollapsed ? "opacity-0" : "opacity-100"
//                 )}
//               >
//                 Setup
//               </span>
//               <ul role="list" className="mt-1 space-y-2">
//                 <li>
//                   {isCollapsed ? (
//                     <Tooltip
//                       side="right"
//                       content="Onboarding"
//                       sideOffset={6}
//                       showArrow={false}
//                       className="z-[999]"
//                     >
//                       <Link
//                         to="/onboarding/products"
//                         className={cx(
//                           isActive("/onboarding")
//                             ? "text-blue-600 dark:text-blue-500"
//                             : "text-gray-700 dark:text-gray-300",
//                           "inline-flex items-center rounded-md p-2 text-sm font-medium transition hover:bg-gray-200/50 hover:dark:bg-gray-900",
//                           focusRing
//                         )}
//                       >
//                         <Compass
//                           className="size-5 shrink-0"
//                           aria-hidden="true"
//                         />
//                       </Link>
//                     </Tooltip>
//                   ) : (
//                     <Link
//                       to="/onboarding/products"
//                       className={cx(
//                         isActive("/onboarding")
//                           ? "text-blue-600 dark:text-blue-500"
//                           : "text-gray-700 dark:text-gray-300",
//                         "flex items-center gap-x-2.5 rounded-md p-2 text-sm font-medium transition hover:bg-gray-200/50 hover:dark:bg-gray-900",
//                         focusRing
//                       )}
//                     >
//                       <Compass className="size-5 shrink-0" aria-hidden="true" />
//                       Onboarding
//                     </Link>
//                   )}
//                 </li>
//               </ul>
//             </div>
//           </nav>
//           <div className="mt-auto border-t border-gray-200 pt-3 dark:border-gray-800">
//             <UserProfileDesktop isCollapsed={isCollapsed} />
//           </div>
//         </aside>
//       </nav>
//       {/* top navbar (xs-lg) */}
//       <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6 lg:hidden dark:border-gray-800 dark:bg-gray-950">
//         <span
//           className={cx(
//             "font-semibold text-gray-900 sm:text-sm dark:text-gray-50",
//             isCollapsed ? "opacity-0" : "opacity-100"
//           )}
//         >
//           <a aria-label="Home Link" href="/">
//             Acme Corp.
//           </a>
//         </span>
//         <div className="flex items-center gap-1 sm:gap-2">
//           <UserProfileMobile />
//           <MobileSidebar />
//         </div>
//       </div>
//     </>
//   );
// }
