"use client";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import Link from "next/link";
import { useForm } from "react-hook-form";

function SignUp() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        Register
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField
          label="full name"
          name="name"
          register={register}
          isRequired
        />
        <RHFTextField
          label="email"
          name="email"
          register={register}
          isRequired
        />
        <RHFTextField
          label="password"
          name="password"
          register={register}
          type="password"
          dir="ltr"
          isRequired
        />
        <div>
          <Button type="submit" variant="primary" className="w-full">
            Sign Up{" "}
          </Button>
        </div>
      </form>
      <Link href="/signin" className="text-secondary-500 mt-6 text-center">
        login?{" "}
      </Link>
    </div>
  );
}

export default SignUp;
