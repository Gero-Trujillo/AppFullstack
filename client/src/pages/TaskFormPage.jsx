import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data);
    }
    navigate("/tasks");
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <form
        onSubmit={onSubmit}
        className="flex flex-col bg-zinc-800 p-10 gap-2 w-full max-w-md rounded-md"
      >
        <h1 className="text-2xl font-bold">New Task</h1>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md"
          autoFocus
        />
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description")}
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md"
        ></textarea>
        <button className="bg-sky-700 px-4 py-2 rounded-md">Save</button>
      </form>
    </div>
  );
}

export default TaskFormPage;
