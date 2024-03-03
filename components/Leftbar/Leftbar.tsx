import React from "react";
import Link from "next/link";
import { GoPlus } from "react-icons/go";
import FooterLinks from "../Footer/Links";

const Slidebar = () => {
  const items = [
    {
      id: 1,
      label: "Create Space",
      iconPlus: true,
      isActive: true,
    },
    {
      id: 2,
      label: "Technology",
      imgSrc:
        "https://qph.cf2.quoracdn.net/main-thumb-t-1393740-100-tjtbwiqofezszbgbqrtunqerutuchpmn.jpeg",
    },
    {
      id: 3,
      label: "Sports",
      imgSrc:
        "https://qph.cf2.quoracdn.net/main-thumb-t-795-100-fujtazxcynewvtxarymxenpcldxwczqq.jpeg",
    },
    {
      id: 4,
      label: "Cooking",
      imgSrc:
        "https://qph.cf2.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg",
    },
    {
      id: 5,
      label: "Health",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDi_B93NXP3wH4IZdNbmA8NT5qgvh5r7y-1Q&usqp=CAU",
    },
    {
      id: 6,
      label: "Instagram",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
    },
  ];
  return (
    <>
      <div className="max-w-[150px] w-[100%]"></div>
      <div className="fixed top-16 h-full max-w-[150px] w-[100%] p-1 border-b-2  border-gray-200 -z-10">
        <div className="border-b border-gray-300 h-max">
          <ul>
            {items.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center hover:bg-gray-200 pl-2 pr-3 py-2 mb-2 rounded text-sm ${
                  item.isActive ? "bg-gray-200" : ""
                }`}
              >
                {item.iconPlus && <GoPlus className="mr-2" />}
                {item.imgSrc && (
                  <img
                    src={item.imgSrc}
                    className="w-[18px] h-[18px] mr-2 rounded-sm"
                  />
                )}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <FooterLinks />
      </div>
    </>
  );
};

export default Slidebar;
