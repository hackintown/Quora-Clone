import React from "react";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { FaListAlt } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";
import { HOME_ROUTE } from "@/constants/routes";
const Header = () => {
  return (
    <div>
      <div className="h-[50px] relative"></div>
      <header className="px-4 bg-white shadow-md py-1 fixed top-0 w-full min-h-[50px]">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center">
            <nav>
              <ul className="flex items-center">
                <li className="mx-4">
                  <div className="logo">
                    <Link href={HOME_ROUTE} className="text-lg font-bold text-black">
                      Hackintown
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <div className="hover:rounded hover:bg-gray-100">
                      <Link href="/" className="">
                        <div className="min-w-[60px] h-[49px] flex items-center justify-center">
                          <IoMdHome className="w-[28px] h-[28px]" />
                        </div>
                      </Link>
                    </div>
                    <div className="hover:rounded hover:bg-gray-100">
                      <Link href="/" className="">
                        <div className="min-w-[60px] h-[49px] flex items-center justify-center">
                          <FaListAlt className="w-[28px] h-[28px]" />
                        </div>
                      </Link>
                    </div>
                    <div className="hover:rounded hover:bg-gray-100">
                      <Link href="/" className="">
                        <div className="min-w-[60px] h-[49px] flex items-center justify-center">
                          <BiSolidEdit className="w-[28px] h-[28px]" />
                        </div>
                      </Link>
                    </div>
                    <div className="hover:rounded hover:bg-gray-100">
                      <Link href="/" className="">
                        <div className="min-w-[60px] h-[49px] flex items-center justify-center">
                          <BsFillPeopleFill className="w-[28px] h-[28px]" />
                        </div>
                      </Link>
                    </div>
                    <div className="hover:rounded hover:bg-gray-100">
                      <Link href="/" className="">
                        <div className="min-w-[60px] h-[49px] flex items-center justify-center">
                          <IoMdNotificationsOutline className="w-[28px] h-[28px]" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
            <nav>
              <ul className="flex items-center">
                <li className="mx-3">
                  <div>
                    <input
                      type="text"
                      className="px-2 py-1 outline-none text-black rounded-md border border-gray-400 hover:border-blue-400 duration-75"
                      placeholder="Search Quora"
                    ></input>
                  </div>
                </li>
                <li>
                  <button className="px-4 py-2 bg-white rounded-3xl text-black border border-gray-400 text-xs">
                    Try Hackintoiwn +
                  </button>
                </li>
                <li>
                  <div className="mr-2 ml-1 rounded-full">
                    <Image
                      src="https://pxbar.com/wp-content/uploads/2023/08/insta-dp-for-girls.jpg"
                      height={30}
                      width={30}
                      alt="avatar"
                    />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
