"use client";

import { signIn } from "next-auth/react";
import "./login.css";
import Image from "next/image";

export default function LoginPage() {
  const handleLogin = () => {
    signIn("google");
  };

  return (
    <main className="login-container">
      <h1 className="login-title">
        会員登録で
        <br />
        韓国旅がもっと特別に
      </h1>
      <div className="login-box">
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
      <div className="login-text">
        <p className="login-text-title">ログインせずに見る</p>
        <p className="login-text-description">会員登録なしで閲覧可能</p>
      </div>
    </main>
  );
}
