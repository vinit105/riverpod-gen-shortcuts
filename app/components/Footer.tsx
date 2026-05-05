import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-amber-200/60 bg-[#fffdf8]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr] md:gap-10">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 transition-opacity hover:opacity-80">
              <Image
                src="/logo.png"
                alt="Riverpod Gen Shortcuts"
                width={24}
                height={24}
                className="rounded"
              />
              <span className="text-sm font-semibold tracking-tight text-slate-900">
                Riverpod Gen Shortcuts
              </span>
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-600">
              Boost your Flutter Riverpod workflow with code generation shortcuts and snippets.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700/70">
              Documentation
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/docs" className="text-sm text-slate-600 transition-colors hover:text-amber-700">Getting Started</Link></li>
              <li><Link href="/docs/installation" className="text-sm text-slate-600 transition-colors hover:text-amber-700">Installation</Link></li>
              <li><Link href="/docs/shortcuts" className="text-sm text-slate-600 transition-colors hover:text-amber-700">Shortcuts</Link></li>
              <li><Link href="/docs/examples" className="text-sm text-slate-600 transition-colors hover:text-amber-700">Examples</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700/70">
              About
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-slate-600 transition-colors hover:text-amber-700">About Us</Link></li>
              <li><Link href="/docs/changelog" className="text-sm text-slate-600 transition-colors hover:text-amber-700">Changelog</Link></li>
              <li><Link href="/docs/faq" className="text-sm text-slate-600 transition-colors hover:text-amber-700">FAQ</Link></li>
              <li><Link href="/license.txt" className="text-sm text-slate-600 transition-colors hover:text-amber-700">License</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700/70">
              Community
            </h4>
            <ul className="space-y-2.5">
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 transition-colors hover:text-amber-700">GitHub</a></li>
              <li><a href="https://pub.dev" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 transition-colors hover:text-amber-700">pub.dev</a></li>
              <li><a href="https://flutter.dev" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 transition-colors hover:text-amber-700">flutter.dev</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 transition-colors hover:text-amber-700">Twitter / X</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Riverpod Gen Shortcuts. Built with Flutter & Next.js.
          </p>

          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-slate-600"
          >
            Powered by Vercel
          </a>
        </div>

      </div>
    </footer>
  );
}