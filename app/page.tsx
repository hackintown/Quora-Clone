import Header from "@/components/Header/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="max-w-[1100px] mx-auto">
        <div className="flex">
          <ul>
            <li>
              <Link href="/category/cooking">Cooking</Link>
            </li>
            <li>
              <Link href="/category/health">Health</Link>
            </li>
            <li>
              <Link href="/category/fitness">Fitness</Link>
            </li>
            <li>
              <Link href="/category/education">Education</Link>
            </li>
            <li>
              <Link href="/category/technology">Technology</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
