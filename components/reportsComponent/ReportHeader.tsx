"use client";

import Appbar from "@/components/Appbar";

const ReportHeader = (children: React.ReactNode) => {
  return (
    <>
      <Appbar onMenuButtonClick={() => children} />
    </>
  );
};

export default ReportHeader;
