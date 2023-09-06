"use client";
import { Form } from "@/components/ui/form";
import { User } from "@prisma/client";
import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
const LoginForm = () => {
  return (
    <div className="bg-gradient-to-t from-green-400 to-white">
      <div className="px-4 py-6 text-center text-white sm:py-12 fade-in">
        <h1 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-5xl">
          {" "}
          Welcome Back! Login to Your Account to access your dashboard
        </h1>
      </div>
      <div className=""></div>
    </div>
  );
};

export default LoginForm;
