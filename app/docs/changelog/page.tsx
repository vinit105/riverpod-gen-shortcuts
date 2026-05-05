import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Release history and updates for Riverpod Gen Shortcuts",
};

const releases = [
  {
    version: "v2.1.0",
    date: "March 13, 2026",
    badge: "Latest",
    className: "border-green-200 bg-green-50/50",
    badgeClassName: "bg-green-100 text-green-800",
    sections: [
      {
        title: "New Features",
        items: [
          "Added IntelliJ IDEA live templates and snippets",
          "New VS Code extension with intelligent autocomplete",
          "Enhanced family provider shortcuts and generation",
          "Added testing utilities and mock generation",
          "Improved error handling in generated providers",
        ],
      },
      {
        title: "Improvements",
        items: [
          "Better IDE integration with language servers",
          "Faster build_runner performance for large projects",
          "Enhanced documentation with video tutorials",
          "Improved type safety in generated code",
        ],
      },
      {
        title: "Bug Fixes",
        items: [
          "Fixed code generation issues with generic types",
          "Resolved import conflicts in generated files",
          "Fixed family provider disposal edge cases",
        ],
      },
    ],
  },
  {
    version: "v2.0.0",
    date: "February 15, 2026",
    badge: "Breaking Changes",
    className: "border-orange-200 bg-orange-50/50",
    badgeClassName: "bg-orange-100 text-orange-800",
    sections: [
      {
        title: "Breaking Changes",
        items: [
          "Migrated to Riverpod 3.0 with new annotation syntax",
          "Updated minimum Flutter version to 3.16",
          "Restructured provider naming conventions",
          "Changed snippet triggers for better consistency",
        ],
      },
      {
        title: "New Features",
        items: [
          "Full support for Riverpod 3.0 features",
          "New async notifier patterns and generators",
          "Enhanced stream provider code generation",
          "Added migration guide and automated tools",
        ],
      },
      {
        title: "Documentation",
        items: [
          "Complete rewrite of getting started guide",
          "Added migration documentation from 1.x",
          "New best practices section",
          "Expanded examples and use cases",
        ],
      },
    ],
  },
  {
    version: "v1.8.2",
    date: "January 28, 2026",
    className: "border-slate-200 bg-white",
    sections: [
      {
        title: "Bug Fixes",
        items: [
          "Fixed VS Code snippet activation issues",
          "Resolved build_runner conflicts with other generators",
          "Fixed provider disposal in complex dependency graphs",
        ],
      },
      {
        title: "Improvements",
        items: [
          "Better error messages for common setup issues",
          "Improved performance for large provider graphs",
          "Enhanced compatibility with Flutter 3.16",
        ],
      },
    ],
  },
  {
    version: "v1.8.0",
    date: "December 10, 2025",
    className: "border-slate-200 bg-white",
    sections: [
      {
        title: "New Features",
        items: [
          "Added stream provider code generation",
          "New provider testing utilities",
          "Enhanced family provider support",
          "Added custom annotation support",
        ],
      },
      {
        title: "Documentation",
        items: [
          "Added comprehensive testing guide",
          "New performance optimization section",
          "Expanded FAQ with common issues",
        ],
      },
    ],
  },
  {
    version: "v1.7.0",
    date: "November 22, 2025",
    className: "border-slate-200 bg-white",
    sections: [
      {
        title: "New Features",
        items: [
          "VS Code snippets for all provider types",
          "Automatic import generation",
          "Provider dependency analysis tools",
          "Enhanced error handling patterns",
        ],
      },
      {
        title: "Improvements",
        items: [
          "Faster code generation for complex providers",
          "Better integration with build_runner watch mode",
          "Improved generated code readability",
        ],
      },
    ],
  },
  {
    version: "v1.6.0",
    date: "October 15, 2025",
    className: "border-slate-200 bg-white",
    sections: [
      {
        title: "New Features",
        items: [
          "Initial release of code generation shortcuts",
          "Basic provider templates and snippets",
          "Documentation site and getting started guide",
          "Support for Future and Notifier providers",
        ],
      },
      {
        title: "Documentation",
        items: [
          "Complete installation guide",
          "Basic examples and tutorials",
          "Provider pattern explanations",
        ],
      },
    ],
  },
];

const roadmapItems = [
  "Enhanced debugging tools and provider inspector",
  "Custom code generation templates",
  "Integration with popular state management patterns",
  "Advanced testing framework integration",
  "Performance profiling and optimization suggestions",
];

function ReleaseList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 text-sm text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ChangelogPage() {
  return (
    <>
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Changelog
        </h1>
        <p className="text-base leading-7 text-slate-600">
          Track the evolution of Riverpod Gen Shortcuts with our complete
          release history, new features, bug fixes, and breaking changes.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-900">
          Release History
        </h2>

        <div className="space-y-5">
          {releases.map((release) => (
            <article
              key={release.version}
              className={`rounded-xl border p-6 ${release.className}`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold text-slate-900">
                  {release.version}
                </h3>
                {release.badge ? (
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${release.badgeClassName}`}
                  >
                    {release.badge}
                  </span>
                ) : null}
                <span className="text-sm text-slate-500">{release.date}</span>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {release.sections.map((section) => (
                  <div key={section.title}>
                    <h4 className="text-sm font-semibold text-slate-900">
                      {section.title}
                    </h4>
                    <ReleaseList items={section.items} />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Upcoming Features
          </h2>
          <p className="text-sm leading-6 text-slate-600">
            Here&apos;s what we&apos;re working on for future releases. These
            are tentative and may change based on community feedback.
          </p>
        </div>

        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-lg font-semibold text-blue-800">
            Roadmap v2.2.0
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-blue-700">
            {roadmapItems.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="text-lg font-semibold text-amber-800">
            Stay Updated
          </h3>
          <p className="mt-2 text-sm leading-6 text-amber-700">
            Follow our{" "}
            <a href="https://github.com" className="font-semibold underline">
              GitHub repository
            </a>{" "}
            to get notified about new releases, or join our community
            discussions to influence the roadmap and request features.
          </p>
        </div>
      </section>
    </>
  );
}
