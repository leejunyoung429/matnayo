"use client";

import { useSession } from "next-auth/react";
import ArrowIcon from "@/components/icons/mypage-icons";
import SegmentGroup from "@/components/segment-group";
import ChatRoom from "@/app/mypage/chat-room";
import Upload from "@/app/mypage/upload";

export default function MypagePage() {
  const { data: session, status } = useSession();

  return (
    <main className="w-full flex-1 overflow-hidden flex flex-col items-center">
      <div className="flex flex-row items-end gap-3 w-full px-5 py-4">
        <div className="flex flex-col items-start gap-1.5 w-[240px]">
          <p className="text-[20px] font-semibold tracking-[-0.5px] text-[#111]">
            {session?.user?.name || "Profile Name"}
          </p>
          <p className="text-[14px] font-medium tracking-[-0.35px] text-[#767676]">
            {session?.user?.email || "youremail@google.com"}
          </p>
        </div>
        <div className="flex flex-row items-center gap-0.5">
          <p className="text-[14px] font-medium leading-[140%] tracking-[-0.35px] text-[#767676]">
            ログアウト
          </p>
          <ArrowIcon />
        </div>
      </div>

      <div className="w-full px-5 py-4">
        <SegmentGroup />
      </div>

      <div className="bg-foreground rounded-t-[32px] w-full pb-5">
        <ChatRoom />
        <Upload />
      </div>
    </main>
  );
}
