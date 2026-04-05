import DocsShell from "../../components/DocsShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Migration Guide",
  description: "Upgrading from older Riverpod architectures to Riverpod Generator",
};

export default function MigrationGuidePage() {
  return (
    <DocsShell
      title="Migration Guide"
      description="The ultimate steps to migrating existing legacy codebases over to Riverpod Generator."
    >
      <div className="prose prose-amber dark:prose-invert max-w-none">
        <p>
          Migrating directly from standard Riverpod to Riverpod Generator is easier than 
          expected thanks to automated migration tools and similar syntax logic. 
          Use this guide to translate specific provider concepts correctly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          StateProvider to Notifier
        </h2>
        <p><strong>Pre-migration:</strong></p>
        <pre className="bg-red-50 border-red-200 border p-4 rounded-lg overflow-x-auto text-sm text-red-900 mb-4">
          <code>{`final themeProvider = StateProvider<ThemeMode>((ref) => ThemeMode.system);`}</code>
        </pre>
        <p><strong>Post-migration:</strong></p>
        <pre className="bg-green-50 border-green-200 border p-4 rounded-lg overflow-x-auto text-sm text-green-900 mb-4">
          <code>{`import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'theme_mode.g.dart';

@riverpod
class ThemeModeNotifier extends _$ThemeModeNotifier {
  @override
  ThemeMode build() => ThemeMode.system;

  void toggle(ThemeMode mode) => state = mode;
}`}</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          StateNotifier to Notifier
        </h2>
        <p><strong>Pre-migration:</strong></p>
        <pre className="bg-red-50 border-red-200 border p-4 rounded-lg overflow-x-auto text-sm text-red-900 mb-4">
          <code>{`final cartProvider = StateNotifierProvider<CartNotifier, List<Item>>((ref) {
  return CartNotifier();
});

class CartNotifier extends StateNotifier<List<Item>> {
  CartNotifier() : super([]);
  // ... methods
}`}</code>
        </pre>
        <p><strong>Post-migration:</strong></p>
        <pre className="bg-green-50 border-green-200 border p-4 rounded-lg overflow-x-auto text-sm text-green-900 mb-4">
          <code>{`import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'cart.g.dart';

@riverpod
class CartNotifier extends _$CartNotifier {
  @override
  List<Item> build() => [];
  
  // ... methods (state is explicitly accessible via \`state = \`)
}`}</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          The Automation Tool
        </h2>
        <p>
          Riverpod author Remi Rousselet created a migration CLI to automatically parse 
          legacy code into Riverpod Generator code. While imperfect, it severely reduces 
          migration time.
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Step 1:</strong> Upgrade <code>flutter_riverpod</code>, <code>riverpod</code>.</li>
          <li><strong>Step 2:</strong> Add <code>riverpod_generator</code> and <code>riverpod_annotation</code> to your <code>pubspec.yaml</code>.</li>
          <li><strong>Step 3:</strong> Use <code>dart run custom_lint</code> (with Riverpod lint active).</li>
          <li><strong>Step 4:</strong> Apply quick fixes provided by the linter directly in VS Code.</li>
        </ul>

      </div>
    </DocsShell>
  );
}