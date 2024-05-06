import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-800 flex justify-between py-5 px-10 rounded-lg items-center">
      <Link to={"/"}>
        <h1 className="text-2xl font-bold">TaskManager</h1>
      </Link>
      <ul className="flex gap-x-2 items-center">
        {isAuthenticated ? (
          <>
            <li className="text-sky-500">Welcome {user.username}</li>
            <li className="bg-sky-700 px-4 py-1 rounded-md">
              <Link to={"/tasks"}>View Tasks</Link>
            </li>
            <li className="bg-sky-700 px-4 py-1 rounded-md">
              <Link to={"/add-task"}>Add Task</Link>
            </li>
            <li className="text-red-500">
              <Link
                to={"/"}
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="bg-sky-700 px-4 py-1 rounded-md">
              <Link to={"/login"}>Login</Link>
            </li>
            <li className="bg-sky-700 px-4 py-1 rounded-md">
              <Link to={"/register"}>Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
