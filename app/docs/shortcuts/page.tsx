import { Metadata } from "next";
import CodeBloack from "../../components/CodeBloack";

export const metadata: Metadata = {
  title: "Shortcuts & Snippets",
  description: "IDE shortcuts and code snippets for faster Riverpod development",
};

const providerSnippets = [
  {
    prefix: "rprov",
    title: "Basic Provider",
    fileName: "provider.dart",
    code: `@riverpod
ReturnType providerName(ProviderNameRef ref) {
  return value;
}`,
  },
  {
    prefix: "rnotifier",
    title: "Notifier Class",
    fileName: "notifier.dart",
    code: `@riverpod
class ClassName extends _$ClassName {
  @override
  StateType build() {
    return initialState;
  }
}`,
  },
  {
    prefix: "rfuture",
    title: "Future Provider",
    fileName: "future_provider.dart",
    code: `@riverpod
Future<ReturnType> providerName(ProviderNameRef ref) async {
  return await asyncOperation();
}`,
  },
  {
    prefix: "rstream",
    title: "Stream Provider",
    fileName: "stream_provider.dart",
    code: `@riverpod
Stream<ReturnType> providerName(ProviderNameRef ref) async* {
  yield* streamSource();
}`,
  },
];

const familySnippets = [
  {
    prefix: "rfamily",
    title: "Family Provider",
    fileName: "family_provider.dart",
    code: `@riverpod
ReturnType providerName(ProviderNameRef ref, ParamType param) {
  return computeValue(param);
}`,
  },
  {
    prefix: "rfamnotifier",
    title: "Family Notifier",
    fileName: "family_notifier.dart",
    code: `@riverpod
class ClassName extends _$ClassName {
  @override
  StateType build(ParamType param) {
    return initialState(param);
  }
}`,
  },
];

const shortcuts = [
  {
    action: "Build Runner",
    vscode: "Ctrl+Shift+P -> build_runner",
    intellij: "Ctrl+Alt+B",
  },
  {
    action: "Generate Part File",
    vscode: "Ctrl+. -> Add part directive",
    intellij: "Alt+Enter",
  },
  {
    action: "Import Riverpod",
    vscode: "Ctrl+Space auto-import",
    intellij: "Alt+Enter",
  },
];

const customSnippetSteps = [
  "Go to File > Preferences > Configure User Snippets",
  "Select dart.json or create a new snippet file",
  "Add your custom snippet configuration",
];

const proTips = [
  "Use Ctrl+Space to trigger IntelliSense completion",
  "Set up auto-imports to reduce manual import statements",
  "Create project-specific snippets for your common patterns",
  "Use multi-cursor editing for bulk provider creation",
];

export default function ShortcutsPage() {
  return (
    <>
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Shortcuts & Snippets
        </h1>
        <p className="text-base leading-7 text-slate-600">
          Speed up your Riverpod development with these IDE shortcuts and code
          snippets. Available for VS Code, IntelliJ IDEA, and Android Studio.
        </p>
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            VS Code Snippets
          </h2>
          <p className="text-sm text-slate-600">
            Type these prefixes in VS Code and press{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
              Tab
            </code>{" "}
            to expand:
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-base font-semibold text-slate-900">
            Provider Snippets
          </h3>

          <div className="space-y-5">
            {providerSnippets.map((snippet) => (
              <div
                key={snippet.prefix}
                className="space-y-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <code className="rounded bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-700">
                    {snippet.prefix}
                  </code>
                  <span className="text-xs text-slate-500">
                    {snippet.title}
                  </span>
                </div>
                <CodeBloack
                  language="dart"
                  fileName={snippet.fileName}
                  code={snippet.code}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-900">
          Family Providers
        </h2>

        <div className="space-y-5">
          {familySnippets.map((snippet) => (
            <div
              key={snippet.prefix}
              className="space-y-3 rounded-xl border border-slate-200 bg-white p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <code className="rounded bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-700">
                  {snippet.prefix}
                </code>
                <span className="text-xs text-slate-500">{snippet.title}</span>
              </div>
              <CodeBloack
                language="dart"
                fileName={snippet.fileName}
                code={snippet.code}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            IntelliJ/Android Studio Templates
          </h2>
          <p className="text-sm leading-6 text-slate-600">
            Live templates for JetBrains IDEs. Go to{" "}
            <strong>Settings &gt; Editor &gt; Live Templates</strong> and import
            our template set.
          </p>
        </div>

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
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10,9 9,9 8,9" />
              </svg>
              Live Template Demo
            </div>
          </div>
          <div className="border-t border-slate-200 px-4 py-2 text-xs text-slate-500">
            Using live templates in IntelliJ IDEA to generate provider code
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Keyboard Shortcuts
          </h2>
          <p className="text-sm text-slate-600">
            Essential keyboard shortcuts for Riverpod development:
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                {["Action", "VS Code", "IntelliJ"].map((heading) => (
                  <th
                    key={heading}
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.16em] text-slate-500"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {shortcuts.map((item) => (
                <tr key={item.action}>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">
                    {item.action}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600">
                    <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                      {item.vscode}
                    </code>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600">
                    <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                      {item.intellij}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Custom Snippets
          </h2>
          <p className="text-sm leading-6 text-slate-600">
            Create your own custom snippets for common patterns in your project.
            Here&apos;s how to add custom VS Code snippets:
          </p>
        </div>

        <ol className="space-y-2 text-sm text-slate-700">
          {customSnippetSteps.map((item, index) => (
            <li key={item} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-lg font-semibold text-blue-800">Pro Tips</h3>
          <ul className="mt-3 space-y-2 text-sm text-blue-700">
            {proTips.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
