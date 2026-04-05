import DocsShell from "../../components/DocsShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "StateProvider",
  description: "Manage simple states with StateProvider in Riverpod",
};

export default function StateProviderPage() {
  return (
    <DocsShell
      title="StateProvider"
      description="StateProvider is useful for managing simple, synchronous pieces of state without writing a full Notifier."
    >
      <div className="prose prose-amber dark:prose-invert max-w-none">
        <p>
          StateProvider exists to provide a simple way to store and update simple variables 
          like an integer, a string, or a boolean. With Riverpod Generator, you typically 
          use a simple function or a minimal Notifier that exposes a synchronous value.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          When to Use StateProvider
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Managing filters or simple toggle states (like a theme toggle)</li>
          <li>Storing user input from UI before submission</li>
          <li>Holding a selected index for a bottom navigation bar</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          Basic Syntax with Generator
        </h2>
        <p>Using the Riverpod Generator, the equivalent of a StateProvider is often just a simple Notifier class:</p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'counter.g.dart';

@riverpod
class Counter extends _$Counter {
  @override
  int build() => 0;

  void increment() => state++;
  void decrement() => state--;
}`}</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          Using in Widgets
        </h2>
        <p>
          Read the state with <code>ref.watch</code> and update it using the methods on the notifier:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`class CounterWidget extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final count = ref.watch(counterProvider);
    
    return Column(
      children: [
        Text('Count: $count'),
        ElevatedButton(
          onPressed: () => ref.read(counterProvider.notifier).increment(),
          child: Text('Increment'),
        ),
      ],
    );
  }
}`}</code>
        </pre>

        <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h3 className="!mt-0 text-lg font-semibold text-blue-800">
            💡 Pro Tip
          </h3>
          <p className="!mb-0 text-blue-700">
            While older versions of Riverpod heavily used <code>StateProvider</code> directly, the recommended approach with Riverpod Generator 
            is to use a generated <code>Notifier</code>. It provides better encapsulation and allows you to add complex logic later without breaking the API.
          </p>
        </div>
      </div>
    </DocsShell>
  );
}