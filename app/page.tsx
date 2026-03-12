import Image from "next/image";
import Link from "next/link";
import DocsShell from "./components/DocsShell";

export default function Home() {
  return (
    <DocsShell>
      {/* Hero */}
      <div className="mb-10">
        <div className="mb-6 flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Riverpod Gen Shortcuts"
            width={48}
            height={48}
            className="rounded-lg"
          />
          <div>
            <h1 className="!mb-0 !border-0 !pb-0">Riverpod Gen Shortcuts</h1>
            <p className="!mb-0 mt-1 text-sm text-amber-700">
              Flutter code generation made effortless
            </p>
          </div>
        </div>

        <p>
          Supercharge your Flutter development with Riverpod code generation
          shortcuts. Create providers, notifiers, and state management
          boilerplate in seconds with smart snippets and automation tools.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/docs/installation"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:from-amber-600 hover:to-orange-600 hover:shadow-md"
          >
            Get Started
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-amber-200 hover:bg-amber-50"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>

      {/* Quick overview cards */}
      <h2>What&apos;s Inside</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-5">
          <div className="mb-2 text-lg">⚡</div>
          <h3 className="!mt-0 text-sm font-semibold text-gray-900">
            Quick Snippets
          </h3>
          <p className="!mb-0 text-xs text-gray-600">
            Type a short prefix and get full provider boilerplate instantly with
            IDE snippets.
          </p>
        </div>
        <div className="rounded-xl border border-orange-100 bg-orange-50/50 p-5">
          <div className="mb-2 text-lg">🔧</div>
          <h3 className="!mt-0 text-sm font-semibold text-gray-900">
            Code Generation
          </h3>
          <p className="!mb-0 text-xs text-gray-600">
            Leverage build_runner and riverpod_generator for type-safe,
            compile-time checked providers.
          </p>
        </div>
        <div className="rounded-xl border border-yellow-100 bg-yellow-50/50 p-5">
          <div className="mb-2 text-lg">📚</div>
          <h3 className="!mt-0 text-sm font-semibold text-gray-900">
            Full Documentation
          </h3>
          <p className="!mb-0 text-xs text-gray-600">
            Every provider type documented with examples, GIFs, and video
            walkthroughs.
          </p>
        </div>
        <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-5">
          <div className="mb-2 text-lg">🧪</div>
          <h3 className="!mt-0 text-sm font-semibold text-gray-900">
            Testing Guides
          </h3>
          <p className="!mb-0 text-xs text-gray-600">
            Learn how to test riverpod providers with overrides, mocks, and
            integration tests.
          </p>
        </div>
      </div>

      {/* Example media sections to show the layout works */}
      <h2>Demo: Media Support</h2>
      <p>
        This documentation supports images, GIFs, and video embeds to make
        learning visual and easy to follow.
      </p>

      {/* Image example */}
      <div className="media-container">
        <img src="/logo.png" alt="Project logo example" />
        <div className="media-caption">
          Example image — replace with your screenshots
        </div>
      </div>

      {/* GIF example */}
      <div className="gif-container">
        <img src="/logo.png" alt="GIF demo placeholder" />
        <div className="media-caption">
          Example GIF — great for showing shortcuts in action
        </div>
      </div>

      {/* Video placeholder */}
      <div className="media-container">
        <div className="flex aspect-video items-center justify-center bg-gray-100 text-sm text-gray-400">
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
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Video player — add your .mp4 files here
          </div>
        </div>
        <div className="media-caption">
          Example video — embed walkthroughs and tutorials
        </div>
      </div>

      {/* Code example */}
      <h2>Quick Example</h2>
      <pre>
        <code>{`// With riverpod_generator — just annotate!
@riverpod
Future<List<Todo>> todoList(TodoListRef ref) async {
  final response = await http.get('https://api.example.com/todos');
  return response.body.map(Todo.fromJson).toList();
}

// Generated provider is ready to use:
// final provider = todoListProvider;`}</code>
      </pre>
    </DocsShell>
  );
}
