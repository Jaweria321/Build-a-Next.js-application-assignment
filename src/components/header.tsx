"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  return (
    <nav className="bg-slate-400 text-white">
      <ul className="flex justify-center gap-3 leading-10">
        <li>
          Services
          <ul className="absolute p-3 text-black">
            <li>
              <Link href="/services/productResearch">Product Research</Link>
            </li>
            <li>
              <Link href="/services/productDesign">Product Design</Link>
            </li>
            <li>
              <Link href="/services/productDevelopment">
                Product Development
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/process">Our Process</Link>
        </li>
        <li>
          <button onClick={() => router.push("/blogs")}>Our Blog</button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
