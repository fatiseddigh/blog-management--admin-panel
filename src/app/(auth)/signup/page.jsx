"use client";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupApi } from "@/services/authService";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

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
  // const router = useRouter();
  const onSubmit = async (values) => {
    try {
      const { user, message } = await signupApi(values);
      console.log(user);
      toast.success(message);
      // router.push("/profile");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
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
