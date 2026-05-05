"use client";
import React from "react";
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

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const pathname = usePathname();

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-[rgba(0,0,0,0.4)] z-40 transition-opacity duration-200 lg:hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      <aside
            className={`fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-(--sidebar-width) transform overflow-y-auto border-r border-amber-100/70 bg-white/98 shadow-[0_0_32px_rgba(245,158,11,0.06)] backdrop-blur-sm transition-transform duration-200 ease-in-out lg:sticky lg:top-16 lg:z-0 lg:h-[calc(100vh-4rem)] lg:translate-x-0 lg:shadow-none lg:backdrop-blur-0 ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <nav className="px-5 py-8 sm:px-6 lg:py-10">
          {navSections.map((section) => (
            <div key={section.title} className="mb-8 last:mb-0">
              <h3 className="mb-3 px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? 'border-l-2 border-amber-400 bg-amber-50/70 text-amber-800 font-semibold'
                            : 'text-slate-600 hover:border-l-2 hover:border-amber-200 hover:bg-amber-50/40 hover:text-slate-900'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;