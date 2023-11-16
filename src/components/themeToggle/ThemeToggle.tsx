"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext) as any;

  console.log(theme);
  return (
    <div
      className="w-[45px] h-[20px] px-1 rounded-[50px] cursor-pointer flex items-center justify-between relative"
      style={
        theme === "dark"
          ? { backgroundColor: "#ffffff" }
          : { backgroundColor: "#0f172a" }
      }
      onClick={toggle}
    >
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div
        style={
          theme === "dark"
            ? { right: 2, backgroundColor: "#0f172a" }
            : { left: 3, backgroundColor: "#ffffff" }
        }
        className="w-[15px] h-[15px] rounded-[50px] absolute"
      ></div>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
