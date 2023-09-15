"use client";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { User, Company } from "@prisma/client";
import * as z from "zod";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import MenuItem from "../MenuItems";

const IndividualformSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "name is required" })
      .max(35, { message: "name must be between 3-35 characters" }),
    email: z.string().email(),
    phone: z.string().transform((data) => Number(data)),
    password: z
      .string()
      .min(4, { message: "password is required" })
      .max(8, { message: "password must be between 4-8 characters" }),
    confirmPassword: z
      .string()
      .min(4, { message: "password is required" })
      .max(8, { message: "password must be between 4-8 characters" }),
    country: z.string(),
    filename: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
      });
    }
  });
const CompanyformSchema = z.object({
  companyname: z
    .string()
    .min(3, { message: "company name is required" })
    .max(35, { message: "company name must be between 3-35 characters" }),
  companyemail: z.string().email(),
  description: z.string(),
});

const SignupForm = () => {
  const router = useRouter();
  const [selected, setSelected] = useState("");
  const [companyForm, setCompany] = useState(false);
  const [individualForm, setIndividualForm] = useState(false);
  const [emailVerificationModal, setEmailVerificationModal] = useState(false);
  const companyform = useForm<z.infer<typeof CompanyformSchema>>({
    resolver: zodResolver(CompanyformSchema),
    defaultValues: {
      companyname: "",
      companyemail: "",
      description: "",
    },
  });
  const userform = useForm<z.infer<typeof IndividualformSchema>>({
    resolver: zodResolver(IndividualformSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      country: "",
    },
  });
  function onSubmit(values: z.infer<typeof IndividualformSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div className="align-middle bg-blue-950 drop-shadow-sm">
        <MenuItem label="Login" onClick={() => router?.push("/signin")} />
      </div>
      <div className="flex items-center justify-center ">
        <div className="container w-5/12 mt-10 align-middle bg-[#FAFAFA]  rounded-[20px] px-7  drop-shadow-md">
          <h1 className="p-4 text-lg font-semibold text-center text-blue-950 ">
            {" "}
            Register on Beautix CMS{" "}
          </h1>

          <Form {...userform} {...CompanyformSchema}>
            <form
              onSubmit={userform.handleSubmit(onSubmit)}
              className="px-4 py-4 mb-6 w-13 /12"
            >
              <div className="items-start justify-center ml-4 text-start">
                <FormLabel className="text-primary "> Name</FormLabel>
                <FormField
                  control={userform.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="name"
                          {...field}
                          className=" bg-[#FAFAFA] border-b[1px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormLabel className="text-primary "> Email</FormLabel>
                <FormField
                  control={userform.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="email"
                          {...field}
                          className=" bg-[#FAFAFA] border-b[1px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormLabel className="text-primary "> Country</FormLabel>
                <FormField
                  control={userform.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Select your country"
                          {...field}
                          className=" bg-[#FAFAFA] border-b[1px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormLabel className="text-primary ">Password</FormLabel>
                <FormField
                  control={userform.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="password"
                          {...field}
                          type="password"
                          className=" bg-[#FAFAFA] border-b[1px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormLabel className="text-primary ">
                  Confirm Password
                </FormLabel>
                <FormField
                  control={userform.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="confirm password"
                          {...field}
                          type=" password"
                          className=" bg-[#FAFAFA] border-b[1px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormLabel className="text-primary "> Phone</FormLabel>
                <FormField
                  control={userform.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="phone number"
                          {...field}
                          type="number"
                          className=" bg-[#FAFAFA] border-b[1px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                size={"lg"}
                className="w-full mt-4 font-semibold text-white bg-blue-950 rounded-[20px] hover:bg-blue-950 hover:text-white"
              >
                Create Your Account
              </Button>
              <div className="flex-row text-center text-muted-foreground">
                Already have an account?{" "}
                <Button
                  size={"sm"}
                  variant={"link"}
                  onClick={() => {
                    router.push("/signin");
                  }}
                  className="mt-8 text-blue-950"
                >
                  Login
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
