export default function UserGuide() {
  return (
    <section
      aria-label="User guide"
      className="bg-slate-800 rounded-2xl p-6 shadow-2xl w-full max-w-md"
    >
      <h2 className="text-2xl font-bold mb-4">User Guide</h2>

      <h3 className="text-lg font-semibold text-indigo-300 mb-2">
        How to add a task
      </h3>
      <ol className="list-decimal list-inside space-y-1 text-slate-200 mb-5">
        <li>Type your task in the text box.</li>
        <li>Click the Add Task button (or press Enter).</li>
        <li>Your task appears in the list as Not Done.</li>
      </ol>

      <h3 className="text-lg font-semibold text-indigo-300 mb-2">
        How to mark a task as Done or Not Done
      </h3>
      <ol className="list-decimal list-inside space-y-1 text-slate-200 mb-5">
        <li>Find the task in the list.</li>
        <li>Click Mark Done to complete it. The task gets a strikethrough and a Done label.</li>
        <li>Click Mark Not Done to change it back.</li>
      </ol>

      <h3 className="text-lg font-semibold text-indigo-300 mb-2">
        How to delete a task
      </h3>
      <ol className="list-decimal list-inside space-y-1 text-slate-200 mb-5">
        <li>Find the task you want to remove.</li>
        <li>Click its Delete button. The task is removed right away.</li>
        <li>Use Clear all to remove every task at once.</li>
      </ol>

      <h3 className="text-lg font-semibold text-indigo-300 mb-2">Filters</h3>
      <p className="text-slate-200">
        Use the All, Not Done, and Done tabs above the list to show only the
        tasks you want to see.
      </p>
    </section>
  );
}