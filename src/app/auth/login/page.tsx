import Button from "@/components/ui/button";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <h1>Welcome</h1>
      <p>Login to the taskboard application</p>
      <Button>Continue with Microsoft</Button>
    </div>
  );
};

export default Login;
