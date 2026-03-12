import DocsShell from "../../components/DocsShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Riverpod Gen Shortcuts",
};

export default function FAQPage() {
  return (
    <DocsShell>
      <h1>Frequently Asked Questions</h1>
      <p>
        Common questions and answers about Riverpod Gen Shortcuts, code
        generation, and best practices.
      </p>

      <h2>Getting Started</h2>

      <h3>Q: Do I need to use code generation with Riverpod?</h3>
      <p>
        No, code generation is optional. You can use Riverpod with manual
        provider definitions. However, code generation provides several benefits:
      </p>
      <ul>
        <li>Automatic disposal and lifecycle management</li>
        <li>Type-safe provider references</li>
        <li>Reduced boilerplate code</li>
        <li>Better IDE support and refactoring</li>
      </ul>

      <h3>Q: Can I mix generated and manual providers?</h3>
      <p>
        Yes! You can use both generated providers (with <code>@riverpod</code>)
        and manual providers in the same project. This allows gradual migration
        or mixing approaches based on your needs.
      </p>

      <h3>Q: Which build_runner command should I use?</h3>
      <p>For development:</p>
      <pre>
        <code>dart run build_runner watch</code>
      </pre>
      <p>For one-time builds:</p>
      <pre>
        <code>dart run build_runner build</code>
      </pre>
      <p>To clean generated files:</p>
      <pre>
        <code>dart run build_runner clean</code>
      </pre>

      <h2>Common Issues</h2>

      <h3>Q: Build runner isn't generating files. What's wrong?</h3>
      <p>Check these common issues:</p>
      <ul>
        <li>Make sure you have the <code>part</code> directive in your file</li>
        <li>Verify <code>riverpod_generator</code> is in <code>dev_dependencies</code></li>
        <li>Check for syntax errors in your provider code</li>
        <li>Run <code>flutter clean</code> and try again</li>
        <li>Ensure file names match the part directive</li>
      </ul>

      <h3>Q: I get "part of" errors. How do I fix them?</h3>
      <p>
        Make sure your part directive matches the file name exactly. For a file
        named <code>counter.dart</code>, use:
      </p>
      <pre>
        <code>part 'counter.g.dart';</code>
      </pre>
      <p>
        The generated file will be <code>counter.g.dart</code> and should contain:
      </p>
      <pre>
        <code>part of 'counter.dart';</code>
      </pre>

      <h3>Q: Can I customize the generated code?</h3>
      <p>
        Limited customization is available through annotations. You can:
      </p>
      <ul>
        <li>Use <code>@Riverpod(keepAlive: true)</code> to prevent disposal</li>
        <li>Add dependencies with the <code>dependencies</code> parameter</li>
        <li>Control caching behavior with provider modifiers</li>
      </ul>

      <h2>Performance</h2>

      <h3>Q: How do I optimize provider performance?</h3>
      <p>Follow these best practices:</p>
      <ul>
        <li>Use <code>select</code> to watch only specific parts of state</li>
        <li>Implement efficient <code>==</code> operators for custom state classes</li>
        <li>Use <code>keepAlive</code> for expensive computations</li>
        <li>Avoid creating providers inside build methods</li>
        <li>Use family providers for parameterized data</li>
      </ul>

      <h3>Q: When should I use family providers?</h3>
      <p>
        Use family providers when you need multiple instances of the same
        provider with different parameters:
      </p>
      <pre>
        <code>{`@riverpod
Future<User> user(UserRef ref, int userId) async {
  return await userRepository.getUser(userId);
}

// Usage: ref.watch(userProvider(123))`}</code>
      </pre>

      <h3>Q: How do I handle provider disposal?</h3>
      <p>
        Generated providers handle disposal automatically. For manual control:
      </p>
      <pre>
        <code>{`@Riverpod(keepAlive: false) // Auto-dispose (default)
@Riverpod(keepAlive: true)  // Keep alive

// Or use ref.keepAlive() conditionally:
@riverpod
String expensiveComputation(ExpensiveComputationRef ref) {
  ref.keepAlive(); // Prevent disposal
  return performExpensiveOperation();
}`}</code>
      </pre>

      <h2>Testing</h2>

      <h3>Q: How do I test providers?</h3>
      <p>Use <code>ProviderContainer</code> for unit testing:</p>
      <pre>
        <code>{`test('counter increments correctly', () {
  final container = ProviderContainer();
  
  expect(container.read(counterProvider), 0);
  
  container.read(counterProvider.notifier).increment();
  
  expect(container.read(counterProvider), 1);
});`}</code>
      </pre>

      <h3>Q: Can I mock providers for testing?</h3>
      <p>Yes, use overrides:</p>
      <pre>
        <code>{`final container = ProviderContainer(
  overrides: [
    userRepositoryProvider.overrideWithValue(mockUserRepository),
  ],
);`}</code>
      </pre>

      <h2>Migration</h2>

      <h3>Q: How do I migrate from Provider to Riverpod?</h3>
      <p>Follow these migration steps:</p>
      <ol>
        <li>Replace <code>ChangeNotifierProvider</code> with <code>NotifierProvider</code></li>
        <li>Update <code>Consumer</code> widgets to <code>ConsumerWidget</code></li>
        <li>Change <code>context.read()</code> to <code>ref.read()</code></li>
        <li>Replace <code>context.watch()</code> with <code>ref.watch()</code></li>
        <li>Gradually adopt code generation for new providers</li>
      </ol>

      <h3>Q: Can I use Riverpod with existing Provider code?</h3>
      <p>
        Yes, but they use different widget trees. You'll need separate
        <code>ProviderScope</code> and <code>MultiProvider</code> widgets until
        migration is complete.
      </p>

      <h2>IDE Support</h2>

      <h3>Q: Which IDEs support Riverpod snippets?</h3>
      <p>We provide snippets and extensions for:</p>
      <ul>
        <li>Visual Studio Code (Riverpod Snippets extension)</li>
        <li>IntelliJ IDEA / Android Studio (Live Templates)</li>
        <li>Vim/Neovim (with LSP support)</li>
      </ul>

      <h3>Q: How do I get better autocomplete for providers?</h3>
      <p>
        Make sure to:
      </p>
      <ul>
        <li>Run build_runner to generate provider files</li>
        <li>Restart your IDE after generating code</li>
        <li>Use <code>dart analyze</code> to check for issues</li>
        <li>Enable Dart/Flutter language server features</li>
      </ul>

      <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
        <h3 className="!mt-0 text-lg font-semibold text-blue-800">
          Still have questions?
        </h3>
        <p className="!mb-0 text-blue-700">
          Can't find what you're looking for? Join our{" "}
          <a href="https://github.com" className="font-semibold underline">
            GitHub discussions
          </a>{" "}
          or open an issue. Our community is here to help!
        </p>
      </div>
    </DocsShell>
  );
}