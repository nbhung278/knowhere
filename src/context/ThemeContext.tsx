"use client";
import React, { createContext, useEffect, useState } from "react";

interface themeContext {
  theme: string;
  toggle: () => void;
}
export const ThemeContext = createContext<themeContext | undefined>(undefined);

const getFormLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<any>(() => {
    return getFormLocalStorage();
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
