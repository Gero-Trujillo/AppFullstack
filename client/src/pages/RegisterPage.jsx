import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    singup(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 rounded-md max-w-md w-full p-10">
        <h1 className="text-2xl font-bold my-2">Register</h1>
        {registerErrors.map((error, i) => (
          <div key={i} className="bg-red-500 p-2 text-white">
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            className="bg-zinc-600 text-white w-full rounded-md px-4 py-2 my-2"
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-500">Username is required</p>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            className="bg-zinc-600 text-white w-full rounded-md px-4 py-2 my-2"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="bg-zinc-600 text-white w-full rounded-md px-4 py-2 my-2"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <button
            type="submit"
            className="bg-zinc-600 px-4 py-2 rounded-md my-2"
          >
            Register
          </button>
          <p className="flex gap-x-2 justify-between">
            Do you already have an account?{" "}
            <Link to="/login" className="text-sky-500">
              Sing in
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
