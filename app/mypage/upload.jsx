"use client";

import { useState, useRef, useEffect } from "react";
import UploadIcons from "../../components/icons/upload-icons";

function Upload() {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  // 텍스트 입력 여부에 따라 아이콘 색상 결정
  const iconColor = text.trim() ? "#9747FF" : "#767676";

  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-full max-w-screen-xl px-10">
        <div className="relative w-full px-5 py-2 bg-white rounded-2xl flex items-center">
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <UploadIcons color={iconColor} />
          </div>
          <textarea
            ref={textareaRef}
            className="w-full min-h-[24px] overflow-hidden pr-10 bg-transparent border-none focus:outline-none text-black placeholder-lightgray text-[14px] font-medium leading-[24px] tracking-[-0.35px] align-middle py-1"
            placeholder="質問内容を書いてね..."
            value={text}
            onChange={handleChange}
            rows={1}
          />
        </div>
      </div>
    </div>
  );
}

export default Upload;
