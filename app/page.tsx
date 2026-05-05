import React from "react";
import Image from "next/image";
import Link from "next/link";

import CodeBloack from "./components/CodeBloack";
import { ArrowRightIcon, GitHubIcon } from "./components/Icons";

const FEATURES = [
  {
    title: "Fast provider boilerplate",
    desc: "Generate provider code quickly with minimal setup.",
  },
  {
    title: "Type-safe generated output",
    desc: "Everything stays predictable with strong typing.",
  },
  {
    title: "Practical testing patterns",
    desc: "Easily test using overrides and controlled states.",
  },
];

const STYLE_LIST = [
  {
    title: "Use images only when necessary",
    desc: "Only include visuals when they improve understanding.",
  },
  {
    title: "Keep animations minimal",
    desc: "Avoid distractions — motion should support content.",
  },
  {
    title: "Prioritize code readability",
    desc: "Make examples easy to scan and understand quickly.",
  },
]


const Home: React.FC = () => {
  return (
    <>
      <section className="space-y-6 border-b border-slate-200 pb-12">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Riverpod Gen Shortcuts"
            width={40}
            height={40}
            className="rounded-xl border border-slate-200 bg-white shadow-sm"
          />
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Documentation tools
          </p>
        </div>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Riverpod Gen Shortcuts
        </h1>

        <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Flutter code generation made effortless. A clean documentation
          experience for providers, notifiers, snippets, and workflows.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/docs/installation"
            className="inline-flex items-center gap-2 rounded-md bg-linear-to-r from-amber-500 to-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-amber-600 hover:to-orange-600"
          >
            Get Started
            <ArrowRightIcon />
          </Link>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <GitHubIcon />
            View on GitHub
          </a>
        </div>
      </section>

      <section className="space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            What this gives you
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Simple, readable documentation
          </h2>

          <p className="text-base leading-7 text-slate-600">
            The layout focuses on clarity first — no unnecessary decoration,
            just clean structure and readable examples.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-linear-to-r from-amber-500/5 to-orange-500/5" />

              <div className="relative">
                <h3 className="text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.desc}
                </p>

                <div className="mt-4 h-0.5 w-0 bg-linear-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover:w-16" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Quick example
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">
            A simple provider in practice
          </h2>
          <p className="text-sm leading-7 text-slate-600">
            This shows how the generator simplifies your setup. Keep the
            example close to the explanation so users don’t lose context.
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="todo_provider.dart"
          code={`// With riverpod_generator — just annotate!
@riverpod
Future<List<Todo>> todoList(TodoListRef ref) async {
  final response = await http.get('https://api.example.com/todos');
  return response.body.map(Todo.fromJson).toList();
}

// Generated provider is ready to use:
// final provider = todoListProvider;`}
        />
      </section>

      <section className="space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Content format
          </p>

          <h2 className="text-3xl font-semibold text-slate-900">
            Keep visuals minimal
          </h2>

          <p className="text-sm leading-7 text-slate-600">
            Code should always be the primary focus. Use visuals only when
            they add real clarity.
          </p>
        </div>

        <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {STYLE_LIST.map((item) => (
            <div key={item.title} className="p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;