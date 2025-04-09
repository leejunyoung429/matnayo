"use client";

import { useEffect, useState, useRef } from "react";
import { useSession } from "next-auth/react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/functions/index";

export default function ChatRoom() {
  const { data: session } = useSession();
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const chatContainerRef = useRef(null);

  // 날짜 포맷 함수 (4월16日 형식)
  const formatDate = (timestamp) => {
    if (!timestamp) return "";

    const date = timestamp.toDate();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}月${day}日`;
  };

  // 시간 포맷 함수 (10:12 PM 형식)
  const formatTime = (timestamp) => {
    if (!timestamp) return "";

    const date = timestamp.toDate();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // 0시는 12시로 표시

    return `${hours}:${minutes} ${ampm}`;
  };

  // 타임스탬프로부터 시간과 분만 추출하여 비교키 생성
  const getTimeKey = (timestamp) => {
    if (!timestamp) return "";

    const date = timestamp.toDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    if (!session?.user?.id) return;

    const userId = session.user.id;

    // 사용자의 chatRoom 문서 확인
    const fetchChatRoom = async () => {
      try {
        setLoading(true);
        const chatRoomRef = doc(db, "chatRoom", userId);
        const chatRoomSnap = await getDoc(chatRoomRef);

        if (!chatRoomSnap.exists()) {
          console.log("사용자의 채팅방이 존재하지 않습니다.");
          setLoading(false);
          return;
        }

        // chats 하위 컬렉션 실시간 리스닝 설정
        const chatsQuery = query(
          collection(db, "chatRoom", userId, "chats"),
          orderBy("createdAt", "asc")
        );

        const unsubscribe = onSnapshot(chatsQuery, (snapshot) => {
          const chatData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setChats(chatData);
          setLoading(false);

          // 스크롤을 항상 최하단으로 이동
          setTimeout(() => {
            if (chatContainerRef.current) {
              chatContainerRef.current.scrollTop =
                chatContainerRef.current.scrollHeight;
            }
          }, 100);
        });

        // 컴포넌트 언마운트 시 리스너 해제
        return () => unsubscribe();
      } catch (error) {
        console.error("채팅 데이터 로딩 중 오류 발생:", error);
        setLoading(false);
      }
    };

    fetchChatRoom();
  }, [session]);

  // 채팅 메시지 그룹화 (날짜별)
  const groupedChats = chats.reduce((groups, chat) => {
    if (!chat.createdAt) return groups;

    const dateKey = formatDate(chat.createdAt);
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(chat);
    return groups;
  }, {});

  // 시간 표시 여부 결정 함수 (같은 시간대의 마지막 메시지만 true 반환)
  const shouldShowTime = (chat, index, dateChats) => {
    // 마지막 메시지는 항상 시간 표시
    if (index === dateChats.length - 1) return true;

    // 현재 메시지와 다음 메시지의 시간이 다르면 현재 메시지에 시간 표시
    const currentTimeKey = getTimeKey(chat.createdAt);
    const nextTimeKey = getTimeKey(dateChats[index + 1].createdAt);

    // 작성자가 다르면 시간 표시
    const currentWriter = chat.writer;
    const nextWriter = dateChats[index + 1].writer;

    return currentTimeKey !== nextTimeKey || currentWriter !== nextWriter;
  };

  // 메시지 사이 간격 클래스 결정 함수
  const getMessageSpacingClass = (chat, index, dateChats) => {
    if (index === dateChats.length - 1) return "";

    const isSameTimeAndWriter = !shouldShowTime(chat, index, dateChats);
    return isSameTimeAndWriter ? "mb-2" : "";
  };

  return (
    <div
      ref={chatContainerRef}
      className="w-full h-full flex flex-col px-5 overflow-y-auto"
    >
      {loading ? (
        <p className="text-center py-4">채팅 로딩 중...</p>
      ) : chats.length === 0 ? (
        <p className="text-center py-4">대화 내역이 없습니다.</p>
      ) : (
        Object.entries(groupedChats).map(([date, dateChats]) => (
          <div key={date}>
            <p className="chat-day-text">{date}</p>

            {dateChats.map((chat, index) => (
              <div
                key={chat.id}
                className={getMessageSpacingClass(chat, index, dateChats)}
              >
                {chat.writer === "admin" ? (
                  <div className="chat-otherchat-container">
                    <div className="chat-otherchat-box">
                      <p className="chat-otherchat-text">{chat.content}</p>
                    </div>
                    {shouldShowTime(chat, index, dateChats) && (
                      <p className="chat-hour-text">
                        {formatTime(chat.createdAt)}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="chat-mychat-container">
                    <div className="chat-mychat-box">
                      <p className="chat-mychat-text">{chat.content}</p>
                    </div>
                    {shouldShowTime(chat, index, dateChats) && (
                      <p className="chat-hour-text">
                        {formatTime(chat.createdAt)}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}
