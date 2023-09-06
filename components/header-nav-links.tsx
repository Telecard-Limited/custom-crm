"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/`,
      label: "AboutUs",
      active: pathname === `/`,
    },
    {
      href: `/overview`,
      label: "Overview",
      active: pathname === `/overview`,
    },
    {
      href: `/feature`,
      label: "Features",
      active: pathname === `/${params.featureId}/features`,
      icon: <ChevronDown size={20} />,
    },
    {
      href: `/solutions`,
      label: "Solutions",
      active: pathname === `/${params.solutions}/solutions`,
      icon: <ChevronDown size={20} />,
    },
    {
      href: `/registration`,
      label: "Create your Account",
      active: pathname === `/registration`,
    },
    {
      href: `/sales`,
      label: "Contact-Sales-Support",
      active: pathname === `/support`,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary flex flex-row",
            route.active
              ? "text-primary dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
          {route.icon}
        </Link>
      ))}
    </nav>
  );
}
