import DocsShell from "../../components/DocsShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Release history and updates for Riverpod Gen Shortcuts",
};

export default function ChangelogPage() {
  return (
    <DocsShell>
      <h1>Changelog</h1>
      <p>
        Track the evolution of Riverpod Gen Shortcuts with our complete release
        history, new features, bug fixes, and breaking changes.
      </p>

      <div className="space-y-8">
        {/* Version 2.1.0 */}
        <div className="rounded-lg border border-green-200 bg-green-50/50 p-6">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <h2 className="!mb-0 !mt-0">v2.1.0</h2>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
              Latest
            </span>
            <span className="text-sm text-gray-500">March 13, 2026</span>
          </div>

          <h3>🎉 New Features</h3>
          <ul>
            <li>Added IntelliJ IDEA live templates and snippets</li>
            <li>New VS Code extension with intelligent autocomplete</li>
            <li>Enhanced family provider shortcuts and generation</li>
            <li>Added testing utilities and mock generation</li>
            <li>Improved error handling in generated providers</li>
          </ul>

          <h3>🛠 Improvements</h3>
          <ul>
            <li>Better IDE integration with language servers</li>
            <li>Faster build_runner performance for large projects</li>
            <li>Enhanced documentation with video tutorials</li>
            <li>Improved type safety in generated code</li>
          </ul>

          <h3>🐛 Bug Fixes</h3>
          <ul>
            <li>Fixed code generation issues with generic types</li>
            <li>Resolved import conflicts in generated files</li>
            <li>Fixed family provider disposal edge cases</li>
          </ul>
        </div>

        {/* Version 2.0.0 */}
        <div className="rounded-lg border border-orange-200 bg-orange-50/50 p-6">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <h2 className="!mb-0 !mt-0">v2.0.0</h2>
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800">
              Breaking Changes
            </span>
            <span className="text-sm text-gray-500">February 15, 2026</span>
          </div>

          <h3>💥 Breaking Changes</h3>
          <ul>
            <li>Migrated to Riverpod 3.0 with new annotation syntax</li>
            <li>Updated minimum Flutter version to 3.16</li>
            <li>Restructured provider naming conventions</li>
            <li>Changed snippet triggers for better consistency</li>
          </ul>

          <h3>🎉 New Features</h3>
          <ul>
            <li>Full support for Riverpod 3.0 features</li>
            <li>New async notifier patterns and generators</li>
            <li>Enhanced stream provider code generation</li>
            <li>Added migration guide and automated tools</li>
          </ul>

          <h3>📚 Documentation</h3>
          <ul>
            <li>Complete rewrite of getting started guide</li>
            <li>Added migration documentation from 1.x</li>
            <li>New best practices section</li>
            <li>Expanded examples and use cases</li>
          </ul>
        </div>

        {/* Version 1.8.2 */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <h2 className="!mb-0 !mt-0">v1.8.2</h2>
            <span className="text-sm text-gray-500">January 28, 2026</span>
          </div>

          <h3>🐛 Bug Fixes</h3>
          <ul>
            <li>Fixed VS Code snippet activation issues</li>
            <li>Resolved build_runner conflicts with other generators</li>
            <li>Fixed provider disposal in complex dependency graphs</li>
          </ul>

          <h3>🛠 Improvements</h3>
          <ul>
            <li>Better error messages for common setup issues</li>
            <li>Improved performance for large provider graphs</li>
            <li>Enhanced compatibility with Flutter 3.16</li>
          </ul>
        </div>

        {/* Version 1.8.0 */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <h2 className="!mb-0 !mt-0">v1.8.0</h2>
            <span className="text-sm text-gray-500">December 10, 2025</span>
          </div>

          <h3>🎉 New Features</h3>
          <ul>
            <li>Added stream provider code generation</li>
            <li>New provider testing utilities</li>
            <li>Enhanced family provider support</li>
            <li>Added custom annotation support</li>
          </ul>

          <h3>📚 Documentation</h3>
          <ul>
            <li>Added comprehensive testing guide</li>
            <li>New performance optimization section</li>
            <li>Expanded FAQ with common issues</li>
          </ul>
        </div>

        {/* Version 1.7.0 */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <h2 className="!mb-0 !mt-0">v1.7.0</h2>
            <span className="text-sm text-gray-500">November 22, 2025</span>
          </div>

          <h3>🎉 New Features</h3>
          <ul>
            <li>VS Code snippets for all provider types</li>
            <li>Automatic import generation</li>
            <li>Provider dependency analysis tools</li>
            <li>Enhanced error handling patterns</li>
          </ul>

          <h3>🛠 Improvements</h3>
          <ul>
            <li>Faster code generation for complex providers</li>
            <li>Better integration with build_runner watch mode</li>
            <li>Improved generated code readability</li>
          </ul>
        </div>

        {/* Version 1.6.0 */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <h2 className="!mb-0 !mt-0">v1.6.0</h2>
            <span className="text-sm text-gray-500">October 15, 2025</span>
          </div>

          <h3>🎉 New Features</h3>
          <ul>
            <li>Initial release of code generation shortcuts</li>
            <li>Basic provider templates and snippets</li>
            <li>Documentation site and getting started guide</li>
            <li>Support for Future and Notifier providers</li>
          </ul>

          <h3>📚 Documentation</h3>
          <ul>
            <li>Complete installation guide</li>
            <li>Basic examples and tutorials</li>
            <li>Provider pattern explanations</li>
          </ul>
        </div>
      </div>

      <h2>Upcoming Features</h2>
      <p>
        Here's what we're working on for future releases. These are tentative
        and may change based on community feedback.
      </p>

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
        <h3 className="!mt-0">🚀 Roadmap v2.2.0</h3>
        <ul className="!mb-0">
          <li>Enhanced debugging tools and provider inspector</li>
          <li>Custom code generation templates</li>
          <li>Integration with popular state management patterns</li>
          <li>Advanced testing framework integration</li>
          <li>Performance profiling and optimization suggestions</li>
        </ul>
      </div>

      <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-6">
        <h3 className="!mt-0 text-lg font-semibold text-amber-800">
          📢 Stay Updated
        </h3>
        <p className="!mb-0 text-amber-700">
          Follow our{" "}
          <a href="https://github.com" className="font-semibold underline">
            GitHub repository
          </a>{" "}
          to get notified about new releases, or join our community discussions
          to influence the roadmap and request features.
        </p>
      </div>
    </DocsShell>
  );
}