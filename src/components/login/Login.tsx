import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context";
import { PRIVATE } from "../../config/routes/path";
import { useForm } from "react-hook-form";
import { FormInputs } from "../../types";
import { Button, H2, InputForm, Wrapp, WrappSection } from "../style";

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>({
    defaultValues: {
      username: "",
      email: "",
      repeatemail: "",
    },
  });

  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [error, setError] = useState("");

  const onSubmit = (data: FormInputs) => {
    if (data.email !== data.repeatemail) {
      setError("Emails do not match");
      return;
    }

    login();
    navigate(PRIVATE);
  };

  return (
    <WrappSection>
      <H2>Login</H2>
      <Wrapp $login>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputForm
            {...register("username", {
              required: true,
              minLength: {
                value: 3,
                message: "Minimum length is 3",
              },
              maxLength: {
                value: 25,
                message: "Maximum length is 25",
              },
            })}
            placeholder="User name"
          />
          {errors.username && <p>{errors.username.message}</p>}
          <InputForm
            {...register("email", {
              required: true,
              minLength: {
                value: 3,
                message: "Minimum length is 3",
              },
              pattern: {
                value: /@/,
                message: "Email must contain @ symbol",
              },
            })}
            placeholder="Email"
          />
          {errors.email && <p>{errors.email.message}</p>}

          <InputForm
            {...register("repeatemail", {
              required: true,
              minLength: {
                value: 3,
                message: "Minimum length is 3",
              },
              pattern: {
                value: /@/,
                message: "Repeat email must contain @ symbol",
              },
            })}
            placeholder="Repeat email"
          />
          {errors.repeatemail && <p>{errors.repeatemail.message}</p>}
          {error && <p>{error}</p>}
          <Button $loginform type="submit" disabled={false}>
            Go in!
          </Button>
        </form>
      </Wrapp>
    </WrappSection>
  );
};
