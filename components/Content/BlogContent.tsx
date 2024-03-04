"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { MdAdminPanelSettings } from "react-icons/md";
import { PiArrowFatUpBold, PiArrowFatUpLight } from "react-icons/pi";
import { PiArrowFatDownBold } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa6";
import { GrPowerCycle } from "react-icons/gr";
import { useState } from "react";
import { Avatar } from "@mui/material";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";
import { getAuth } from "firebase/auth";

const BlogContent = () => {
  const [upArrow, setUpArrow] = useState(false);
  const [downArrow, setDownArrow] = useState(false);
  const handleUpArrow = () => {
    setUpArrow(!upArrow);
    setDownArrow(false);
  };
  const handleDownArrow = () => {
    setDownArrow(!downArrow);
    setUpArrow(false);
  };
  const questionRef = collection(db, "questions");
  const [questionData, getQuestionData] = useState<any>([]);

  const getQuestion = async () => {
    try {
      const data = await getDocs(questionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      getQuestionData(filteredData);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getQuestion();
  }, []);

  console.log(questionRef);
  return (
    <section className="w-[100%] my-2 bg-white shadow-[rgba(0,0,0,0.04)] shadow-sm border rounded text-sm">
      <div className="flex items-center pl-3">
        <div className="mr-2">
          <Link href="/" className="mx-2 rounded-full">
            <Avatar alt="Remy Sharp" src="dp.webp" />
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <Link href="/" className="text-sm font-semibold hover:underline">
              Business Trading
            </Link>
            <span className="text-sm text-blue-700 hover:underline font-thin ml-2">
              Follow
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-xs text-gray-800 cursor-pointer">
              Answer by Amit Singh
            </span>
            <div className="mx-2 text-xs text-gray-800">
              <MdAdminPanelSettings className="text-base" />
            </div>
            <div className="text-xs text-gray-800 hover:underline cursor-pointer">
              Feb 14
            </div>
          </div>
        </div>
      </div>
      <div className="pl-3">
        <h2 className="font-semibold text-base my-1">
          Question will appear here
        </h2>
        <p className="font-normal text-sm mt-1 mb-2 pl-1">
          Answer will appear here
        </p>
      </div>
      <div>
        <Image
          src="https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg"
          width={500}
          height={500}
          style={{ width: "100%" }}
          alt="demo-img"
        />
      </div>
      <div className="flex my-1 mx-3 items-center">
        <div className="flex items-center bg-[rgba(0,0,1,0.03)] rounded-full border border-[#dee0e1] h-[30px]">
          <button className="flex items-center border-r px-2 pl-3 border-solid border-[#dee0e1] h-full">
            <span className="mr-1 inline-block" onClick={handleUpArrow}>
              <PiArrowFatUpBold
                className={`${upArrow ? "skew" : ""} text-lg`}
                style={{
                  color: "rgb(46, 105, 255)",
                  transition:
                    "transform 0ms cubic-bezier(0.23, 0.19, 0.1, 1.34) 0ms",
                }}
              />
            </span>
            <span
              className={`inline-block px-1 text-[#636466] ${
                upArrow ? "voted" : ""
              }`}
            >
              Upvote
            </span>
            <span
              className={`{inline-block pl-1 text-[#636466] ${
                upArrow ? "voted" : ""
              }`}
            >
              15
            </span>
          </button>
          <div className="flex items-center">
            <button className="px-2 pr-3" onClick={handleDownArrow}>
              <PiArrowFatDownBold
                className={`${downArrow ? "skew" : ""} text-lg`}
                style={{
                  transition:
                    "transform 0ms cubic-bezier(0.23, 0.19, 0.1, 1.34) 0ms",
                }}
              />
            </button>
          </div>
        </div>
        <div className="mx-2 hover:bg-[rgba(0,0,1,0.03)] rounded-full px-2 py-1">
          <button className="flex items-center">
            <FaRegComment />
            <span className="inline-block pl-2">45</span>
          </button>
        </div>
        <div className=" hover:bg-[rgba(0,0,1,0.03)] rounded-full px-2 py-1">
          <button className="flex items-center">
            <GrPowerCycle />
            <span className="inline-block pl-2">9</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
