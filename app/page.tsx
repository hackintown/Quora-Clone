import BlogContent from "@/components/Content/BlogContent";
import Header from "@/components/Header/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[100%]">
      <BlogContent />
      <BlogContent />
      <BlogContent />
      <BlogContent />
    </div>
  );
}
