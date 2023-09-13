"use client";

import { Children } from "react";

interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[10520px] mx-auto  xl:pl-20  md:px-10 sm:px-2 px-4 ">
      {children}
    </div>
  );
};

export default Container;