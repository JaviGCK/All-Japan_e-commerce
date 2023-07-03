import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "../../config/routes/path";
import { useAuthContext } from "../../context";

export const Private = () => {

  const { isAuthentificated } = useAuthContext();


    if(isAuthentificated) {
        return <Navigate to={LOGIN}/>
    }

  return (
    <Outlet/>
  )
}
