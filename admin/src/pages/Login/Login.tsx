import { useForm, SubmitHandler } from "react-hook-form";
import { UserFormType, UserType } from "../../types";
import { loginUser } from "../../api/user/loginUser";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormType>();

  const onSubmit: SubmitHandler<UserFormType> = async (data) => {
    const response: UserType = await loginUser(data);
    console.log(response);
  };

  return (
    <section className="px-2 gap-5 w-full flex items-center flex-col justify-center min-h-screen max-w-sm mx-auto">
      <h1 className="font-bold text-3xl text-center">Login to your account</h1>
      <form
        className="flex flex-col gap-2 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="email"
          placeholder="Email"
          className="border border-black p-1 pl-2"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="text-xs text-red-600">This field is required</p>
        )}
        <input
          type="password"
          placeholder="Password"
          className="border border-black p-1 pl-2"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p className="text-xs text-red-600">This field is required</p>
        )}
        <button className="btn-primary">Submit</button>
      </form>
    </section>
  );
};

export default Login;
