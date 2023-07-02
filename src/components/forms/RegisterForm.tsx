import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm(
		{
			defaultValues: {
				firstname: "",
				secondName: "",
				address: "",
        codepost: "",
        phone: ""
			}
		}
	);


	const onSubmit = (data:any) => {
		console.log(data);
		reset();
	}

	const firstNameWatch = watch("firstname");


	return (
		<>
			<h1>Login</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register("firstname", {
						required: true, minLength: {
							value: 3,
							message: "Minimun length is ",
						},
						maxLength: {
							value: 10,
							message: "Maximum length is 10"
						}
					})}
          placeholder="First name"
				/>
				
				{errors.firstname && <p>{errors?.firstname?.message}</p>}

        <input
					{...register("secondName", {
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
				
				{errors.secondName && <p>{errors?.secondName?.message}</p>}

        <input
					{...register("codepost", {
						required: true, minLength: {
							value: 3,
							message: "Minimun length is 3",
						},
						maxLength: {
							value: 30,
							message: "Maximum length is 30"
						}
					})}
          placeholder="Code post"
				/>
				
				{errors.codepost && <p>{errors?.codepost?.message}</p>}

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
					{...register("phone", {
	
						maxLength: {
							value: 9,
							message: "This number its not valid"
						}
					})}
          placeholder="Phone"
				/>
				
				{errors.phone && <p>{errors?.phone?.message}</p>}


				<button type="submit" disabled={false}
				>
					boton
				</button>
				<Link to={"/thanks"}>
					thanks
					
				</Link>
			</form>
		</>
	);
}