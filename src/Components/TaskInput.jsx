import { useState } from "react";

export default function TaskInput({ onAdd }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) {
      setError("Please enter a task.");
      return;
    }
    onAdd(trimmed);
    setText("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setError("");
          }}
          placeholder="Add a new task..."
          className="flex-1 min-w-0 rounded-lg bg-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="rounded-lg bg-indigo-500 px-4 py-3 font-semibold hover:bg-indigo-400 active:scale-95 transition"
        >
          Add Task
        </button>
      </div>
      {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
    </form>
  );
}