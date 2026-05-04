"use client";

export default function CategorySidebar({ categories, selectedCategory, onSelect }) {
  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-slate-900">Filter by category</h2>
      <div className="flex flex-col gap-3">
        <button
          type="button"
          className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${!selectedCategory ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
          onClick={() => onSelect("")}
        >
          All categories
        </button>
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${selectedCategory === category ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </aside>
  );
}
