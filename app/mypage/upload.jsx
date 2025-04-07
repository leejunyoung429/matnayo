"use client";

import { useState, useRef, useEffect } from "react";
import { useSession } from "next-auth/react";
import { collection, addDoc, serverTimestamp, doc } from "firebase/firestore";
import { db } from "@/functions/index";
import UploadIcons from "../../components/icons/upload-icons";

function Upload() {
  const { data: session } = useSession();
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
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

  const handleKeyDown = (e) => {
    // Enter 키 누르고 Shift 키가 같이 눌리지 않았을 때 메시지 전송
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    if (!text.trim() || !session?.user?.id || isSending) return;

    try {
      setIsSending(true);

      const userId = session.user.id;
      const chatRoomRef = doc(db, "chatRoom", userId);
      const chatsCollectionRef = collection(chatRoomRef, "chats");

      // 채팅 메시지 추가
      await addDoc(chatsCollectionRef, {
        content: text.trim(),
        createdAt: serverTimestamp(),
        writer: "user",
      });

      // 전송 후 입력창 비우기
      setText("");
    } catch (error) {
      console.error("메시지 전송 중 오류 발생:", error);
    } finally {
      setIsSending(false);
    }
  };

  // 텍스트 입력 여부에 따라 아이콘 색상 결정
  const iconColor = text.trim() ? "#9747FF" : "#767676";

  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-full max-w-screen-xl px-10">
        <div className="relative w-full px-5 py-2 bg-white rounded-2xl flex items-center">
          <div
            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
            onClick={handleSendMessage}
          >
            <UploadIcons color={iconColor} />
          </div>
          <textarea
            ref={textareaRef}
            className="w-full min-h-[24px] overflow-hidden pr-10 bg-transparent border-none focus:outline-none text-black placeholder-lightgray text-[14px] font-medium leading-[24px] tracking-[-0.35px] align-middle py-1"
            placeholder="質問内容を書いてね..."
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            rows={1}
            disabled={isSending}
          />
        </div>
      </div>
    </div>
  );
}

export default Upload;
