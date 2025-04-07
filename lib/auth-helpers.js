import { db } from "@/functions/index";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";

/**
 * 사용자가 로그인한 후 chatRoom 컬렉션에 사용자별 문서를 생성합니다.
 * @param {string} userId - 사용자 ID
 */
export async function createChatRoomForUser(userId) {
  try {
    // 1. 먼저 문서가 이미 존재하는지 확인
    const chatRoomRef = doc(db, "chatRoom", userId);
    const docSnap = await getDoc(chatRoomRef);

    // 이미 존재하면 생성하지 않음
    if (docSnap.exists()) {
      console.log("챗룸이 이미 존재합니다. 중복 생성을 방지합니다.");
      return;
    }

    // 2. chatRoom 컬렉션에 사용자 ID와 동일한 문서 생성
    await setDoc(chatRoomRef, {
      userId: userId,
    });

    // 3. chats 하위 컬렉션에 첫 메시지 추가
    const chatsCollectionRef = collection(chatRoomRef, "chats");
    await addDoc(chatsCollectionRef, {
      content: "こんにちは。何をお手伝いしましょうか？",
      createdAt: serverTimestamp(),
      writer: "admin",
    });

    console.log("챗룸 및 첫 메시지가 성공적으로 생성되었습니다.");
  } catch (error) {
    console.error("챗룸 생성 중 오류 발생:", error);
  }
}
