import React from "react";
import Link from "next/link";

const Slidebar = () => {
  return (
    <div>
      <ul>
      <li>
          <Link href="/category/cooking">
            <a>Cooking</a>
          </Link>
        </li>
        <li>
          <Link href="/category/sports">
            <a>Sport</a>
          </Link>
        </li>
        <li>
          <Link href="/category/health">
            <a>Health</a>
          </Link>
        </li>
        <li>
          <Link href="/category/fitness">
            <a>Fitness</a>
          </Link>
        </li>
        <li>
          <Link href="/category/education">
            <a>Education</a>
          </Link>
        </li>
        <li>
          <Link href="/category/technology">
            <a>Technology</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Slidebar;
