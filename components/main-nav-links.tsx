"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/`,
      label: "About Us",
      active: pathname === `/`,
    },
    {
      href: `/overview`,
      label: "OverView",
      active: pathname === `/overview`,
    },
    {
      href: `/${params.featureId}/features`,
      label: "Features",
      active: pathname === `/${params.featureId}/feature`,
      icon: <ChevronDown size={20} />,
    },
    {
      href: `/${params.solutionid}/solutions`,
      label: "Sizes",
      active: pathname === `/${params.solutionid}/solutions`,
      icon: <ChevronDown size={20} />,
    },
    {
      href: `/prices`,
      label: "Prices",
      active: pathname === `/prices`,
    },
    {
      href: `/registration`,
      label: "Create your Account",
      active: pathname === `/registration`,
    },
    {
      href: `/signin`,
      label: "Login",
      active: pathname === `/signin`,
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
            "text-sm font-medium transition-colors hover:text-primary flex-row flex",
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
