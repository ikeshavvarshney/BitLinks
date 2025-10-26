"use client";

import { useState } from "react";

export default function TryNowPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6 py-16">
      {/* Header */}
      <div className="max-w-2xl text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Shorten your links in seconds
        </h1>
        <p className="text-gray-400 mt-3">
          Paste your long URL below and customize your short link. Fast, secure, and shareable.
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-md bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-800">
        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-1">Original Link</label>
          <input
            type="url"
            placeholder="https://example.com/very/long/link"
            className="w-full p-3 rounded-lg bg-slate-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 text-sm mb-1">Preferred Short Link (optional)</label>
          <input
            type="text"
            placeholder="e.g. my-awesome-link"
            className="w-full p-3 rounded-lg bg-slate-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <button
          type="button"
          className="w-full py-3 rounded-lg font-semibold bg-linear-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition"
        >
          Shorten Now
        </button>
      </div>

      {/* Example Output */}
      <div className="mt-8 text-center bg-slate-900 border border-slate-800 rounded-xl px-6 py-4">
        <p className="text-gray-300 mb-2">Your shortened link:</p>
        <a
          href="#"
          className="text-cyan-400 font-mono hover:underline break-all"
        >
          https://bitlinks.io/abc123
        </a>
      </div>
    </div>
  );
}

