import TextField from "@/ui/TextField";
import { useForm } from "react-hook-form";

export const metadata = {
  title: "Sign Up",
};

function SignUp() {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <h1>Sing Up</h1>
      <form>
        <TextField
          name="name"
          label="full name"
          // value={}
          // onChange={}
          isRequired
        />
      </form>
    </div>
  );
}

export default SignUp;
