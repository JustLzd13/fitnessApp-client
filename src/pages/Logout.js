import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";

export default function Logout() {
  const { unsetUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token"); 
    unsetUser(); 
    navigate("/");
    window.location.reload(); // Reload the page after navigating to home
  }, [navigate, unsetUser]);

  return null; 
}
