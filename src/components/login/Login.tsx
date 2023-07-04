import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../context"
import { LOGOUT, PRIVATE } from "../../config/routes/path";
import { useForm } from "react-hook-form";
import { FormInputs } from "../../types";

export const Login = () => {
  const {
    register,
    formState: { errors },
    getValues,
    trigger
  } = useForm<FormInputs>({
    defaultValues: {
      username: "",
      email: "",
      repeatemail: "",
    }
  });

  const navigate = useNavigate();
  const { login } = useAuthContext();
  const { email, repeatemail } = getValues();


  const onSubmit = (event: any) => {
    event.preventDefault();
    if (email === repeatemail) {
      login();
      navigate(PRIVATE)
    }
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await trigger();
    onSubmit(event); 
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>

        <input
          {...register("username", {

            required: true,
            minLength: {
              value: 3,
              message: "Minimum length is 3"
            },
            maxLength: {
              value: 25,
              message: "Maximum length is 25"
            }
          })}
          placeholder="User name"
        />
        {errors.username && <p>{errors.username.message}</p>}
        <input
          {...register("email", {
            required: true,
            minLength: {
              value: 3,
              message: "Minimum length is 3"
            },
            pattern: {
              value: /@/,
              message: "Email must contain @ symbol"
            }
          })}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          {...register("repeatemail", {
            required: true,
            minLength: {
              value: 3,
              message: "Minimum length is 3"
            },
            pattern: {
              value: /@/,
              message: "Repeat email must contain @ symbol"
            }
          })}
          placeholder="Repeat email"
        />
        {errors.repeatemail && <p>{errors.repeatemail.message}</p>}
        <button type="submit" disabled={false}>
          Submit
        </button>
      </form>
      <Link to={LOGOUT}>Logout</Link>
    </>
  );
};
