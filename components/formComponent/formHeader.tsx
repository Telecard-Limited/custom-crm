"use client";
import Appbar from "./FormOptions";
const FormHeader = (children: React.ReactNode) => {
  return (
    <>
      <Appbar onMenuButtonClick={() => children} />
    </>
  );
};

export default FormHeader;
