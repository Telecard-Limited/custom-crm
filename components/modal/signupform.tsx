"use client";
import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/use-registermodal";
import Modal from "./modal";
import Heading from "../heading/heading";
import Input from "../inputs/input";

import { toast } from "react-hot-toast";
import useLoginModal from "@/app/hooks/use-loginModal";
const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const onToggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [registerModal, loginModal]);
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phonenumber: "",
      confirmpassword: "",
      country: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setisLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        toast.success(
          "user account created succesfullty. your default role is admin"
        );
        registerModal.onClose();
      })
      .catch((errors) => {
        toast.error("Something went wrong", errors);
      })
      .finally(() => {
        setisLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4 ">
      <Heading title="Welcome ! " subtitle="Create Your Account" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
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
      <Input
        id="confirmpassword"
        label="Confirm Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="country"
        label="Country"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="phonenumber"
        label="Phone Number"
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
          Already have an account?
          <span
            onClick={onToggle}
            className="cursor-pointer text-neutral-800 hover:underline"
          >
            {" "}
            Log in
          </span>
        </p>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Create Your Account"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    ></Modal>
  );
};

export default RegisterModal;
