import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    username: z
      .string()
      .trim()
      .min(3, { message: "username must be at least 3 characters long" }),
    password: z
      .string()
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
        message:
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character",
      }),
    confirmPassword: z.string(),
    email: z.string().email({ message: "Invalid email address" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password and confirm password do not match",
  });

type FormFields = z.infer<typeof schema>;

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const checkUserNameAvailability = async (username: string) => {
    try {
      const result = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/checkUserNameAvailability?username=${username}`,
      );

      return result.ok;
    } catch (errors) {}
  };
  const signup = async (data: any) => {
    const result = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    console.log(await result.json());
  };
  return (
    <div className="px-4 py-3 font-['Poppins'] bg-soft rounded-lg overflow-hidden flex flex-col justify-center items-center shadow-md">
      <h1 className="text-3xl dark:text-cyan-500 font-['Protest_Guerrilla'] text-center">
        Sign Up
      </h1>
      <p className="mt-3 text-[#6B7280] text-sm font-['Poppins']">
        Let's get started with taskboard
      </p>
      <form
        onSubmit={handleSubmit(signup)}
        className="mt-4 w-[300px] flex flex-col gap-4"
      >
        <Input
          type="text"
          placeholder="Username"
          {...register("username")}
          autoComplete="username"
          onChange={async (e) => {
            const userNameAvailable = await checkUserNameAvailability(
              e.target.value,
            );
            console.log(userNameAvailable);
          }}
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}
        <Input
          type="email"
          placeholder="Email"
          {...register("email")}
          autoComplete="email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}{" "}
        <Input
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword.message}</p>
        )}{" "}
        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="font-semibold font-['Poppins'] disabled:bg-cyan-500/10"
        >
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
