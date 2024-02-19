import BlogContent from "@/components/Content/BlogContent";
import Header from "@/components/Header/Header";
import Image from "next/image";
import Link from "next/link";
import DefaultTopHeader from "@/components/ContentHeader/DefaultTopHeader";

export default function Home() {
  return (
    <div className="max-w-[600px] w-full px-3 py-1 mx-2">
      <DefaultTopHeader />
      <BlogContent />
      <BlogContent />
      <BlogContent />
      <BlogContent />
      <BlogContent />
      <BlogContent />
      <BlogContent />
    </div>
  );
}
