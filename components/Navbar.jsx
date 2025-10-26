"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        <div className="flex items-center gap-2">
          <img src="/logo.svg" width={150} alt="BitLinks" className="cursor-pointer" />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#features" className="hover:text-cyan-400 hover:underline decoration-cyan-400 transition-all">Features</Link>
          <Link href="#pricing" className="hover:text-cyan-400 hover:underline decoration-cyan-400 transition-all">Pricing</Link>
          <Link href="#resources" className="hover:text-cyan-400 hover:underline decoration-cyan-400 transition-all">Resources</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="#login" className="text-gray-300 hover:text-white hover:underline transition-all">Login</Link>
          <Link href="#signup" className="bg-linear-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all">
            Try Now
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-0.5 bg-white transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 bg-white transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 animate-slideDown">
          <div className="flex flex-col items-start gap-4 px-6 py-4">
            <Link href="#features" className="hover:text-cyan-400 hover:underline w-full">Features</Link>
            <Link href="#pricing" className="hover:text-cyan-400 hover:underline w-full">Pricing</Link>
            <Link href="#resources" className="hover:text-cyan-400 w-full">Resources</Link>
            <Link href="#login" className="text-gray-300 hover:text-white w-full">Login</Link>
            <Link
              href="#signup"
              className="bg-linear-to-r from-cyan-500 to-blue-600 w-full text-center py-2 rounded-lg font-medium hover:opacity-90 transition"
            >
              Try Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
