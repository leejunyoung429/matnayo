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
});

export { handler as GET, handler as POST };
