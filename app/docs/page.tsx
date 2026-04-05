import DocsShell from "@/app/components/DocsShell";
import Link from "next/link";
import React from "react";

export default function Introduction() {
  return (
    <DocsShell
      title="Introduction to Riverpod Generator"
      description="Welcome to the comprehensive guide for Riverpod code generation inside Flutter."
    >
      <div className="prose prose-amber dark:prose-invert max-w-none">
        <p>
          State management in Flutter can be challenging, but <strong>Riverpod</strong> has 
          emerged as one of the most robust, scalable, and safe solutions available. 
          To make Riverpod even more powerful and bulletproof, its creator introduced 
          <strong> Riverpod Generator</strong>—a package that uses code generation to 
          ensure compile-time safety and eliminate boilerplate.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          Why Use Code Generation?
        </h2>
        <p>
          Writing Riverpod providers manually can lead to subtle errors and significant boilerplate. 
          Code generation solves this by:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Compile-time safety:</strong> Errors are caught during development, not at runtime.</li>
          <li><strong>Less Boilerplate:</strong> Focus on your logic while the generator handles the tedious provider setup.</li>
          <li><strong>Simpler Syntax:</strong> Define clear functions or classes, and let the generator convert them into providers.</li>
          <li><strong>Built-in features:</strong> Auto-dispose and family modifiers are applied automatically or easily toggled via annotations.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          What are these Shortcuts?
        </h2>
        <p>
          While the generator removes boilerplate, typing out the core annotations and initial 
          class/function structures can still be repetitive. This documentation accompanies a 
          powerful set of <strong>VS Code Snippets & Shortcuts</strong> designed specifically 
          for Riverpod Generator.
        </p>
        <p>
          These snippets allow you to rapidly scaffold any type of provider with just a few keystrokes, 
          making your development workflow incredibly fast and highly enjoyable.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          Next Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <Link href="/docs/installation" className="block p-6 bg-amber-50 rounded-xl border border-amber-100 hover:border-amber-300 transition-colors hover:bg-amber-100/50">
            <h3 className="text-lg font-bold text-amber-900 mb-2">Installation</h3>
            <p className="text-amber-800/80 text-sm">Learn how to install Riverpod Generator and the companion VS Code snippets.</p>
          </Link>
          <Link href="/docs/quick-start" className="block p-6 bg-amber-50 rounded-xl border border-amber-100 hover:border-amber-300 transition-colors hover:bg-amber-100/50">
            <h3 className="text-lg font-bold text-amber-900 mb-2">Quick Start</h3>
            <p className="text-amber-800/80 text-sm">Create your first generated provider in seconds.</p>
          </Link>
        </div>
      </div>
    </DocsShell>
  );
}
