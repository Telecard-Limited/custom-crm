"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-[20vh] mt-6">
      <h1 className="text-4xl font-extrabold text-white ">Beautix CRM</h1>
      <Button
        label="Get Started"
        outline
        onClick={() => router?.push("/registeration")}
        className="mt-5"
      />
    </div>
  );
}
