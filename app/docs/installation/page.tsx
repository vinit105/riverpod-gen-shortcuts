import React from "react";
import { Metadata } from "next";
import CodeBloack from "../../components/CodeBloack";

export const metadata: Metadata = {
  title: "Installation",
  description:
    "Install and set up Riverpod Gen Shortcuts in your Flutter project",
};


const InstallationPage: React.FC = () => {
  return (
    <>
        <section className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Installation
          </h1>
          <p className="text-base leading-7 text-slate-600">
            Get started with Riverpod Gen Shortcuts in your Flutter project.
            This guide covers everything from basic setup to advanced
            configuration.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-xl font-semibold text-slate-900">
            Prerequisites
          </h2>

          <p className="text-sm text-slate-600">
            Before installing, make sure you have:
          </p>

          <ul className="space-y-2 text-sm text-slate-700">
            {[
              "Flutter 3.0 or higher",
              "Dart 2.17 or higher",
              "A Flutter project initialized",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">
              Step 1: Add Dependencies
            </h2>
            <p className="text-sm text-slate-600">
              Add the following dependencies to your{" "}
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                pubspec.yaml
              </code>
              :
            </p>
          </div>

          <CodeBloack
            language="yaml"
            fileName="pubspec.yaml"
            code={`dependencies:
  flutter:
    sdk: flutter
  flutter_riverpod: ^2.4.9
  riverpod_annotation: ^2.3.3

dev_dependencies:
  flutter_test:
    sdk: flutter
  build_runner: ^2.4.7
  riverpod_generator: ^2.3.9
  riverpod_lint: ^2.3.7`}
          />
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">
              Step 2: Run Build Runner
            </h2>
            <p className="text-sm text-slate-600">
              Install dependencies and set up code generation:
            </p>
          </div>

          <CodeBloack
            language="bash"
            fileName="terminal"
            code={`flutter pub get
dart run build_runner build`}
          />
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">
              Step 3: Configure VS Code (Optional)
            </h2>
            <p className="text-sm text-slate-600">
              For the best development experience, install the Riverpod
              snippets extension for VS Code. This adds intelligent code
              completion and shortcuts.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="flex aspect-video items-center justify-center bg-slate-100 text-sm text-slate-400">
              <div className="text-center">
                <svg
                  className="mx-auto mb-2"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 9h6v6H9z" />
                </svg>
                VS Code Extension Installation Demo
              </div>
            </div>

            <div className="border-t border-slate-200 px-4 py-2 text-xs text-slate-500">
              Installing the Riverpod Snippets extension in VS Code
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">
              Step 4: Verify Installation
            </h2>
            <p className="text-sm text-slate-600">
              Create a simple provider to verify everything works:
            </p>
          </div>

          <CodeBloack
            language="dart"
            fileName="counter.dart"
            code={`import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'counter.g.dart';

@riverpod
class Counter extends _$Counter {
  @override
  int build() => 0;

  void increment() => state++;
}`}
          />

          <p className="text-sm text-slate-600">
            Run the build runner to generate the provider:
          </p>

          <CodeBloack
            language="bash"
            fileName="terminal"
            code={`dart run build_runner build`}
          />
        </section>

        <section>
          <div className="rounded-xl border border-green-200 bg-green-50 p-6">
            <h3 className="text-lg font-semibold text-green-800">
              🎉 You're Ready!
            </h3>
            <p className="mt-2 text-sm text-green-700">
              Installation complete! You can now start using Riverpod with code
              generation. Check out our{" "}
              <a
                href="/docs/quick-start"
                className="font-semibold underline"
              >
                Quick Start guide
              </a>{" "}
              to build your first provider.
            </p>
          </div>
        </section>

    </>
  );
}

export default InstallationPage;