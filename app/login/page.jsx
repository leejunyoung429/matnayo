"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginPage() {
  const handleLogin = () => {
    signIn("google");
  };

  return (
    <main className="flex flex-col items-center w-full h-screen text-center box-border overflow-hidden">
      <h1 className="text-2xl font-semibold py-16">
        会員登録で
        <br />
        韓国旅がもっと特別に
      </h1>
      <div className="flex flex-col items-center justify-center gap-3 py-2">
        <Image
          onClick={handleLogin}
          src="/line-login2.png"
          alt="line-login2"
          width={280}
          height={50}
        />
        <Image
          onClick={handleLogin}
          src="/google-login2.png"
          alt="google-login2"
          width={280}
          height={50}
        />
      </div>
      <div className="mt-8">
        <p className="text-sm text-blue-600 font-semibold tracking-tight">
          ログインせずに見る
        </p>
        <p className="text-xs text-gray-400 font-normal tracking-tight">
          会員登録なしで閲覧可能
        </p>
      </div>
    </main>
  );
}
