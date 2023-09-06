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
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
const IndividualformSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "name is required" })
      .max(35, { message: "name must be between 3-35 characters" }),
    email: z.string().email(),
    phone: z.string().transform((data) => Number(data)),
    password: z.string().max(8),
    confirmPassword: z.string().max(8),
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
const renderCompanyform = () => {
  const form = useForm<z.infer<typeof CompanyformSchema>>({
    resolver: zodResolver(CompanyformSchema),
    defaultValues: {
      companyname: "",
      companyemail: "",
      description: "",
    },
  });
  return <div className="bg-gradient-to-t from-green-400 to-white "></div>;
};
const SignupForm = () => {
  const [companyForm, setCompany] = useState(false);
  const form = useForm<z.infer<typeof IndividualformSchema>>({
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
    <div className="bg-gradient-to-t from-green-400 to-white">
      <div className="px-4 py-6 text-center text-white sm:py-12 fade-in">
        <h1 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-5xl drop-shadow-lg">
          {" "}
          Welcome! Create Your Account to access your dashboard
        </h1>
      </div>
      <div className="p-10 bg-white rounded-sm drop-shadow-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full ">
            <div className="items-start justify-center ml-4 text-start">
              <FormLabel className="text-primary "> Name</FormLabel>
              <FormField
                control={form.control}
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
                control={form.control}
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
                control={form.control}
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
                control={form.control}
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
              <FormLabel className="text-primary ">Confirm Password</FormLabel>
              <FormField
                control={form.control}
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
                control={form.control}
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
                <Checkbox id="terms" disabled />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Individual
                </label>
                <Checkbox id="terms" disabled />

                <label
                  htmlFor="Company"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Company
                </label>
              </div>
            </div>

            <Button type="submit" size={"lg"} className="w-full mt-4">
              Create Your Account
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignupForm;
