"use client";

interface Tab {
  label: string;
  from: string;
  to: string;
}

interface PopularTabsProps {
  tabs: Tab[];
  active: number;
  onChange: (i: number) => void;
}

export default function PopularTabs({
  tabs,
  active,
  onChange,
}: PopularTabsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {tabs.map((t, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          className={`px-4 py-2 rounded-full text-sm font-semibold border
          ${
            i === active
              ? "bg-primary text-primary-dark border-primary"
              : "bg-white hover:bg-gray-50 border-gray-200 text-primary-dark"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
