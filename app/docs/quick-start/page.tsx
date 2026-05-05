import { Metadata } from "next";
import CodeBloack from "../../components/CodeBloack";

export const metadata: Metadata = {
  title: "Quick Start",
  description: "Build your first Riverpod provider in minutes",
};

const happenedItems = [
  "Created a type-safe state provider",
  "Generated all the boilerplate code automatically",
  "Built a reactive UI that updates when state changes",
  "Added methods to modify state safely",
];

export default function QuickStartPage() {
  return (
    <>
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Quick Start
        </h1>
        <p className="text-base leading-7 text-slate-600">
          Build your first Riverpod provider with code generation in under 5
          minutes. This tutorial walks you through creating a simple counter app.
        </p>
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Create Your First Provider
          </h2>
          <p className="text-sm text-slate-600">
            Create a new file{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
              lib/providers/counter.dart
            </code>{" "}
            and add this code:
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="lib/providers/counter.dart"
          code={`import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'counter.g.dart';

@riverpod
class Counter extends _$Counter {
  @override
  int build() => 0;

  void increment() => state++;
  void decrement() => state--;
  void reset() => state = 0;
}`}
        />
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Generate the Provider
          </h2>
          <p className="text-sm text-slate-600">
            Run build_runner to generate the provider code:
          </p>
        </div>

        <CodeBloack
          language="bash"
          fileName="terminal"
          code="dart run build_runner build"
        />

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
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l4 4 4-4" />
              </svg>
              Build Runner in Action
            </div>
          </div>
          <div className="border-t border-slate-200 px-4 py-2 text-xs text-slate-500">
            Watch build_runner generate your provider files automatically
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Use in Your Widget
          </h2>
          <p className="text-sm text-slate-600">
            Now use the generated provider in your Flutter widget:
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="counter_widget.dart"
          code={`import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'providers/counter.dart';

class CounterWidget extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final count = ref.watch(counterProvider);
    final counterNotifier = ref.read(counterProvider.notifier);

    return Scaffold(
      appBar: AppBar(title: Text('Counter: $count')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Count: $count', style: Theme.of(context).textTheme.headlineMedium),
            SizedBox(height: 20),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  onPressed: counterNotifier.decrement,
                  child: Text('-'),
                ),
                ElevatedButton(
                  onPressed: counterNotifier.reset,
                  child: Text('Reset'),
                ),
                ElevatedButton(
                  onPressed: counterNotifier.increment,
                  child: Text('+'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}`}
        />
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            What Just Happened?
          </h2>
          <p className="text-sm text-slate-600">
            In just a few lines of code, you:
          </p>
        </div>

        <ul className="space-y-2 text-sm text-slate-700">
          {happenedItems.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-900">Next Steps</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-5">
            <h3 className="text-sm font-semibold text-slate-900">
              Explore Provider Types
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Learn about FutureProvider, StreamProvider, and other provider
              types for different use cases.
            </p>
          </div>
          <div className="rounded-xl border border-orange-100 bg-orange-50/50 p-5">
            <h3 className="text-sm font-semibold text-slate-900">
              Code Shortcuts
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Discover IDE snippets and shortcuts to create providers even
              faster.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
