import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { login } from "@/state";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardTitle } from "../ui/card";

const schema = z.object({
  username: z
    .string()
    .trim()
    .min(3, { message: "username must be at least 3 characters long" }),
  password: z
    .string()
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
      message:
        "Password must be at least 8 characters long, contain at least one letter, one letter, one number and one special character uppercase lowercase",
    }),
});

type FormFields = z.infer<typeof schema>;

const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormFields>({
    defaultValues: {
      username: "test2",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const result = await fetch(`${import.meta.env.VITE_SERVER_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (result.ok) {
        const { token, user } = await result.json();
        dispatch(login({ token, user }));
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="font-[poppins]">
      <CardTitle className="text-center font-normal mt-8">Welcome</CardTitle>
      <CardContent className="mt-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <Input
            type="text"
            placeholder="Username"
            {...register("username")}
            autoComplete="username"
            className="font-sm"
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}{" "}
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
