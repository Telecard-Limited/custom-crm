"use client";
import { Send } from "lucide-react";
const EmailVerificationModal = () => {
  return (
    <div className="container w-3/4 bg-white drop-shadow-lg">
      <div className="items-center justify-center">
        <Send size={72} color="#10b94e" />
        <h1 className="mt-4 font-bold text-center text-primary">
          Email Verification
        </h1>
        <h5 className="mt-4 font-semibold text-center text-foreground-muted">
          Please verify your email. Verification email is sent to you on
          dummy@mailinator.com
        </h5>
      </div>
    </div>
  );
};

export default EmailVerificationModal;
