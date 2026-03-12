"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header({
  onMenuToggle,
}: {
  onMenuToggle: () => void;
}) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-100 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="flex h-16 items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Left: Menu + Logo + Title */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            onClick={onMenuToggle}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:bg-amber-50 hover:text-amber-700 lg:hidden"
            aria-label="Toggle navigation"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M3 5h14M3 10h14M3 15h14" />
            </svg>
          </button>

          {/* Logo + Title */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Riverpod Gen Shortcuts"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-[16px] font-semibold tracking-tight text-gray-900">
              Riverpod Gen Shortcuts
            </span>
          </Link>
        </div>

        {/* Right: Nav buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/docs"
            className="hidden rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-amber-50 hover:text-amber-800 sm:inline-flex"
          >
            Documentation
          </Link>
          <Link
            href="/about"
            className="hidden rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-amber-50 hover:text-amber-800 sm:inline-flex"
          >
            About Us
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-amber-50 hover:text-amber-700"
            aria-label="GitHub"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
