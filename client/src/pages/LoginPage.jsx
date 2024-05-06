import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    singin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 rounded-md max-w-md w-full p-10">
        <h1 className="text-2xl font-bold my-2">Login</h1>

        {loginErrors.map((error, i) => (
          <div key={i} className="bg-red-500 p-2 text-white my-2">
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
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
            Login
          </button>
          <p className="flex gap-x-2 justify-between">
            Don't have an account?{" "}
            <Link to="/register" className="text-sky-500">
              Sing up
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
