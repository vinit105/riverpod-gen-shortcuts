import DocsShell from "../../components/DocsShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code Generation Overview",
  description: "Understanding Riverpod code generation, build_runner, and annotation-based providers",
};

export default function CodegenOverviewPage() {
  return (
    <DocsShell>
      <h1>Code Generation Overview</h1>
      <p>
        Riverpod's code generation feature uses annotations and build_runner to
        automatically create providers with better type safety, performance, and
        developer experience.
      </p>

      <h2>Why Code Generation?</h2>
      <p>
        Code generation offers several advantages over manual provider
        definitions:
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-green-100 bg-green-50/50 p-5">
          <div className="mb-2 text-lg">✅</div>
          <h3 className="!mt-0 text-sm font-semibold text-gray-900">
            Automatic Disposal
          </h3>
          <p className="!mb-0 text-xs text-gray-600">
            Providers are automatically disposed when no longer needed,
            preventing memory leaks.
          </p>
        </div>
        <div className="rounded-lg border border-blue-100 bg-blue-50/50 p-5">
          <div className="mb-2 text-lg">🔒</div>
          <h3 className="!mt-0 text-sm font-semibold text-gray-900">
            Type Safety
          </h3>
          <p className="!mb-0 text-xs text-gray-600">
            Generated providers have perfect type inference and catch errors at
            compile time.
          </p>
        </div>
        <div className="rounded-lg border border-purple-100 bg-purple-50/50 p-5">
          <div className="mb-2 text-lg">⚡</div>
          <h3 className="!mt-0 text-sm font-semibold text-gray-900">
            Better Performance
          </h3>
          <p className="!mb-0 text-xs text-gray-600">
            Optimized provider implementations with minimal runtime overhead.
          </p>
        </div>
        <div className="rounded-lg border border-orange-100 bg-orange-50/50 p-5">
          <div className="mb-2 text-lg">🛠</div>
          <h3 className="!mt-0 text-sm font-semibold text-gray-900">
            Less Boilerplate
          </h3>
          <p className="!mb-0 text-xs text-gray-600">
            Write less code while getting more features like disposal, caching,
            and debugging.
          </p>
        </div>
      </div>

      <h2>How It Works</h2>
      <p>
        The code generation process involves several steps that happen
        automatically when you run build_runner:
      </p>

      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-800">
            1
          </div>
          <div>
            <h3 className="!mt-0">Annotation Parsing</h3>
            <p className="!mb-0 text-sm text-gray-600">
              build_runner scans your code for <code>@riverpod</code> annotations
              and analyzes the function signatures.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-800">
            2
          </div>
          <div>
            <h3 className="!mt-0">Code Generation</h3>
            <p className="!mb-0 text-sm text-gray-600">
              The generator creates provider classes, handles disposal logic,
              and generates type-safe accessors.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-800">
            3
          </div>
          <div>
            <h3 className="!mt-0">File Output</h3>
            <p className="!mb-0 text-sm text-gray-600">
              Generated code is written to <code>*.g.dart</code> files that are
              imported via <code>part</code> directives.
            </p>
          </div>
        </div>
      </div>

      <h2>Before and After</h2>
      <p>See the difference between manual and generated providers:</p>

      <h3>Manual Provider (Old Way)</h3>
      <pre>
        <code>{`final counterProvider = StateNotifierProvider<Counter, int>((ref) {
  return Counter();
});

class Counter extends StateNotifier<int> {
  Counter() : super(0);

  void increment() => state++;
  void decrement() => state--;
  void reset() => state = 0;
}

// Usage: ref.watch(counterProvider);
// Access notifier: ref.read(counterProvider.notifier);`}</code>
      </pre>

      <h3>Generated Provider (New Way)</h3>
      <pre>
        <code>{`@riverpod
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
// - Debug information and inspector support`}</code>
      </pre>

      <h2>Generated Files Structure</h2>
      <p>
        Understanding what gets generated helps debug issues and optimize your
        providers:
      </p>
      <pre>
        <code>{`// counter.dart
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

// Plus debugging extensions and type definitions`}</code>
      </pre>

      <h2>Development Workflow</h2>
      <p>
        The typical development workflow with code generation:
      </p>
      <ol>
        <li>Write your provider with <code>@riverpod</code> annotation</li>
        <li>Add the <code>part</code> directive</li>
        <li>Run <code>dart run build_runner watch</code> (runs continuously)</li>
        <li>Use the generated provider in your widgets</li>
        <li>Iterate and let build_runner handle regeneration</li>
      </ol>

      <div className="gif-container">
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
        <div className="media-caption">
          Watch the complete development cycle from annotation to usage
        </div>
      </div>

      <h2>Best Practices</h2>
      <div className="space-y-4">
        <div className="rounded-lg border border-gray-200 p-4">
          <h3 className="!mt-0 flex items-center gap-2 text-sm font-semibold">
            <span className="text-green-600">✅</span>
            Do
          </h3>
          <ul className="!mb-0 text-sm">
            <li>Use descriptive names for your providers</li>
            <li>Keep <code>build_runner watch</code> running during development</li>
            <li>Commit generated files to version control</li>
            <li>Use family providers for parameterized data</li>
          </ul>
        </div>
        <div className="rounded-lg border border-gray-200 p-4">
          <h3 className="!mt-0 flex items-center gap-2 text-sm font-semibold">
            <span className="text-red-600">❌</span>
            Don't
          </h3>
          <ul className="!mb-0 text-sm">
            <li>Manually edit generated <code>.g.dart</code> files</li>
            <li>Forget to add <code>part</code> directives</li>
            <li>Run build_runner with <code>--delete-conflicting-outputs</code> unnecessarily</li>
            <li>Create providers inside widget build methods</li>
          </ul>
        </div>
      </div>

      <h2>Troubleshooting</h2>
      <p>Common issues and solutions:</p>
      <div className="space-y-3">
        <details className="rounded-lg border border-gray-200 p-4">
          <summary className="cursor-pointer font-medium">
            Build runner isn't generating files
          </summary>
          <div className="mt-2 text-sm text-gray-600">
            <p>Check that:</p>
            <ul>
              <li>You have <code>riverpod_generator</code> in dev_dependencies</li>
              <li>The <code>part</code> directive is correct</li>
              <li>No syntax errors in your provider code</li>
              <li>Run <code>flutter clean</code> and try again</li>
            </ul>
          </div>
        </details>
        <details className="rounded-lg border border-gray-200 p-4">
          <summary className="cursor-pointer font-medium">
            "Part of" errors in IDE
          </summary>
          <div className="mt-2 text-sm text-gray-600">
            <p>
              Usually means the generated file doesn't exist yet. Run{" "}
              <code>dart run build_runner build</code> to generate the missing
              files.
            </p>
          </div>
        </details>
        <details className="rounded-lg border border-gray-200 p-4">
          <summary className="cursor-pointer font-medium">
            Generated code conflicts
          </summary>
          <div className="mt-2 text-sm text-gray-600">
            <p>
              Use{" "}
              <code>dart run build_runner build --delete-conflicting-outputs</code>{" "}
              to resolve conflicts, but be careful as this deletes existing
              generated files.
            </p>
          </div>
        </details>
      </div>
    </DocsShell>
  );
}