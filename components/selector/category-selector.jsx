"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const categories = [
  { label: "韓国料理", value: "korean", image: "/category/korean.png" },
  { label: "中華料理", value: "chinese", image: "/category/chinese.png" },
  { label: "西洋料理", value: "western", image: "/category/western.png" },
  { label: "軽食", value: "snack", image: "/category/snack.png" },
  { label: "チキン", value: "chicken", image: "/category/chicken.png" },
  { label: "肉料理", value: "meat", image: "/category/meat.png" },
  { label: "海鮮料理", value: "seafood", image: "/category/seafood.png" },
  {
    label: "レストラン",
    value: "restaurant",
    image: "/category/restaurant.png",
  },
  { label: "ケーキ", value: "cake", image: "/category/cake.png" },
  { label: "デザート", value: "dessert", image: "/category/dessert.png" },
];

export default function CategorySelector() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);

  //   const handleClick = (value: string) => {
  //     setSelected(value);
  //     router.push(`/category/${value}`);
  //   };

  return (
    <div className="flex flex-col pt-5 gap-4">
      <h2 className="text-[20px] font-semibold leading-[30px] tracking-[-0.5px]">
        グルメ
      </h2>

      <div className="px-3 grid grid-cols-5 gap-x-4 gap-y-3">
        {categories.map((item) => {
          const isSelected = selected === item.value;
          return (
            <button
              key={item.value}
              //   onClick={() => handleClick(item.value)}
              className="flex flex-col items-center focus:outline-none group"
            >
              <div
                className={`w-12 h-12 rounded-full overflow-hidden border-2 transition
                  ${
                    isSelected
                      ? "border-purple-500 scale-105"
                      : "border-transparent group-hover:border-gray-300"
                  }
                `}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="mt-2 text-[12px] font-medium leading-[140%] tracking-[-0.35px] text-gray-800">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
