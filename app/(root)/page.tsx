"use client";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[20vh] mt-6">
      <h1 className="text-4xl font-extrabold text-white ">Beautix CMS</h1>
      <Button label="Get Started" outline onClick={() => {}} className="mt-5" />
    </div>
  );
}
