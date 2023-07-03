import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Private = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => {
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <>
    <h1>Private Vip Route</h1>
    <Outlet/>
    </>
  )
}
