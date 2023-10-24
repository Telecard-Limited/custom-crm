"use client";
import { useRouter } from "next/navigation";
import MenuItem from "./MenuItems";

const Header = () => {
  const router = useRouter();
  return (
    <div className="container fixed flex flex-row items-end justify-end w-full gap-4 bg-transparent cursor-pointer ">
      <MenuItem label="Pricing" onClick={() => {}} />
      <MenuItem label="About" onClick={() => {}} />
      <MenuItem label="Sign In" onClick={() => router.push("/signin")} />
    </div>
  );
};

export default Header;
