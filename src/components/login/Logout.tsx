import { useEffect } from "react";
import { useAuthContext } from "../../context"
import { Button, H2G, Links, WrappSection } from "../style";



export const Logout = () => {
  const { logout } = useAuthContext();
  useEffect(() => logout());
  return (
    <WrappSection>
      <H2G>Goodbye</H2G>
      <h2>We hope to have you back soon</h2>
      <Button>
        <Links to="/">Close session</Links>
      </Button>
    </WrappSection>
  )

}
