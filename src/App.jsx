import { useState } from "react";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";
import UserGuide from "./Components/UserGuide";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (text) => {
    setTasks((prev) => [...prev, { id: Date.now(), text, done: false }]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const clearAll = () => setTasks([]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.done;
    if (filter === "notdone") return !task.done;
    return true;
  });

  const doneCount = tasks.filter((t) => t.done).length;

  const filters = [
    { key: "all", label: "All" },
    { key: "notdone", label: "Not Done" },
    { key: "done", label: "Done" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-slate-900 text-white px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">To-Do List</h1>
      </header>

      <main className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 items-center md:items-start justify-center">
        <section
          aria-label="To-do list"
          className="bg-slate-800 rounded-2xl p-5 shadow-2xl w-full max-w-md"
        >
          <TaskInput onAdd={addTask} />

          <div className="flex gap-2 mb-4">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`flex-1 rounded-lg py-2 text-sm font-medium transition ${
                  filter === f.key
                    ? "bg-indigo-500 text-white"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />

          <div className="flex items-center justify-between mt-4 text-sm text-slate-300">
            <span>
              {doneCount} of {tasks.length} done
            </span>
            {tasks.length > 0 && (
              <button
                onClick={clearAll}
                className="text-red-400 hover:text-red-300 transition"
              >
                Clear all
              </button>
            )}
          </div>
        </section>

        <UserGuide />
      </main>
    </div>
  );
}
