"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavSection {
  title: string;
  items: { label: string; href: string }[];
}

const navSections: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { label: "Introduction", href: "/docs" },
      { label: "Installation", href: "/docs/installation" },
      { label: "Quick Start", href: "/docs/quick-start" },
    ],
  },
  {
    title: "Providers",
    items: [
      { label: "Provider", href: "/docs/provider" },
      { label: "StateProvider", href: "/docs/state-provider" },
      { label: "FutureProvider", href: "/docs/future-provider" },
      { label: "StreamProvider", href: "/docs/stream-provider" },
      { label: "NotifierProvider", href: "/docs/notifier-provider" },
      { label: "AsyncNotifierProvider", href: "/docs/async-notifier-provider" },
    ],
  },
  {
    title: "Code Generation",
    items: [
      { label: "Overview", href: "/docs/codegen-overview" },
      { label: "Shortcuts & Snippets", href: "/docs/shortcuts" },
      { label: "Annotations", href: "/docs/annotations" },
      { label: "Build Runner", href: "/docs/build-runner" },
    ],
  },
  {
    title: "Advanced",
    items: [
      { label: "Family Modifiers", href: "/docs/family" },
      { label: "Auto Dispose", href: "/docs/auto-dispose" },
      { label: "Testing", href: "/docs/testing" },
      { label: "Migration Guide", href: "/docs/migration" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Examples", href: "/docs/examples" },
      { label: "FAQ", href: "/docs/faq" },
      { label: "Changelog", href: "/docs/changelog" },
    ],
  },
];

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`sidebar-overlay ${open ? "open" : ""} lg:hidden`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-[280px] transform overflow-y-auto border-r border-gray-100 bg-white transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="pl-12 pr-6 py-6">
          {navSections.map((section) => (
            <div key={section.title} className="mb-6">
              <h3 className="mb-2 px-6 text-[11px] font-bold uppercase tracking-wider text-amber-700/70">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`nav-link ${
                        pathname === item.href ? "active" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
