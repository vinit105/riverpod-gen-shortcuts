"use client";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";


export default function DocsShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#fcfbf7] text-slate-900">
      <Header onMenuToggle={() => setSidebarOpen((v) => !v)} />

      <div className="relative flex flex-1">

        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="relative flex min-w-0 flex-1 flex-col">
          <div className="mx-auto flex w-full max-w-6xl flex-1 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:px-16">
            <section className="w-full max-w-4xl">
              <div className="prose max-w-none prose-headings:scroll-mt-24 prose-headings:text-slate-900 prose-headings:font-semibold prose-h1:mb-4 prose-h1:text-4xl prose-h1:tracking-tight prose-h2:mt-10 prose-h2:mb-3 prose-h2:text-2xl prose-h2:tracking-tight prose-h3:mt-8 prose-h3:mb-2 prose-p:text-slate-700 prose-p:leading-7 prose-li:text-slate-700 prose-a:text-amber-700 prose-a:no-underline hover:prose-a:text-amber-800 prose-code:rounded-md prose-code:bg-amber-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-medium prose-code:text-amber-900 prose-pre:rounded-2xl prose-pre:border prose-pre:border-slate-200 prose-pre:bg-slate-950 prose-pre:shadow-[0_12px_28px_rgba(15,23,42,0.08)] prose-pre:before:hidden prose-pre:after:hidden">{children}</div>
            </section>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
