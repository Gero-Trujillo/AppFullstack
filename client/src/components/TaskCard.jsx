import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  return (
    <div className="bg-zinc-800 max-w-xs w-full p-10 rounded-md flex flex-col gap-2 my-3">
      <div className="flex gap-2">
        <Link
          className="bg-sky-700 px-2 py-1 rounded-md"
          to={`/tasks/${task._id}`}
        >
          Edit
        </Link>
        <button
          className="bg-red-700 px-2 py-1 rounded-md"
          onClick={() => {
            deleteTask(task._id);
          }}
        >
          Delete
        </button>
      </div>
      <h1 className="text-2xl font-bold">{task.title}</h1>
      <p className="text-slate-300">{task.description}</p>
      <p>{new Date(task.date).toLocaleDateString()}</p>
    </div>
  );
}

export default TaskCard;
