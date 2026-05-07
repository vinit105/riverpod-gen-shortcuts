"use client";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function DocsShell({ 
  children,
  title,
  description
}: { 
  children: React.ReactNode;
  title?: string;
  description?: string;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#fcfbf7] text-slate-900">
      <Header onMenuToggle={() => setSidebarOpen((v) => !v)} />

      <div className="relative flex flex-1">

        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main content — min-w-0 prevents flex overflow */}
        <main className="flex min-w-0 flex-1 flex-col">
          <div className="w-full max-w-5xl flex-1 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:px-16">
            <div className="docs-content docs-surface">
              {title && (
                <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-amber-900 sm:text-4xl">
                  {title}
                </h1>
              )}
              {description && (
                <p className="mb-8 text-lg text-amber-800/80">
                  {description}
                </p>
              )}
              {children}
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
