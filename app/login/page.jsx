"use client";

import { signIn } from "next-auth/react";
import "./login.css";

export default function LoginPage() {
  const handleLogin = () => {
    signIn("google");
  };

  return (
    <main className="login-container">
      <div className="login-box">
        <h1 className="login-title">로그인</h1>
        <button onClick={handleLogin} className="login-button">
          구글 계정으로 로그인
        </button>
      </div>
    </main>
  );
}
