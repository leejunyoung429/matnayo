"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ArrowIcon from "@/components/icons/mypage-icons";
import SegmentGroup from "@/components/segment-group";
import ChatRoom from "@/app/mypage/chat-room";
import Upload from "@/app/mypage/upload";

export default function MypagePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const headerRef = useRef(null);
  const segmentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("calc(100vh - 200px)");

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current && segmentRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        const segmentHeight = segmentRef.current.offsetHeight;
        const totalHeaderHeight = headerHeight + segmentHeight;
        setContentHeight(`calc(100vh - ${totalHeaderHeight}px)`);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // 로그아웃 처리 함수
  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      router.push("/login");
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
  };

  return (
    <main className="w-full h-screen overflow-hidden flex flex-col items-center">
      <div
        ref={headerRef}
        className="flex flex-row items-end gap-3 w-full px-5 py-4"
      >
        <div className="flex flex-col items-start gap-1.5 w-[240px]">
          <p className="text-[20px] font-semibold tracking-[-0.5px] text-[#111]">
            {session?.user?.name || "Profile Name"}
          </p>
          <p className="text-[14px] font-medium tracking-[-0.35px] text-[#767676]">
            {session?.user?.email || "youremail@google.com"}
          </p>
        </div>
        <div
          className="flex flex-row items-center gap-0.5 cursor-pointer"
          onClick={handleLogout}
          role="button"
          tabIndex={0}
          aria-label="로그아웃"
        >
          <p className="text-[14px] font-medium leading-[140%] tracking-[-0.35px] text-[#767676]">
            ログアウト
          </p>
          <ArrowIcon />
        </div>
      </div>

      <div ref={segmentRef} className="w-full px-5 py-4">
        <SegmentGroup />
      </div>

      <div
        className="bg-foreground rounded-t-[32px] w-full flex flex-col"
        style={{ height: contentHeight }}
      >
        <div className="flex-1 overflow-y-auto">
          <ChatRoom />
        </div>
        <div className="w-full bottom-0 pb-5">
          <Upload />
        </div>
      </div>
    </main>
  );
}
