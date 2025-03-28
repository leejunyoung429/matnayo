import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { firestore } from "@/lib/firebase";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: FirestoreAdapter(firestore),
  pages: {
    signIn: "/login", // 커스텀 로그인 페이지 지정
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // URL이 상대경로라면 baseUrl과 결합하고,
      // query string이 있다면 이를 제거합니다.
      const cleanedUrl = url.includes("?") ? url.split("?")[0] : url;
      // cleanedUrl이 절대 경로가 아니라면 baseUrl을 붙여 반환할 수 있습니다.
      return cleanedUrl.startsWith("http")
        ? cleanedUrl
        : `${baseUrl}${cleanedUrl}`;
    },
  },
});

export { handler as GET, handler as POST };
