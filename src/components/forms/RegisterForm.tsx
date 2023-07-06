import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button, InputForm, Wrapp, WrappSection } from "../style";
/**
 * 
 * @returns form to get date to buy, this is a step after go to buy from cart
 */
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

  {formSubmitted && (
    <Link to="thanks">
      Thanks
    </Link>
  )}

  return (
    <WrappSection $form>
      
      <Wrapp $form>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <InputForm
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

        <InputForm
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

				<InputForm
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

				<InputForm
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


				<InputForm
					{...register("phone", {

						maxLength: {
							value: 9,
							message: "This number its not valid"
						}
					})}
					placeholder="Phone"
				/>

				{errors.phone && <p>{errors?.phone?.message}</p>}

        <Button $form type="submit" disabled={false}>
          Continue
        </Button>
      </form>
      
      </Wrapp>
    </WrappSection>
  );
}






