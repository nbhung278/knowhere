"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { ReactNode, useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children }: any) => {
  const { theme } = useContext(ThemeContext) as any;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
