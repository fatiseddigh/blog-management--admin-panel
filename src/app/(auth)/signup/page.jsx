"use client";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@/context/AuthContext";

const schema = yup
  .object({
    name: yup
      .string()
      .min(5, "Full name is invalid")
      .max(30)
      .required("full name is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const { signin } = useAuth();
  const onSubmit = async (values) => {
    await signin(values);
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
          errors={errors}
        />
        <RHFTextField
          label="email"
          name="email"
          register={register}
          isRequired
          errors={errors}
        />
        <RHFTextField
          label="password"
          name="password"
          register={register}
          type="password"
          isRequired
          errors={errors}
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
