import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { H2W, P, WrappSection } from "../style";

export const Private = () => {
  const navigate = useNavigate();

  useEffect(() => {

    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 4000);

    return () => {
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <WrappSection $welcome>
      <H2W>Welcome!!</H2W>
      <P>We are happy to have you here again, we hope you have a good shopping</P>
      
    </WrappSection>
  )
}
