"use client";
import { useState } from "react";
import Image from "next/image";
import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Home,
  Layers3,
  LockIcon,
  LucideIcon,
  Search,
  Settings,
  ShieldAlert,
  User,
  Users,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import Link from "next/link";
import { setIsSidebarOpen } from "@/state";
import { useGetProjectsQuery } from "@/state/api";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriorities, setShowPriorities] = useState(true);

  const { data: projects } = useGetProjectsQuery();
  const dispatch = useAppDispatch();
  const isSideBarOpen = useAppSelector((state) => state.global.isSidebarOpen);

  return (
    <div
      className={`fixed z-40 flex h-full flex-col justify-between overflow-y-auto bg-white shadow-xl transition-all duration-300 dark:bg-black ${isSideBarOpen ? "hidden w-0" : "w-64"}`}
    >
      <div className="flex h-full w-full flex-col justify-start">
        {/* Sidebar Header */}
        <div className="z-50 flex min-h-14 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            ML Projects
          </div>
          {isSideBarOpen ? null : (
            <button
              className="py-3"
              onClick={() => dispatch(setIsSidebarOpen(!isSideBarOpen))}
            >
              <X className="h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white" />
            </button>
          )}
        </div>
        {/* Sidebar Body */}
        <div className="flex items-center gap-5 border-y-[1.5px] px-8 py-4 dark:border-gray-700">
          <Image src="/logo.png" alt="Logo" width={50} height={45} style={{ width: "auto" }} priority/>
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
          <SidebarLink href="/" icon={Home} label="Home" />
          <SidebarLink href="/timeline" icon={Briefcase} label="Timeline" />
          <SidebarLink href="/search" icon={Search} label="Search" />
          <SidebarLink href="/settings" icon={Settings} label="Settings" />
          <SidebarLink href="/users" icon={User} label="Users" />
          <SidebarLink href="/teams" icon={Users} label="Teams" />
        </nav>

        {/* Project links */}
        <button
          onClick={() => setShowProjects((prev: boolean) => !prev)}
          className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
        >
          <span>Projects</span>
          {showProjects ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        {/*Project list */}
        {showProjects &&
          projects?.map((projects) => (
            <SidebarLink
              key={projects.id}
              icon={Briefcase}
              href={`/projects/${projects.id}`}
              label={projects.name}
            />
          ))}
        {/* Priorities links */}
        <button
          onClick={() => setShowPriorities((prev: boolean) => !prev)}
          className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
        >
          <span>Priorities</span>
          {showPriorities ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        {showPriorities && (
          <>
            <SidebarLink
              href="/priority/urgent"
              icon={AlertCircle}
              label="Urgent"
            />
            <SidebarLink
              href="/priority/high"
              icon={ShieldAlert}
              label="High"
            />
            <SidebarLink
              href="/priority/medium"
              icon={AlertTriangle}
              label="Medium"
            />
            <SidebarLink href="/priority/low" icon={AlertOctagon} label="Low" />
            <SidebarLink
              href="/priority/backlog"
              icon={Layers3}
              label="Backlog"
            />
          </>
        )}
      </div>
    </div>
  );
};
interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}
const SidebarLink = ({ href, icon: Icon, label }: SidebarLinkProps) => {
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
