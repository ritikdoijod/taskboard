import LoginForm from "@/components/forms/login";
import { ModeToggle } from "@/components/mode-toggle";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ModeToggle className="fixed top-4 right-4" />
      <LoginForm />
    </div>
  );
};

export default Login;
