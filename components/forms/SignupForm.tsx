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
import { Checkbox } from "@/components/ui/checkbox";
import { User, Company } from "@prisma/client";
import * as z from "zod";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import EmailVerificationModal from "@/app/components/modals/email-verificationModal";
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
      <div className="bg-gradient-to-t from-green-400 to-white">
        <div className="px-4 py-6 text-center text-white sm:py-12 bg-gradient-to-t from-green-400 to-white sm:px-8 fade-in">
          <h1 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-5xl drop-shadow-lg">
            {" "}
            Welcome! Create Your Account to access your dashboard
          </h1>
        </div>
        <div className="container mt-4 bg-white rounded-lg p-7 drop-shadow-lg">
          <Form {...userform} {...CompanyformSchema}>
            <form onSubmit={userform.handleSubmit(onSubmit)} className="mb-6">
              <div className="items-start justify-center ml-4 text-start">
                <FormLabel className="text-primary "> Name</FormLabel>
                <FormField
                  control={userform.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="name" {...field} />
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
                        <Input placeholder="email" {...field} />
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
                        <Input placeholder="Select your country" {...field} />
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
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-row items-center mt-4 space-x-4 gap-x-4">
                  <Checkbox
                    id="terms"
                    checked={individualForm}
                    onChange={(e: any) => {
                      setIndividualForm(e.target.checked);
                      setCompany(!e.target.checked);
                    }}
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none "
                  >
                    Individual
                  </label>
                  <Checkbox
                    id="terms"
                    checked={individualForm}
                    onChange={(e: any) => {
                      setIndividualForm(!e.target.checked);
                      setCompany(e.target.checked);
                    }}
                    className="cursor-pointer"
                  />

                  <label
                    htmlFor="Company"
                    className="text-sm font-medium leading-none "
                  >
                    Company
                  </label>
                </div>
              </div>

              <Button type="submit" size={"lg"} className="w-full mt-4">
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
