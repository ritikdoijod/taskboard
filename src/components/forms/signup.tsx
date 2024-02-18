import { useForm } from "react-hook-form";
import Button from "../ui/button";
import Input from "../ui/input";

const SignUpForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="px-4 py-3 bg-white rounded-lg overflow-hidden flex flex-col justify-center items-center">
      <h1 className="text-3xl text-primary font-['Protest_Guerrilla'] text-center">
        Sign Up
      </h1>
      <p className="mt-3 text-[#6B7280]">Let's get started with taskboard</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 w-[300px] flex flex-col gap-4"
      >
        <Input type="text" placeholder="Name" {...register("name")} />
        <Input type="email" placeholder="Email" {...register("email")} />
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <Button type="submit" className="font-['Protest_Guerrilla']">
          Sign Up
        </Button>
      </form>
      <p className="mt-3 text-sm text-[#6B7280]">
        Already have an account?
        <span className="ml-1 font-semibold text-blue-400">Log In</span>
      </p>
    </div>
  );
};

export default SignUpForm;
