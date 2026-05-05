import { Metadata } from "next";
import type { ReactNode } from "react";
import CodeBloack from "../../components/CodeBloack";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Riverpod Gen Shortcuts",
};

const gettingStartedItems = [
  "Automatic disposal and lifecycle management",
  "Type-safe provider references",
  "Reduced boilerplate code",
  "Better IDE support and refactoring",
];

const buildRunnerChecks = [
  "Make sure you have the part directive in your file",
  "Verify riverpod_generator is in dev_dependencies",
  "Check for syntax errors in your provider code",
  "Run flutter clean and try again",
  "Ensure file names match the part directive",
];

const customizationItems = [
  "Use @Riverpod(keepAlive: true) to prevent disposal",
  "Add dependencies with the dependencies parameter",
  "Control caching behavior with provider modifiers",
];

const performanceItems = [
  "Use select to watch only specific parts of state",
  "Implement efficient == operators for custom state classes",
  "Use keepAlive for expensive computations",
  "Avoid creating providers inside build methods",
  "Use family providers for parameterized data",
];

const migrationItems = [
  "Replace ChangeNotifierProvider with NotifierProvider",
  "Update Consumer widgets to ConsumerWidget",
  "Change context.read() to ref.read()",
  "Replace context.watch() with ref.watch()",
  "Gradually adopt code generation for new providers",
];

const ideItems = [
  "Visual Studio Code (Riverpod Snippets extension)",
  "IntelliJ IDEA / Android Studio (Live Templates)",
  "Vim/Neovim (with LSP support)",
];

const autocompleteItems = [
  "Run build_runner to generate provider files",
  "Restart your IDE after generating code",
  "Use dart analyze to check for issues",
  "Enable Dart/Flutter language server features",
];

