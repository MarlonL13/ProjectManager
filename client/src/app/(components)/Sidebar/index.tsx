"use client";
// import { useState } from "react";
import Image from "next/image";
import { Briefcase, Home, LockIcon, LucideIcon, Search, Settings, User, Users, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import Link from "next/link";
import { setIsSidebarOpen } from "@/state";

const Sidebar = () => {
  // const [showProjects, setShowProjects] = useState(true);
  // const [showPriorities, setShowPriorities] = useState(true);

  const dispatch = useAppDispatch();
  const isSideBarOpen = useAppSelector((state) => state.global.isSidebarOpen);

  return (
    <div
      className={`fixed z-40 flex h-full flex-col justify-between overflow-y-auto bg-white shadow-xl transition-all duration-300 dark:bg-black 
        ${isSideBarOpen ? "w-0 hidden" : "w-64"}`
      }
    >
      <div className="flex h-full w-full flex-col justify-start">
        {/* Sidebar Header */}
        <div className="z-50 flex min-h-14 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            ML Projects
          </div>
          {isSideBarOpen ? null : (
            <button className="py-3" onClick={()=> dispatch(setIsSidebarOpen(!isSideBarOpen))}>
              <X className="h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white" />
            </button>
          )}
        </div>
        {/* Sidebar Body */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <div>
            <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
              ML TEAM
            </h3>
            <div className="mt-1 flex items-center gap-2">
              <LockIcon className="h-3 w-3 text-gray-500 dark:text-gray-200" />
              <p className="text-xs text-gray-500 dark:text-gray-200">
                Private
              </p>
            </div>
          </div>
        </div>
        {/* Sidebar links */}
        <nav className="z-10 w-full">
          <SidebarLink href="/home" icon={Home} label="Home" />
          <SidebarLink href="/timeline" icon={Briefcase} label="Timeline" />
          <SidebarLink href="/search" icon={Search} label="Search" />
          <SidebarLink href="/settings" icon={Settings} label="Settings" />
          <SidebarLink href="/users" icon={User} label="Users" />
          <SidebarLink href="/teams" icon={Users} label="Teams" />
        </nav>
      </div>
    </div>
  );
};
interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}
const SidebarLink = ({
  href,
  icon: Icon,
  label,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === "/" && href === "/home");

  return (
    <Link href={href} className="w-full">
      <div
        className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-300 dark:bg-black dark:hover:bg-gray-700 ${
          isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""
        } jsutify-start px-6 py-4`}
      >
        {isActive && (
          <div className="absolute left-0 top-0 h-full w-[5px] bg-blue-200" />
        )}
        <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
        <span className={`font-medium text-gray-800 dark:text-gray-100`}>
          {label}
        </span>
      </div>
    </Link>
  );
};

export default Sidebar;
