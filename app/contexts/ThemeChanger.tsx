"use client";

import React, { useEffect, useState } from "react";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import useThemeChanger from "../hooks/useThemeChanger";

export default function ThemeChanger() {
  const themeChanger = useThemeChanger();
  if (!themeChanger) {
    return null;
  }
  const { light, setTheme } = themeChanger;
  return (
    <button className="fixed z-40 bottom-3 right-2  dark:text-yellow-400 bg-transparent text-gray-900 w-10 h-10 rounded-full flex justify-center items-center transition-all duration-500 ease-linear">
      {light ? (
        <BsMoonStarsFill onClick={() => setTheme("dark")} size={27} />
      ) : (
        <BsFillSunFill onClick={() => setTheme("light")} size={27} />
      )}
    </button>
  );
}
