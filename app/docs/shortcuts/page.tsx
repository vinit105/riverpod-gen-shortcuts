import DocsShell from "../../components/DocsShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shortcuts & Snippets",
  description: "IDE shortcuts and code snippets for faster Riverpod development",
};

export default function ShortcutsPage() {
  return (
    <DocsShell>
      <h1>Shortcuts & Snippets</h1>
      <p>
        Speed up your Riverpod development with these IDE shortcuts and code
        snippets. Available for VS Code, IntelliJ IDEA, and Android Studio.
      </p>

      <h2>VS Code Snippets</h2>
      <p>
        Type these prefixes in VS Code and press <code>Tab</code> to expand:
      </p>

      <h3>Provider Snippets</h3>
      <div className="space-y-4">
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="mb-2 flex items-center justify-between">
            <code className="font-semibold text-amber-700">rprov</code>
            <span className="text-xs text-gray-500">Basic Provider</span>
          </div>
          <pre className="text-sm">
            <code>{`@riverpod
ReturnType providerName(ProviderNameRef ref) {
  return value;
}`}</code>
          </pre>
        </div>

        <div className="rounded-lg border border-gray-200 p-4">
          <div className="mb-2 flex items-center justify-between">
            <code className="font-semibold text-amber-700">rnotifier</code>
            <span className="text-xs text-gray-500">Notifier Class</span>
          </div>
          <pre className="text-sm">
            <code>{`@riverpod
class ClassName extends _$ClassName {
  @override
  StateType build() {
    return initialState;
  }
}`}</code>
          </pre>
        </div>

        <div className="rounded-lg border border-gray-200 p-4">
          <div className="mb-2 flex items-center justify-between">
            <code className="font-semibold text-amber-700">rfuture</code>
            <span className="text-xs text-gray-500">Future Provider</span>
          </div>
          <pre className="text-sm">
            <code>{`@riverpod
Future<ReturnType> providerName(ProviderNameRef ref) async {
  return await asyncOperation();
}`}</code>
          </pre>
        </div>

        <div className="rounded-lg border border-gray-200 p-4">
          <div className="mb-2 flex items-center justify-between">
            <code className="font-semibold text-amber-700">rstream</code>
            <span className="text-xs text-gray-500">Stream Provider</span>
          </div>
          <pre className="text-sm">
            <code>{`@riverpod
Stream<ReturnType> providerName(ProviderNameRef ref) async* {
  yield* streamSource();
}`}</code>
          </pre>
        </div>
      </div>

      <h3>Family Providers</h3>
      <div className="space-y-4">
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="mb-2 flex items-center justify-between">
            <code className="font-semibold text-amber-700">rfamily</code>
            <span className="text-xs text-gray-500">Family Provider</span>
          </div>
          <pre className="text-sm">
            <code>{`@riverpod
ReturnType providerName(ProviderNameRef ref, ParamType param) {
  return computeValue(param);
}`}</code>
          </pre>
        </div>

        <div className="rounded-lg border border-gray-200 p-4">
          <div className="mb-2 flex items-center justify-between">
            <code className="font-semibold text-amber-700">rfamnotifier</code>
            <span className="text-xs text-gray-500">Family Notifier</span>
          </div>
          <pre className="text-sm">
            <code>{`@riverpod
class ClassName extends _$ClassName {
  @override
  StateType build(ParamType param) {
    return initialState(param);
  }
}`}</code>
          </pre>
        </div>
      </div>

      <h2>IntelliJ/Android Studio Templates</h2>
      <p>
        Live templates for JetBrains IDEs. Go to <strong>Settings &gt; Editor &gt; Live
        Templates</strong> and import our template set.
      </p>

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
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14,2 14,8 20,8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10,9 9,9 8,9" />
            </svg>
            Live Template Demo
          </div>
        </div>
        <div className="media-caption">
          Using live templates in IntelliJ IDEA to generate provider code
        </div>
      </div>

      <h2>Keyboard Shortcuts</h2>
      <p>Essential keyboard shortcuts for Riverpod development:</p>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="border-b border-gray-200 px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Action
              </th>
              <th className="border-b border-gray-200 px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                VS Code
              </th>
              <th className="border-b border-gray-200 px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                IntelliJ
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr>
              <td className="px-4 py-2 text-sm">Build Runner</td>
              <td className="px-4 py-2">
                <code className="text-xs">Ctrl+Shift+P</code> → "build_runner"
              </td>
              <td className="px-4 py-2">
                <code className="text-xs">Ctrl+Alt+B</code>
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-2 text-sm">Generate Part File</td>
              <td className="px-4 py-2">
                <code className="text-xs">Ctrl+.</code> → Add part directive
              </td>
              <td className="px-4 py-2">
                <code className="text-xs">Alt+Enter</code>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm">Import Riverpod</td>
              <td className="px-4 py-2">
                <code className="text-xs">Ctrl+Space</code> auto-import
              </td>
              <td className="px-4 py-2">
                <code className="text-xs">Alt+Enter</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Custom Snippets</h2>
      <p>
        Create your own custom snippets for common patterns in your project.
        Here's how to add custom VS Code snippets:
      </p>
      <ol>
        <li>Go to <strong>File &gt; Preferences &gt; Configure User Snippets</strong></li>
        <li>Select <strong>dart.json</strong> or create a new snippet file</li>
        <li>Add your custom snippet configuration</li>
      </ol>

      <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
        <h3 className="!mt-0 text-lg font-semibold text-blue-800">
          💡 Pro Tips
        </h3>
        <ul className="!mb-0 space-y-1 text-blue-700">
          <li>Use <code>Ctrl+Space</code> to trigger IntelliSense completion</li>
          <li>Set up auto-imports to reduce manual import statements</li>
          <li>Create project-specific snippets for your common patterns</li>
          <li>Use multi-cursor editing for bulk provider creation</li>
        </ul>
      </div>
    </DocsShell>
  );
}