import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-amber-50/30">
      <div className="mx-auto max-w-7xl px-8 py-16 sm:px-12 lg:px-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Riverpod Gen Shortcuts"
                width={24}
                height={24}
                className="rounded"
              />
              <span className="text-sm font-semibold text-gray-900">
                Riverpod Gen Shortcuts
              </span>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-gray-500">
              Boost your Flutter Riverpod workflow with code generation shortcuts
              and snippets.
            </p>
          </div>

          {/* Documentation */}
          <div>
            <h4 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-amber-700/70">
              Documentation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs"
                  className="text-xs text-gray-500 transition-colors hover:text-amber-700"
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/installation"
                  className="text-xs text-gray-500 transition-colors hover:text-amber-700"
                >
                  Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/shortcuts"
                  className="text-xs text-gray-500 transition-colors hover:text-amber-700"
                >
                  Shortcuts
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/examples"
                  className="text-xs text-gray-500 transition-colors hover:text-amber-700"
                >
                  Examples
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-amber-700/70">
              About
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-xs text-gray-500 transition-colors hover:text-amber-700"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/changelog"
                  className="text-xs text-gray-500 transition-colors hover:text-amber-700"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/faq"
                  className="text-xs text-gray-500 transition-colors hover:text-amber-700"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-amber-700/70">
              Community
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-500 transition-colors hover:text-amber-700"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://pub.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-500 transition-colors hover:text-amber-700"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0022 16z" />
                  </svg>
                  pub.dev
                </a>
              </li>
              <li>
                <a
                  href="https://flutter.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-500 transition-colors hover:text-amber-700"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  flutter.dev
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-500 transition-colors hover:text-amber-700"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 sm:flex-row">
          <p className="text-[11px] text-gray-400">
            &copy; {new Date().getFullYear()} Riverpod Gen Shortcuts. Built with
            Flutter &amp; Next.js.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-gray-400 transition-colors hover:text-gray-600"
            >
              Powered by ▲ Vercel
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
