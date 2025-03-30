"use client";
import { useState } from "react";

export default function SegmentGroup() {
  const [activeIndex, setActiveIndex] = useState(0);
  const segments = ["予約履歴", "予約待ち", "お問い合わせ"];

  return (
    <div className="inline-flex rounded-xl bg-foreground p-1 overflow-hidden">
      {segments.map((label, index) => (
        <button
          key={label}
          onClick={() => setActiveIndex(index)}
          className={`w-[112px] px-2 py-2 text-sm cursor-pointer transition-all duration-300 ease-in-out ${
            index === activeIndex
              ? "bg-white text-black shadow-md rounded-xl transform"
              : "bg-transparent text-gray-600"
          }`}
        >
          {index === activeIndex ? (
            <span className="transform scale-[1.0526] block font-bold">
              {label}
            </span>
          ) : (
            <span>{label}</span>
          )}
        </button>
      ))}
    </div>
  );
}
