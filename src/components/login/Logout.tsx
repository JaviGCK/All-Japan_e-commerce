import { useEffect } from "react";
import { useAuthContext } from "../../context"
import { Link } from "react-router-dom";



export const Logout = () => {
  const { logout } = useAuthContext();
  useEffect(() => logout());
  return (
    <>
      <h2>Goodbye</h2>
      <Link to="/">Close session</Link>
    </>
  )

}
