"use client";
import { signIn } from "next-auth/react";
import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useLoginModal from "@/app/hooks/use-loginModal";
import useRegisterModal from "@/app/hooks/use-registermodal";
import Modal from "./modal";
import Heading from "../heading/heading";
import Input from "../inputs/input";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
const LoginModal = () => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setisLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setisLoading(false);
      if (callback?.ok) {
        toast.success("Logged in successfuly");
        router.refresh();
        router.push("/dashboard");
        loginModal.onClose;
      }
      if (callback?.error) {
        toast.error("Problem while logging in");
        console.log(callback?.error);
        router.replace("/about-us");
      }
    });
  };
  const bodyContent = (
    <div className="flex flex-col gap-4 ">
      <Heading title="Welcome Back! " subtitle="Login Your Account" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <div className="mt-4 font-light text-center text-neutral-500">
        <p>
          New User?
          <span
            onClick={onToggle}
            className="cursor-pointer text-neutral-800 hover:underline"
          >
            {" "}
            Register! Here.
          </span>
        </p>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    ></Modal>
  );
};

export default LoginModal;
