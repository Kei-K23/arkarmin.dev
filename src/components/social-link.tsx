import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export interface Props {
  className?: string;
  href: string;
  icon: React.ElementType;
  children?: React.ReactNode;
  iconClassName?: string;
}

export function SocialLink({
  className,
  iconClassName,
  href,
  children,
  icon: Icon,
}: Props) {
  return (
    <div className={cn(className, "flex")}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium transition"
      >
        <Icon
          className={cn(
            "group-hover:fill-primary h-6 w-6 flex-none fill-zinc-500 hover:fill-zinc-200 transition",
            iconClassName,
          )}
        />
        {children && <span className="ml-4">{children}</span>}
      </Link>
    </div>
  );
}
