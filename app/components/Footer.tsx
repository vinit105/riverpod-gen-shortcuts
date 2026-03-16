import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-amber-200/50 bg-amber-50/30">
      <div className="mx-auto max-w-7xl px-8 pt-20 pb-16 sm:px-12 sm:pt-24 sm:pb-20 lg:px-16">

        <div className="grid grid-cols-2 gap-x-12 gap-y-10 pt-4 md:grid-cols-4">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
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
              Boost your Flutter Riverpod workflow with code generation
              shortcuts and snippets.
            </p>
          </div>

          {/* Documentation */}
          <div>
            <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-amber-700/70">
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
            <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-amber-700/70">
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

              <li>
                <Link
                  href="/license.txt"
                  className="text-xs text-gray-500 transition-colors hover:text-amber-700"
                >
                  License
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-amber-700/70">
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
                  Twitter / X
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom bar */}

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-8 pb-6 sm:flex-row">

          <p className="text-[11px] text-gray-400">
            © {new Date().getFullYear()} Riverpod Gen Shortcuts. Built with
            Flutter & Next.js.
          </p>

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
    </footer>
  );
}