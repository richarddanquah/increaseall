import React from "react";
import { BiBarChartSquare } from "react-icons/bi";
import { BsChevronDoubleRight } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { SlLogout } from "react-icons/sl";
import { CgProfile } from "react-icons/cg"


import logo from "../assets/images/logo.png";


import {
  MdOutlineHelpOutline,
} from "react-icons/md";


export default function Sidebar() {
  const mainLinks = [
    {
      icon: <BiBarChartSquare className="text-xl" />,
      name: "Item Search",
    },
    {
      icon: <BiBarChartSquare className="text-xl" />,
      name: "Item",
    },
    {
      icon: <BiBarChartSquare className="text-xl" />,
      name: "Item",
    },
    {
      icon: <BiBarChartSquare className="text-xl" />,
      name: "Item",
    },
    {
      icon: <BiBarChartSquare className="text-xl" />,
      name: "Item",
    },
    {
      icon: <BiBarChartSquare className="text-xl" />,
      name: "Item",
    },
    {
      icon: <BiBarChartSquare className="text-xl" />,
      name: "Item",
    },
    {
      icon: <BiBarChartSquare className="text-xl" />,
      name: "Item",
    },
    {
      icon: <BiBarChartSquare className="text-xl" />,
      name: "Item",
    },
    {
      icon: <BiBarChartSquare className="text-xl" />,
      name: "Item",
    },
   
  ];

  const helpLinks = [
    {
      icon: <BsChevronDoubleRight className="text-xl" />,
      name: "Close menu",
    },
    {
      icon: <CgProfile className="text-xl" />,
      name: `Mazie Johnson View profile`,
      
    },
    {
      icon: <MdOutlineHelpOutline className="text-xl" />,
      name: "Help",
    },
    {
      icon: <IoMdNotifications className="text-xl" />,
      name: "Notification",
    },

    {
        icon: <SlLogout className="text-xl" />,
        name: "Sign out",
      },
  ];



  return (
    <div className="w-3/12 bg-[#00152F]  overflow-auto pb-8 sidebar">
      <div className="flex gap-5">
        <img src={logo} alt="logo" />
      </div>
  
      <ul className="flex flex-col">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-[#064A71] ${
                name === "Item Search" ? "bg-[#064A71]" : ""
              }`}
            >
              <a href="#" className="flex items-center gap-5 text-white">
                {icon}
                <span className="text-sm tracking-wider text-white">
                  {name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
      <br/>
      <br/>
      <br/>

      <ul className="flex flex-col">
        {helpLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-[#064A71] `}>
              <a href="#" className="flex items-center gap-5 text-white">
                {icon}
                <span className="text-sm tracking-wider text-white">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
