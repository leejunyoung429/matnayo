"use client";

import { useState } from "react";
import SearchIcon from "./icons/search-icons";

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex px-4 py-2 justify-between items-center bg-[#F7F7FB] rounded-full w-[300px]">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="訪れたい地域や 推しグループを検索！"
        className="flex-grow bg-transparent border-none focus:outline-none text-black font-['Pretendard_JP'] text-[12px] font-semibold leading-[24px] tracking-[-0.3px] placeholder:text-[#767676] placeholder:font-['Pretendard_JP'] placeholder:text-[12px] placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-[-0.3px]"
      />

      <SearchIcon />
    </div>
  );
}

export default SearchBar;
