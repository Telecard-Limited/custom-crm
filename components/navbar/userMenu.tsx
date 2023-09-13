"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "@/components/avatar/avatar";
import { useCallback, useState } from "react";
import MenuItem from "./menuItem";
import useRegisterModal from "@/app/hooks/use-registermodal";
import useLoginModal from "@/app/hooks/use-loginModal";

import { signOut } from "next-auth/react";
import { User } from "@prisma/client";
import { SafeUser } from "@/app/types";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}
const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row gap-3 item-center ">
        <div
          className="hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100"
          onClick={() => {}}
        >
          Welcome User
        </div>

        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2  border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-md">
          {currentUser ? (
            <div className="flex flex-col cursor-pointer">
              <MenuItem onClick={() => {}} label="Profile" />
              <MenuItem onClick={() => {}} label="Settings" />
              <MenuItem onClick={() => {}} label="Notification" />
              <MenuItem onClick={() => {}} label="WorkSpaces" />
              <hr />
              <MenuItem onClick={() => signOut()} label="Logout" />
            </div>
          ) : (
            <>
              <div className="flex flex-col cursor-pointer">
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Signup" />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
