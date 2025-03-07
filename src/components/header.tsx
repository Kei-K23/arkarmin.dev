"use client";

import { usePathname } from "next/navigation";
import { ThemeToggler } from "./theme-toggle";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = {
  "/": {
    name: "home",
  },
  // "/blog": {
  //   name: "blog",
  // },
  "/projects": {
    name: "projects",
  },
};

export function Header() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <header className="mb-10 tracking-tight mt-10">
      <div className=" lg:sticky lg:top-20">
        <>
          <nav
            className="fade relative scroll-pr-6  px-0 pb-0 md:relative md:overflow-auto"
            id="nav"
          >
            <div className="flex w-full flex-row justify-between items-center">
              <div className="flex flex-row justify-between">
                {Object.entries(navItems).map(([path, { name }]) => {
                  const isActive = path === pathname;
                  return (
                    <Link
                      key={path}
                      href={path}
                      className={cn(
                        "flex align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200",
                        !isActive && "text-neutral-500",
                      )}
                    >
                      <span className="relative px-2 py-1">{name}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="ml-auto">
                <ThemeToggler />
              </div>
            </div>
          </nav>
        </>
      </div>
    </header>
  );
}