function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
      {children}
    </code>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Question({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <details className="rounded-xl border border-slate-200 bg-white p-4">
      <summary className="cursor-pointer text-sm font-semibold text-slate-900">
        {title}
      </summary>
      <div className="mt-4 space-y-4 text-sm leading-6 text-slate-600">
        {children}
      </div>
    </details>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="text-base leading-7 text-slate-600">
          Common questions and answers about Riverpod Gen Shortcuts, code
          generation, and best practices.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-900">
          Getting Started
        </h2>

        <div className="space-y-3">
          <Question title="Do I need to use code generation with Riverpod?">
            <p>
              No, code generation is optional. You can use Riverpod with manual
              provider definitions. However, code generation provides several
              benefits:
            </p>
            <BulletList items={gettingStartedItems} />
          </Question>

          <Question title="Can I mix generated and manual providers?">
            <p>
              Yes. You can use both generated providers with{" "}
              <InlineCode>@riverpod</InlineCode> and manual providers in the
              same project. This allows gradual migration or mixing approaches
              based on your needs.
            </p>
          </Question>

          <Question title="Which build_runner command should I use?">
            <p>For development:</p>
            <CodeBloack
              language="bash"
              fileName="terminal"
              code="dart run build_runner watch"
            />
            <p>For one-time builds:</p>
            <CodeBloack
              language="bash"
              fileName="terminal"
              code="dart run build_runner build"
            />
            <p>To clean generated files:</p>
            <CodeBloack
              language="bash"
              fileName="terminal"
              code="dart run build_runner clean"
            />
          </Question>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-900">Common Issues</h2>

        <div className="space-y-3">
          <Question title="Build runner is not generating files. What is wrong?">
            <p>Check these common issues:</p>
            <BulletList items={buildRunnerChecks} />
          </Question>

          <Question title="I get part of errors. How do I fix them?">
            <p>
              Make sure your part directive matches the file name exactly. For a
              file named <InlineCode>counter.dart</InlineCode>, use:
            </p>
            <CodeBloack
              language="dart"
              fileName="counter.dart"
              code="part 'counter.g.dart';"
            />
            <p>
              The generated file will be <InlineCode>counter.g.dart</InlineCode>{" "}
              and should contain:
            </p>
            <CodeBloack
              language="dart"
              fileName="counter.g.dart"
              code="part of 'counter.dart';"
            />
          </Question>

          <Question title="Can I customize the generated code?">
            <p>Limited customization is available through annotations. You can:</p>
            <BulletList items={customizationItems} />
          </Question>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-900">Performance</h2>

        <div className="space-y-3">
          <Question title="How do I optimize provider performance?">
            <p>Follow these best practices:</p>
            <BulletList items={performanceItems} />
          </Question>

          <Question title="When should I use family providers?">
            <p>
              Use family providers when you need multiple instances of the same
              provider with different parameters:
            </p>
            <CodeBloack
              language="dart"
              fileName="user_provider.dart"
              code={`@riverpod
Future<User> user(UserRef ref, int userId) async {
  return await userRepository.getUser(userId);
}

// Usage: ref.watch(userProvider(123))`}
            />
          </Question>

          <Question title="How do I handle provider disposal?">
            <p>Generated providers handle disposal automatically. For manual control:</p>
            <CodeBloack
              language="dart"
              fileName="disposal.dart"
              code={`@Riverpod(keepAlive: false) // Auto-dispose (default)
@Riverpod(keepAlive: true)  // Keep alive

// Or use ref.keepAlive() conditionally:
@riverpod
String expensiveComputation(ExpensiveComputationRef ref) {
  ref.keepAlive(); // Prevent disposal
  return performExpensiveOperation();
}`}
            />
          </Question>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-900">Testing</h2>

        <div className="space-y-3">
          <Question title="How do I test providers?">
            <p>
              Use <InlineCode>ProviderContainer</InlineCode> for unit testing:
            </p>
            <CodeBloack
              language="dart"
              fileName="counter_test.dart"
              code={`test('counter increments correctly', () {
  final container = ProviderContainer();
  
  expect(container.read(counterProvider), 0);
  
  container.read(counterProvider.notifier).increment();
  
  expect(container.read(counterProvider), 1);
});`}
            />
          </Question>

          <Question title="Can I mock providers for testing?">
            <p>Yes, use overrides:</p>
            <CodeBloack
              language="dart"
              fileName="provider_override.dart"
              code={`final container = ProviderContainer(
  overrides: [
    userRepositoryProvider.overrideWithValue(mockUserRepository),
  ],
);`}
            />
          </Question>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-900">Migration</h2>

        <div className="space-y-3">
          <Question title="How do I migrate from Provider to Riverpod?">
            <p>Follow these migration steps:</p>
            <ol className="space-y-2 text-sm text-slate-700">
              {migrationItems.map((item, index) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </Question>

          <Question title="Can I use Riverpod with existing Provider code?">
            <p>
              Yes, but they use different widget trees. You will need separate{" "}
              <InlineCode>ProviderScope</InlineCode> and{" "}
              <InlineCode>MultiProvider</InlineCode> widgets until migration is
              complete.
            </p>
          </Question>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-900">IDE Support</h2>

        <div className="space-y-3">
          <Question title="Which IDEs support Riverpod snippets?">
            <p>We provide snippets and extensions for:</p>
            <BulletList items={ideItems} />
          </Question>

          <Question title="How do I get better autocomplete for providers?">
            <p>Make sure to:</p>
            <BulletList items={autocompleteItems} />
          </Question>
        </div>
      </section>

      <section>
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-lg font-semibold text-blue-800">
            Still have questions?
          </h3>
          <p className="mt-2 text-sm leading-6 text-blue-700">
            Can&apos;t find what you&apos;re looking for? Join our{" "}
            <a href="https://github.com" className="font-semibold underline">
              GitHub discussions
            </a>{" "}
            or open an issue. Our community is here to help.
          </p>
        </div>
      </section>
    </>
  );
}
