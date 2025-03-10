import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 h-10 w-full border-t border-white/40 bg-transparent px-6 text-zinc-800 shadow-lg backdrop-blur-lg">
      <div className="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between">
        <h1 className="text-sm lg:text-lg">
          Created by{" "}
          <Link
            href="https://vaibhavkesarwani.vercel.app/"
            target="_blank"
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text font-medium text-transparent"
          >
            Vaibhav Kesarwani
          </Link>
        </h1>
        <div className="flex space-x-3 lg:space-x-4 lg:text-lg">
          <Link
            target="_blank"
            href="https://www.instagram.com/vaibhavkesarwani__/"
            className="text-zinc-700 transition hover:text-black"
          >
            <Instagram />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/Vaibhav-kesarwani"
            className="text-zinc-700 transition hover:text-black"
          >
            <Github />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/vaibhav-kesarwani-9b5b35252/"
            className="text-zinc-700 transition hover:text-black"
          >
            <Linkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
}
