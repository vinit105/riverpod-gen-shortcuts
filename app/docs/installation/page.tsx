import DocsShell from "../../components/DocsShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation",
  description: "Install and set up Riverpod Gen Shortcuts in your Flutter project",
};

export default function InstallationPage() {
  return (
    <DocsShell>
      <h1>Installation</h1>
      <p>
        Get started with Riverpod Gen Shortcuts in your Flutter project. This
        guide covers everything from basic setup to advanced configuration.
      </p>

      <h2>Prerequisites</h2>
      <p>Before installing, make sure you have:</p>
      <ul>
        <li>Flutter 3.0 or higher</li>
        <li>Dart 2.17 or higher</li>
        <li>A Flutter project initialized</li>
      </ul>

      <h2>Step 1: Add Dependencies</h2>
      <p>Add the following dependencies to your <code>pubspec.yaml</code>:</p>
      <pre>
        <code>{`dependencies:
  flutter:
    sdk: flutter
  flutter_riverpod: ^2.4.9
  riverpod_annotation: ^2.3.3

dev_dependencies:
  flutter_test:
    sdk: flutter
  build_runner: ^2.4.7
  riverpod_generator: ^2.3.9
  riverpod_lint: ^2.3.7`}</code>
      </pre>

      <h2>Step 2: Run Build Runner</h2>
      <p>Install dependencies and set up code generation:</p>
      <pre>
        <code>{`flutter pub get
dart run build_runner build`}</code>
      </pre>

      <h2>Step 3: Configure VS Code (Optional)</h2>
      <p>
        For the best development experience, install the Riverpod snippets
        extension for VS Code. This adds intelligent code completion and
        shortcuts.
      </p>

      <div className="media-container">
        <div className="flex aspect-video items-center justify-center bg-gray-100 text-sm text-gray-400">
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
        <div className="media-caption">
          Installing the Riverpod Snippets extension in VS Code
        </div>
      </div>

      <h2>Step 4: Verify Installation</h2>
      <p>Create a simple provider to verify everything works:</p>
      <pre>
        <code>{`import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'counter.g.dart';

@riverpod
class Counter extends _$Counter {
  @override
  int build() => 0;

  void increment() => state++;
}`}</code>
      </pre>

      <p>Run the build runner to generate the provider:</p>
      <pre>
        <code>dart run build_runner build</code>
      </pre>

      <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-6">
        <h3 className="!mt-0 text-lg font-semibold text-green-800">
          🎉 You're Ready!
        </h3>
        <p className="!mb-0 text-green-700">
          Installation complete! You can now start using Riverpod with code
          generation. Check out our <a href="/docs/quick-start" className="font-semibold underline">Quick Start guide</a> to
          build your first provider.
        </p>
      </div>
    </DocsShell>
  );
}