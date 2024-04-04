import { Button } from "@/components/ui/button";
import { logout } from "@/state";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        onClick={() => {
          dispatch(logout());
          window.location.href = "/login";
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Home;
