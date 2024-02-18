import Link from "next/link";
import React from "react";

const FooterLinks = () => {
  const linkItems = [
    {
      id: 1,
      label: "About",
    },

    {
      id: 2,
      label: "Career",
    },
    {
      id: 3,
      label: "Terms",
    },
    {
      id: 4,
      label: "Privacy",
    },
    {
      id: 5,
      label: "Advertise",
    },
    {
      id: 6,
      label: "Press",
    },
  ];
  return (
    <div className="mt-5">
      <ul className="flex items-center flex-wrap">
        {linkItems.map((items, idx) => (
          <li key={idx} className="mx-2">
            <Link href="/" className="text-sm hover:underline">{items.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
