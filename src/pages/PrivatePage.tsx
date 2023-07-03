import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context";
import { PRIVATE } from "../config/routes/path";

export const PrivatePage = () => {
  const { isAuthentificated } = useAuthContext();

    if(isAuthentificated) {
        return <Navigate to={PRIVATE}/>
    }

  return (
    <Outlet/>
  )
}
