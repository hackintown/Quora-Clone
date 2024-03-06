"use client";
import BlogContent from "@/components/Content/BlogContent";
import Header from "@/components/Header/Header";
import Leftbar from "../components/Leftbar/Leftbar";
import UserLogin from "@/components/Auth/UserLogin";
import { useAppSelector } from "./store/AuthWrapper";
import DefaultTopHeader from "../components/ContentHeader/DefaultTopHeader";
import Rightbar from "@/components/Rightbar/Rightbar";

export default function Home() {
  const isLoggedIn = useAppSelector((state) => state.userAuth.isLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <>
          <Header />
          <div className="flex max-w-[1100px] mx-auto px-2 py-4">
            <Leftbar />
            <div className="max-w-[600px] w-full px-3 py-1 mx-2">
              <DefaultTopHeader />
              <BlogContent />
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
