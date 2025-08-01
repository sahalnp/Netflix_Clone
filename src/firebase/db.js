
import { setDoc, doc } from "firebase/firestore";
import { db } from "./config"; 

export const addUser = async ({ uid, email, name }) => {
  await setDoc(doc(db, "users", uid), {
    email,
    name,
    createdAt: new Date(),
  });
};
