import DocsShell from "../../components/DocsShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Provider",
  description: "Basic Provider for synchronous values in Riverpod",
};

export default function ProviderPage() {
  return (
    <DocsShell>
      <h1>Provider</h1>
      <p>
        The most basic provider type for synchronous, immutable values. Use
        Provider when you have a value that never changes during the
        application's lifecycle.
      </p>

      <h2>When to Use Provider</h2>
      <ul>
        <li>Configuration values and constants</li>
        <li>Service instances and repositories</li>
        <li>Computed values based on other providers</li>
        <li>API clients and HTTP services</li>
      </ul>

      <h2>Basic Syntax</h2>
      <p>Create a simple provider with the <code>@riverpod</code> annotation:</p>
      <pre>
        <code>{`import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'config.g.dart';

@riverpod
String appName(AppNameRef ref) {
  return 'Riverpod Gen Shortcuts';
}

@riverpod
int maxRetries(MaxRetriesRef ref) {
  return 3;
}`}</code>
      </pre>

      <h2>Service Provider</h2>
      <p>Provide service instances to your application:</p>
      <pre>
        <code>{`@riverpod
ApiService apiService(ApiServiceRef ref) {
  return ApiService(
    baseUrl: 'https://api.example.com',
    timeout: Duration(seconds: 30),
  );
}

@riverpod
UserRepository userRepository(UserRepositoryRef ref) {
  final apiService = ref.watch(apiServiceProvider);
  return UserRepository(apiService);
}`}</code>
      </pre>

      <h2>Computed Values</h2>
      <p>Create providers that depend on other providers:</p>
      <pre>
        <code>{`@riverpod
String welcomeMessage(WelcomeMessageRef ref) {
  final appName = ref.watch(appNameProvider);
  final user = ref.watch(currentUserProvider);
  
  return 'Welcome to $appName, \${user.name}!';
}

@riverpod
bool isDarkMode(IsDarkModeRef ref) {
  final settings = ref.watch(appSettingsProvider);
  return settings.theme == AppTheme.dark;
}`}</code>
      </pre>

      <h2>Using Providers</h2>
      <p>Access provider values in your widgets:</p>
      <pre>
        <code>{`class MyWidget extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final appName = ref.watch(appNameProvider);
    final welcomeMsg = ref.watch(welcomeMessageProvider);
    
    return Column(
      children: [
        Text(appName, style: Theme.of(context).textTheme.headlineMedium),
        Text(welcomeMsg),
      ],
    );
  }
}`}</code>
      </pre>

      <h2>Provider Modifiers</h2>

      <h3>Keep Alive</h3>
      <p>Prevent provider disposal:</p>
      <pre>
        <code>{`@Riverpod(keepAlive: true)
ExpensiveService expensiveService(ExpensiveServiceRef ref) {
  // This provider will never be disposed
  return ExpensiveService();
}`}</code>
      </pre>

      <h3>Dependencies</h3>
      <p>Explicitly declare provider dependencies:</p>
      <pre>
        <code>{`@Riverpod(dependencies: [apiServiceProvider, configProvider])
DataRepository dataRepository(DataRepositoryRef ref) {
  final api = ref.watch(apiServiceProvider);
  final config = ref.watch(configProvider);
  
  return DataRepository(api, config);
}`}</code>
      </pre>

      <h2>Best Practices</h2>
      <div className="space-y-4">
        <div className="rounded-lg border border-green-200 bg-green-50 p-4">
          <h3 className="!mt-0 text-sm font-semibold text-green-800">✅ Do</h3>
          <ul className="!mb-0 text-sm text-green-700">
            <li>Use Provider for immutable values and services</li>
            <li>Keep provider functions pure (no side effects)</li>
            <li>Use meaningful names that describe the value</li>
            <li>Group related providers in the same file</li>
          </ul>
        </div>

        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <h3 className="!mt-0 text-sm font-semibold text-red-800">❌ Don't</h3>
          <ul className="!mb-0 text-sm text-red-700">
            <li>Use Provider for mutable state (use NotifierProvider instead)</li>
            <li>Perform expensive operations in provider functions</li>
            <li>Create providers inside build methods</li>
            <li>Use providers for values that change frequently</li>
          </ul>
        </div>
      </div>

      <h2>Common Examples</h2>

      <h3>Configuration Provider</h3>
      <pre>
        <code>{`@riverpod
AppConfig appConfig(AppConfigRef ref) {
  return AppConfig(
    apiUrl: const String.fromEnvironment('API_URL', 
      defaultValue: 'https://api.example.com'
    ),
    enableAnalytics: bool.fromEnvironment('ENABLE_ANALYTICS'),
    debugMode: kDebugMode,
  );
}`}</code>
      </pre>

      <h3>Theme Provider</h3>
      <pre>
        <code>{`@riverpod
ThemeData lightTheme(LightThemeRef ref) {
  return ThemeData(
    colorScheme: ColorScheme.fromSeed(seedColor: Colors.amber),
    fontFamily: 'Iosevka',
  );
}

@riverpod
ThemeData darkTheme(DarkThemeRef ref) {
  return ThemeData(
    colorScheme: ColorScheme.fromSeed(
      seedColor: Colors.amber,
      brightness: Brightness.dark,
    ),
    fontFamily: 'Iosevka',
  );
}`}</code>
      </pre>

      <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-6">
        <h3 className="!mt-0 text-lg font-semibold text-amber-800">
          💡 Next Steps
        </h3>
        <p className="!mb-0 text-amber-700">
          Ready for mutable state? Check out{" "}
          <a href="/docs/notifier-provider" className="font-semibold underline">
            NotifierProvider
          </a>{" "}
          for state that can change over time, or{" "}
          <a href="/docs/future-provider" className="font-semibold underline">
            FutureProvider
          </a>{" "}
          for asynchronous operations.
        </p>
      </div>
    </DocsShell>
  );
}