"use client";

export default function ChatRoom() {
  return (
    <div className="w-full h-full flex flex-col px-5 ">
      <p className="chat-day-text">4月16日</p>

      <div className="chat-mychat-container">
        <div className="chat-mychat-box">
          <p className="chat-mychat-text">
            質問内容を書いて質問内容を書いてねね質問内容を書いてね質問内容を書いてね質問内容を書いてね質問内容を書いてね質問内容を書いてね質問内容を書いてね質問内容を書いてね質問内容を書いてね質問内容を書いてね{" "}
          </p>
        </div>
        <p className="chat-hour-text">10:12 PM</p>
      </div>

      <div className="chat-otherchat-container">
        <div className="chat-otherchat-box">
          <p className="chat-otherchat-text">
            質問内容を書いてね質問内容を書いてね
          </p>
        </div>
        <p className="chat-hour-text">10:12 PM</p>
      </div>
    </div>
  );
}
