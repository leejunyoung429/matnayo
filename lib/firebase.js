import { initFirestore } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";

const firestore = initFirestore({
  credential: cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  }),
});

export { firestore };
