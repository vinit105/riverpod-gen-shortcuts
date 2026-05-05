import { Metadata } from "next";
import CodeBloack from "../../components/CodeBloack";

export const metadata: Metadata = {
  title: "Code Generation Overview",
  description:
    "Understanding Riverpod code generation, build_runner, and annotation-based providers",
};

const advantages = [
  {
    title: "Automatic Disposal",
    description:
      "Providers are automatically disposed when no longer needed, preventing memory leaks.",
    className: "border-green-100 bg-green-50/50",
  },
  {
    title: "Type Safety",
    description:
      "Generated providers have perfect type inference and catch errors at compile time.",
    className: "border-blue-100 bg-blue-50/50",
  },
  {
    title: "Better Performance",
    description:
      "Optimized provider implementations with minimal runtime overhead.",
    className: "border-purple-100 bg-purple-50/50",
  },
  {
    title: "Less Boilerplate",
    description:
      "Write less code while getting more features like disposal, caching, and debugging.",
    className: "border-orange-100 bg-orange-50/50",
  },
];

const generationSteps = [
  {
    title: "Annotation Parsing",
    description:
      "build_runner scans your code for @riverpod annotations and analyzes the function signatures.",
  },
  {
    title: "Code Generation",
    description:
      "The generator creates provider classes, handles disposal logic, and generates type-safe accessors.",
  },
  {
    title: "File Output",
    description:
      "Generated code is written to *.g.dart files that are imported via part directives.",
  },
];

const workflowItems = [
  "Write your provider with @riverpod annotation",
  "Add the part directive",
  "Run dart run build_runner watch (runs continuously)",
  "Use the generated provider in your widgets",
  "Iterate and let build_runner handle regeneration",
];

const doItems = [
  "Use descriptive names for your providers",
  "Keep build_runner watch running during development",
  "Commit generated files to version control",
  "Use family providers for parameterized data",
];

const dontItems = [
  "Manually edit generated .g.dart files",
  "Forget to add part directives",
  "Run build_runner with --delete-conflicting-outputs unnecessarily",
  "Create providers inside widget build methods",
];

export default function CodegenOverviewPage() {
  return (
    <>
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Code Generation Overview
        </h1>
        <p className="text-base leading-7 text-slate-600">
          Riverpod&apos;s code generation feature uses annotations and
          build_runner to automatically create providers with better type
          safety, performance, and developer experience.
        </p>
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Why Code Generation?
          </h2>
          <p className="text-sm text-slate-600">
            Code generation offers several advantages over manual provider
            definitions:
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {advantages.map((item) => (
            <div
              key={item.title}
              className={`rounded-xl border p-5 ${item.className}`}
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            How It Works
          </h2>
          <p className="text-sm text-slate-600">
            The code generation process involves several steps that happen
            automatically when you run build_runner:
          </p>
        </div>

        <div className="space-y-4">
          {generationSteps.map((item, index) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-800">
                {index + 1}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Before and After
          </h2>
          <p className="text-sm text-slate-600">
            See the difference between manual and generated providers:
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-semibold text-slate-900">
            Manual Provider (Old Way)
          </h3>
        </div>

        <CodeBloack
          language="dart"
          fileName="counter_manual.dart"
          code={`final counterProvider = StateNotifierProvider<Counter, int>((ref) {
  return Counter();
});

class Counter extends StateNotifier<int> {
  Counter() : super(0);

  void increment() => state++;
  void decrement() => state--;
  void reset() => state = 0;
}

// Usage: ref.watch(counterProvider);
// Access notifier: ref.read(counterProvider.notifier);`}
        />

        <div className="space-y-3 pt-2">
          <h3 className="text-base font-semibold text-slate-900">
            Generated Provider (New Way)
          </h3>
        </div>

        <CodeBloack
          language="dart"
          fileName="counter.dart"
          code={`@riverpod
class Counter extends _$Counter {
  @override
  int build() => 0;

  void increment() => state++;
  void decrement() => state--;
  void reset() => state = 0;
}

// Generated automatically:
// - counterProvider (the provider itself)
// - Auto-disposal when unused
// - Type-safe access patterns
// - Debug information and inspector support`}
        />
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Generated Files Structure
          </h2>
          <p className="text-sm text-slate-600">
            Understanding what gets generated helps debug issues and optimize
            your providers:
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="counter.dart"
          code={`// counter.dart
part 'counter.g.dart';

@riverpod
class Counter extends _$Counter {
  // Your implementation
}

// counter.g.dart (Generated)
part of 'counter.dart';

final counterProvider = NotifierProvider<Counter, int>(Counter._);

class _$Counter extends Notifier<int> {
  // Generated implementation with disposal, caching, etc.
}

// Plus debugging extensions and type definitions`}
        />
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Development Workflow
          </h2>
          <p className="text-sm text-slate-600">
            The typical development workflow with code generation:
          </p>
        </div>

        <ol className="space-y-2 text-sm text-slate-700">
          {workflowItems.map((item, index) => (
            <li key={item} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="flex aspect-video items-center justify-center bg-amber-50 text-sm text-amber-600">
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
                <path d="m15 18-6-6 6-6" />
                <path d="M9 12h12" />
              </svg>
              Development Workflow Demo
            </div>
          </div>
          <div className="border-t border-slate-200 px-4 py-2 text-xs text-slate-500">
            Watch the complete development cycle from annotation to usage
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-900">
          Best Practices
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-5">
            <h3 className="text-sm font-semibold text-green-800">Do</h3>
            <ul className="mt-3 space-y-2 text-sm text-green-700">
              {doItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <h3 className="text-sm font-semibold text-red-800">Don&apos;t</h3>
            <ul className="mt-3 space-y-2 text-sm text-red-700">
              {dontItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Troubleshooting
          </h2>
          <p className="text-sm text-slate-600">Common issues and solutions:</p>
        </div>

        <div className="space-y-3">
          <details className="rounded-xl border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer text-sm font-semibold text-slate-900">
              Build runner isn&apos;t generating files
            </summary>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
              <p>Check that:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  You have{" "}
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                    riverpod_generator
                  </code>{" "}
                  in dev_dependencies
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  The{" "}
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                    part
                  </code>{" "}
                  directive is correct
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  No syntax errors in your provider code
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  Run{" "}
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                    flutter clean
                  </code>{" "}
                  and try again
                </li>
              </ul>
            </div>
          </details>

          <details className="rounded-xl border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer text-sm font-semibold text-slate-900">
              Part of errors in IDE
            </summary>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Usually means the generated file doesn&apos;t exist yet. Run{" "}
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                dart run build_runner build
              </code>{" "}
              to generate the missing files.
            </p>
          </details>

          <details className="rounded-xl border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer text-sm font-semibold text-slate-900">
              Generated code conflicts
            </summary>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Use{" "}
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                dart run build_runner build --delete-conflicting-outputs
              </code>{" "}
              to resolve conflicts, but be careful as this deletes existing
              generated files.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
