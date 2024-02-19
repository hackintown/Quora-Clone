"use client";
import Image from "next/image";
import React from "react";
import { PiSealQuestion } from "react-icons/pi";
import { BiSolidEdit } from "react-icons/bi";
import { MdModeEdit } from "react-icons/md";

const DefaultTopHeader = () => {
  return (
    <div className="px-2 pt-3 pb-2 mb-2 bg-white shadow-[rgba(0,0,0,0.04)] shadow-sm border rounded">
      <div className="flex items-center ">
        <div className="mr-2 ml-1 rounded-full">
          <Image
            src="https://pxbar.com/wp-content/uploads/2023/08/insta-dp-for-girls.jpg"
            height={40}
            width={40}
            alt="avatar"
          />
        </div>
        <div className="top-input-wrap px-2 py-1 bg-[#f7f7f8] border-slate-200  border rounded-[20px] w-full">
          <input
            className="bg-transparent text-sm"
            placeholder="What do you want to ask or share?"
          />
        </div>
      </div>
      <div className="mt-1">
        <ul className="flex justify-between">
          <li className="hover:bg-gray-100 px-2 mx-2 py-1 flex-grow flex-shrink hover:rounded-[20px]">
            <button className="text-sm flex items-center justify-center w-full h-full text-[#636466] text-[0.85rem]">
            <PiSealQuestion className="text-[1.2rem] mx-1" /> Ask
            </button>
          </li>
          <li className="hover:bg-gray-100 px-2 py-1 flex-grow flex-shrink hover:rounded-[20px]">
            <button className="flex items-center justify-center w-full h-full text-[#636466] text-[0.85rem]">
            <BiSolidEdit className="text-[1.4rem] mx-1" />  Answer
            </button>
          </li>
          <li className="hover:bg-gray-100 px-2 py-1 flex-grow flex-shrink hover:rounded-[20px]">
            <button className="flex items-center justify-center w-full h-full text-[#636466] text-[0.85rem]">
            <MdModeEdit className="text-[1.2rem] mx-1" /> Post
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DefaultTopHeader;
