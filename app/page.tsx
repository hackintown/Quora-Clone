"use client";
import BlogContent from "@/components/Content/BlogContent";
import Header from "@/components/Header/Header";
import Leftbar from "../components/Leftbar/Leftbar";
import UserLogin from "@/components/Auth/UserLogin";
import { useAppSelector } from "./store/AuthWrapper";
import DefaultTopHeader from "../components/ContentHeader/DefaultTopHeader";
import Rightbar from "@/components/Rightbar/Rightbar";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

export default function Home() {
  const isLoggedIn = useAppSelector((state) => state.userAuth.isLoggedIn);
  const [questionData, setQuestionData] = useState<any[]>([]);

  useEffect(() => {
    const questionRef = collection(db, "questions");
    const unsubscribe = onSnapshot(questionRef, (snapshot) => {
      const updatedData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setQuestionData(updatedData);
    });

    return () => unsubscribe();
  }, []);
  return (
    <>
      {isLoggedIn ? (
        <>
          <Header />
          <div className="flex max-w-[1100px] mx-auto px-2 py-4">
            <Leftbar />
            <div className="max-w-[600px] w-full px-3 py-1 mx-2">
              <DefaultTopHeader />
              {questionData.map((question, id) => (
                <BlogContent key={question.id} question={question} />
              ))}
            </div>
            <Rightbar />
          </div>
        </>
      ) : (
        <UserLogin isLoggedIn={isLoggedIn} />
      )}
    </>
  );
}
