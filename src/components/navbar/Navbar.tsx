import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center h-[100px]">
      <div className="flex gap-[10px] flex-1">
        <Image src="/meta.png" alt="meta logo" width={28} height={28} />
        <Image
          src="/instagram.png"
          alt="instagram logo"
          width={28}
          height={28}
        />
        <Image src="/tiktok.png" alt="tiktok logo" width={28} height={28} />
        <Image src="/youtube.png" alt="youtube logo" width={28} height={28} />
      </div>
      <div className="flex-1 items-center text-[36px] font-bold">Knowhere</div>
      <div className="flex items-center gap-[20px] flex-1 text-[20px]">
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
