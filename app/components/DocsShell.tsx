"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function DocsShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header onMenuToggle={() => setSidebarOpen((v) => !v)} />

      <div className="relative flex flex-1">
        {/*
          Sidebar is fixed-positioned so it floats over the page.
          This invisible placeholder reserves the same 280px on desktop,
          keeping main content from sliding under the sidebar.
        */}
        <div className="hidden w-[280px] shrink-0 lg:block" aria-hidden="true" />

        {/* Sidebar rendered outside the placeholder so z-index works correctly */}
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main content — min-w-0 prevents flex overflow */}
        <main className="flex min-w-0 flex-1 flex-col">
          <div className="w-full max-w-4xl flex-1 pl-24 pr-8 py-12 sm:pl-32 sm:pr-12 lg:pl-40 lg:pr-16">
            <div className="docs-content">{children}</div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
