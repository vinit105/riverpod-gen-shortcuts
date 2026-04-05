import DocsShell from "../../components/DocsShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Runner",
  description: "Execute code generation with build_runner for Riverpod Generator",
};

export default function BuildRunnerPage() {
  return (
    <DocsShell
      title="Build Runner"
      description="Learn how to generate code successfully via Flutter's build_runner package."
    >
      <div className="prose prose-amber dark:prose-invert max-w-none">
        <p>
          Riverpod Generator relies completely on the Dart <code>build_runner</code> 
          ecosystem. Without it, your syntax remains unresolved, and the generated 
          files (<code>*.g.dart</code>) are simply missing.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          Running the Generator Once
        </h2>
        <p>Run code generation one time after making substantial file changes:</p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>dart run build_runner build -d</code>
        </pre>
        <p className="text-sm mt-2 text-gray-500 italic">
          Note: <code>-d</code> or <code>--delete-conflicting-outputs</code> is highly 
          recommended to resolve file conflicts gracefully.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          Running the Generator Continuously (Watch)
        </h2>
        <p>
          Instead of constantly rebuilding, run the watcher. It regenerates files 
          on the fly as you code, saving massive amounts of time.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>dart run build_runner watch -d</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          Troubleshooting Build Failures
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Outdated dependencies:</strong> Run <code>flutter clean</code> and <code>flutter pub get</code> to refresh your Dart cache.</li>
          <li><strong>Missing <code>part</code> declarations:</strong> The generator expects <code>part &apos;filename.g.dart&apos;;</code> at the top of your Dart file.</li>
          <li><strong>Syntax errors:</strong> If the source file has syntax errors, the build step might fail silently. Check your Dart Analyzer output.</li>
          <li><strong>Stale files:</strong> ALWAYS append the <code>-d</code> flag to prevent conflicting generated output issues.</li>
        </ul>

      </div>
    </DocsShell>
  );
}