import Image from "next/image";
import Link from "next/link";
import DocsShell from "./components/DocsShell";
import { ArrowRightIcon, GitHubIcon, VideoIcon } from "./components/Icons";

export default function Home() {
  return (
    <DocsShell>

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
            <h1 className="mb-0! border-0! pb-0!">Riverpod Gen Shortcuts</h1>
            <p className="mb-0! mt-1 text-sm text-amber-700">
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
            className="inline-flex items-center gap-2 rounded-md bg-linear-to-r from-amber-500 to-orange-500 px-4! py-2! text-sm font-semibold text-white shadow-sm transition-all hover:from-amber-600 hover:to-orange-600 hover:shadow-md"
          >
            Get Started
           <ArrowRightIcon />
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4! py-2! text-sm font-medium text-gray-700 transition-colors hover:border-amber-200 hover:bg-amber-50"
          >
            <GitHubIcon />
            View on GitHub
          </a>
        </div>
      </div>


      <h2>What&apos;s Inside</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-5">
          <div className="mb-2 text-lg">⚡</div>
          <h3 className="mt-0! text-sm font-semibold text-gray-900">
            Quick Snippets
          </h3>
          <p className="mb-0! text-xs text-gray-600">
            Type a short prefix and get full provider boilerplate instantly with
            IDE snippets.
          </p>
        </div>
        <div className="rounded-xl border border-orange-100 bg-orange-50/50 p-5">
          <div className="mb-2 text-lg">🔧</div>
          <h3 className="mt-0! text-sm font-semibold text-gray-900">
            Code Generation
          </h3>
          <p className="mb-0! text-xs text-gray-600">
            Leverage build_runner and riverpod_generator for type-safe,
            compile-time checked providers.
          </p>
        </div>
        <div className="rounded-xl border border-yellow-100 bg-yellow-50/50 p-5">
          <div className="mb-2 text-lg">📚</div>
          <h3 className="mt-0! text-sm font-semibold text-gray-900">
            Full Documentation
          </h3>
          <p className="mb-0! text-xs text-gray-600">
            Every provider type documented with examples, GIFs, and video
            walkthroughs.
          </p>
        </div>
        <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-5">
          <div className="mb-2 text-lg">🧪</div>
          <h3 className="mt-0! text-sm font-semibold text-gray-900">
            Testing Guides
          </h3>
          <p className="mb-0! text-xs text-gray-600">
            Learn how to test riverpod providers with overrides, mocks, and
            integration tests.
          </p>
        </div>
      </div>

      <h2>Demo: Media Support</h2>
      <p>
        This documentation supports images, GIFs, and video embeds to make
        learning visual and easy to follow.
      </p>

      <div className="media-container">
        <Image src="/logo.png" alt="Project logo example" width={600} height={400} />
        <div className="media-caption">
          Example image — replace with your screenshots
        </div>
      </div>

      <div className="gif-container">
        <Image src="/logo.png" alt="GIF demo placeholder" width={600} height={400} />
        <div className="media-caption">
          Example GIF — great for showing shortcuts in action
        </div>
      </div>

      <div className="media-container">
        <div className="flex aspect-video items-center justify-center text-center bg-gray-100 text-sm text-gray-400">
          <VideoIcon />
          Video player — add your .mp4 files here
        </div>
        <div className="media-caption">
          Example video — embed walkthroughs and tutorials
        </div>
      </div>

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
