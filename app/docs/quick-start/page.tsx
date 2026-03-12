import DocsShell from "../../components/DocsShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Start",
  description: "Build your first Riverpod provider in minutes",
};

export default function QuickStartPage() {
  return (
    <DocsShell>
      <h1>Quick Start</h1>
      <p>
        Build your first Riverpod provider with code generation in under 5
        minutes. This tutorial walks you through creating a simple counter app.
      </p>

      <h2>Create Your First Provider</h2>
      <p>
        Create a new file <code>lib/providers/counter.dart</code> and add this
        code:
      </p>
      <pre>
        <code>{`import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'counter.g.dart';

@riverpod
class Counter extends _$Counter {
  @override
  int build() => 0;

  void increment() => state++;
  void decrement() => state--;
  void reset() => state = 0;
}`}</code>
      </pre>

      <h2>Generate the Provider</h2>
      <p>Run build_runner to generate the provider code:</p>
      <pre>
        <code>dart run build_runner build</code>
      </pre>

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
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l4 4 4-4" />
            </svg>
            Build Runner in Action
          </div>
        </div>
        <div className="media-caption">
          Watch build_runner generate your provider files automatically
        </div>
      </div>

      <h2>Use in Your Widget</h2>
      <p>Now use the generated provider in your Flutter widget:</p>
      <pre>
        <code>{`import 'package:flutter/material.dart';
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
}`}</code>
      </pre>

      <h2>What Just Happened?</h2>
      <p>In just a few lines of code, you:</p>
      <ul>
        <li>✅ Created a type-safe state provider</li>
        <li>✅ Generated all the boilerplate code automatically</li>
        <li>✅ Built a reactive UI that updates when state changes</li>
        <li>✅ Added methods to modify state safely</li>
      </ul>

      <h2>Next Steps</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-amber-100 bg-amber-50/50 p-4">
          <h3 className="!mt-0 text-sm font-semibold">Explore Provider Types</h3>
          <p className="!mb-0 text-xs">
            Learn about FutureProvider, StreamProvider, and other provider types
            for different use cases.
          </p>
        </div>
        <div className="rounded-lg border border-orange-100 bg-orange-50/50 p-4">
          <h3 className="!mt-0 text-sm font-semibold">Code Shortcuts</h3>
          <p className="!mb-0 text-xs">
            Discover IDE snippets and shortcuts to create providers even faster.
          </p>
        </div>
      </div>
    </DocsShell>
  );
}