import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export function RegisterForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      repeatemail: "",
      firstname: "",
      secondname: "",
      address: "",
      codepost: "",
      phone: ""
  }});

  const navigate = useNavigate();

  const onSubmit = () => {
    reset();
    setFormSubmitted(true);
    navigate("thanks");
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <input
          {...register("firstname", {
            required: true,
            minLength: {
              value: 3,
              message: "Minimum length is 3"
            },
            maxLength: {
              value: 10,
              message: "Maximum length is 10"
            }
          })}
          placeholder="First name"
        />
        {errors.firstname && <p>{errors.firstname.message}</p>}

        <input
					{...register("secondname", {
						required: true, minLength: {
							value: 3,
							message: "Minimun length is 3",
						},
						maxLength: {
							value: 10,
							message: "Maximum length is 10"
						}
					})}
					placeholder="Second name"
				/>

				{errors.secondname && <p>{errors?.secondname?.message}</p>}

				<input
					{...register("address", {
						required: true, minLength: {
							value: 3,
							message: "Minimun length is 3",
						},
						maxLength: {
							value: 30,
							message: "Maximum length is 30"
						}
					})}
					placeholder="Address"
				/>

				{errors.address && <p>{errors?.address?.message}</p>}

				<input
					{...register("codepost", {
						required: true, minLength: {
							value: 5,
							message: "This is not a codepost number"
						},
						maxLength: {
							value: 5,
							message: "This is not a codepost number"
						}
					})}
					placeholder="Code post"
				/>

				{errors.codepost && <p>{errors?.codepost?.message}</p>}


				<input
					{...register("phone", {

						maxLength: {
							value: 9,
							message: "This number its not valid"
						}
					})}
					placeholder="Phone"
				/>

				{errors.phone && <p>{errors?.phone?.message}</p>}

        <button type="submit" disabled={false}>
          Submit
        </button>
      </form>
      {formSubmitted && (
        <Link to="thanks">
          Thanks
        </Link>
      )}
    </>
  );
}






