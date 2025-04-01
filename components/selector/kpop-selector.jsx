"use client";

import { useState } from "react";

const GROUPS = [
  "Seventeen",
  "BTS",
  "Twice",
  "aespa",
  "TXT",
  "Enhypen",
  "NCT",
  "Stray Kids",
];

export default function KpopSelector() {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex flex-col pt-5 gap-3">
      <h2 className="text-[20px] font-semibold leading-[30px] tracking-[-0.5px]">
        K-POPグループ
      </h2>

      <div className="flex flex-wrap gap-2">
        {GROUPS.map((group) => {
          const isSelected = selected === group;

          return (
            <button
              key={group}
              onClick={() => setSelected(group)}
              className={`
                px-4 py-2 rounded-full border 
                text-sm font-medium transition-all duration-200
                ${
                  isSelected
                    ? "bg-purple-100 text-purple-600 border-transparent"
                    : "bg-white text-black border-gray-300 hover:bg-purple-100 hover:text-purple-600 hover:border-transparent"
                }
              `}
            >
              {group}
            </button>
          );
        })}
      </div>
    </div>
  );
}
