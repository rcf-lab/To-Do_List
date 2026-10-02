export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="bg-slate-700 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
      <div className="flex-1 min-w-0">
        <p
          className={`break-words ${
            task.done ? "line-through text-slate-400" : "text-white"
          }`}
        >
          {task.text}
        </p>
        <span
          className={`inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
            task.done
              ? "bg-emerald-500/20 text-emerald-300"
              : "bg-amber-500/20 text-amber-300"
          }`}
        >
          {task.done ? "Done" : "Not Done"}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task.id)}
          className={`rounded-lg px-3 py-2 text-sm font-medium active:scale-95 transition ${
            task.done
              ? "bg-amber-500 hover:bg-amber-400"
              : "bg-emerald-500 hover:bg-emerald-400"
          }`}
        >
          {task.done ? "Mark Not Done" : "Mark Done"}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="rounded-lg bg-red-500 px-3 py-2 text-sm font-medium hover:bg-red-400 active:scale-95 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
}