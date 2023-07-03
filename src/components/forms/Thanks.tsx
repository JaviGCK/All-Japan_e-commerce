import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
/**
 * 
 * show up a completed purchase and redirected to HomePage to start again shopping
 */
export const Thanks = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => {
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <section>
      <h3>Thanks for your purchase</h3>
      <p>Your purchase has been successfully completed</p>
    </section>
  );
};



