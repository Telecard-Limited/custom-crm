"use client";
import { ThemeToggle } from "@/components/themeToggle";
import { MainNav } from "@/components/header-nav-links";
const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-3 mx-6 border-b md:gap-0">
      <MainNav className="mx-6 ml-5" />
      <div className="flex items-center ml-auto space-x-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
