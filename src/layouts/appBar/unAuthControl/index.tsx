import { Button } from "../../../components/common";
import "../styles.scss";
import { useNavigate } from "react-router";

export default function AuthControl() {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickLogin}>
        Login
      </Button>
    </div>
  );
}
