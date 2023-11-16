import Link from "next/link";
import React from "react";

const AuthLinks = () => {
  const status: string = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/">Login</Link>
      ) : (
        <>
          <Link href="/">Write</Link>
          <span className="">Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
