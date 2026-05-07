import DocsShell from "../../components/DocsShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annotations",
  description: "Learn about the @riverpod and @Riverpod annotations in Riverpod Generator",
};

export default function AnnotationsPage() {
  return (
    <DocsShell
      title="Annotations"
      description="The cornerstone of Riverpod Generator: configuring generated providers using the @riverpod and @Riverpod annotations."
    >
      <div className="prose prose-amber dark:prose-invert max-w-none">
        <p>
          Annotations dictate exactly how a provider behaves, such as managing whether 
          dependencies are disposed, whether the provider accepts parameters, or controlling 
          how long cached data should persist. Riverpod essentially relies on these meta-tags 
          via <code>build_runner</code>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          The <code>@riverpod</code> Shorthand
        </h2>
        <p>By default, applying <code>@riverpod</code> generates an <b>AutoDispose</b> provider. This is the recommended approach for most providers.</p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'example.g.dart';

// Generates AutoDisposeProvider
@riverpod
String welcomeMessage(WelcomeMessageRef ref) {
  return 'Hello, Riverpod Generator!';
}`}</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          The <code>@Riverpod(keepAlive: true)</code> Annotation
        </h2>
        <p>
          If you want a provider to persist indefinitely (e.g., global configuration, 
          services, app settings) and never auto-dispose, use <code>@Riverpod()</code> 
          with <code>keepAlive</code> explicitly set to <code>true</code>.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`@Riverpod(keepAlive: true)
Future<UserPreferences> sharedPrefs(SharedPrefsRef ref) async {
  final prefs = await SharedPreferences.getInstance();
  return UserPreferences(prefs);
}`}</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          The <code>dependencies</code> Array
        </h2>
        <p>
          Sometimes for testing or overriding specific global dependencies, Riverpod needs 
          to know exactly which other providers this one depends on explicitly. You can define 
          that in the annotation:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`@Riverpod(dependencies: [authServiceProvider])
UserRepository userRepository(UserRepositoryRef ref) {
  return UserRepository(ref.watch(authServiceProvider));
}`}</code>
        </pre>

        <div className="mt-8 rounded-lg border border-yellow-200 bg-yellow-50 p-6">
          <h3 className="!mt-0 text-lg font-semibold text-yellow-800">
            Note on Build Runner Output
          </h3>
          <p className="!mb-0 text-yellow-700">
            The generator automatically handles naming conventions by extracting the 
            camelCase function name or class name, appending `Provider`, and formatting 
            it neatly in the <code>.g.dart</code> file.
          </p>
        </div>
      </div>
    </DocsShell>
  );
}