"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { User } from "@prisma/client";
import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const LoginformSchema = z.object({
  email: z.string().email(),
  phone: z.string().transform((data) => Number(data)),
  password: z
    .string()
    .min(4, { message: "password is required" })
    .max(8, { message: "password must be between 4-8 characters" }),
});
function onSubmit(values: z.infer<typeof LoginformSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values);
}
const SignInForm = () => {
  const useLoginForm = useForm<z.infer<typeof LoginformSchema>>({
    resolver: zodResolver(LoginformSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  return (
    <div className="bg-gradient-to-t from-green-400 to-white ">
      <div className="px-4 py-6 text-center text-white sm:py-12 bg-gradient-to-t sm:px-8 fade-in">
        <h1 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-5xl">
          {" "}
          Welcome Back! Login to Your Account to access your dashboard
        </h1>
      </div>
      <div className="container mt-10 bg-white rounded-lg p-7 drop-shadow-lg">
        <Form {...useLoginForm}>
          <form onSubmit={useLoginForm.handleSubmit(onSubmit)}>
            <div className="items-start justify-center ml-4 text-start">
              <FormLabel className="text-primary "> Email</FormLabel>
              <FormField
                control={useLoginForm.control}
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

              <FormLabel className="text-primary ">Password</FormLabel>
              <FormField
                control={useLoginForm.control}
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
            </div>
            <div className="flex-row mt-4 text-lg font-semibold text-muted-foreground text-end">
              <Button
                size={"sm"}
                variant={"link"}
                onClick={() => {
                  router.push("/signin");
                }}
              >
                Forgot Password?
              </Button>
            </div>
            <Button type="submit" size={"lg"} className="w-full mt-4">
              Login
            </Button>
            <div className="flex-row mt-3 text-sm text-center text-muted-foreground">
              New User?{" "}
              <Button
                size={"sm"}
                variant={"link"}
                onClick={() => {
                  router.push("/registration");
                }}
              >
                Register Here!
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignInForm;
