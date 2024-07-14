"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router"; //this hook is a build in next.js it give access to a method that redirect

function NoFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>That Page Cannot be Found.</h2>
      <p>
        Go back to the <Link href="/">HomePage</Link>
      </p>
    </div>
  );
}

export default NoFound;
