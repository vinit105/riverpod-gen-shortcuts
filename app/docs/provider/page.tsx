import { Metadata } from "next";
import CodeBloack from "../../components/CodeBloack";

export const metadata: Metadata = {
  title: "Provider",
  description: "Basic Provider for synchronous values in Riverpod",
};

const useCases = [
  "Configuration values and constants",
  "Service instances and repositories",
  "Computed values based on other providers",
  "API clients and HTTP services",
];

const doItems = [
  "Use Provider for immutable values and services",
  "Keep provider functions pure (no side effects)",
  "Use meaningful names that describe the value",
  "Group related providers in the same file",
];

const dontItems = [
  "Use Provider for mutable state (use NotifierProvider instead)",
  "Perform expensive operations in provider functions",
  "Create providers inside build methods",
  "Use providers for values that change frequently",
];

export default function ProviderPage() {
  return (
    <>
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Provider
        </h1>
        <p className="text-base leading-7 text-slate-600">
          The most basic provider type for synchronous, immutable values. Use
          Provider when you have a value that never changes during the
          application&apos;s lifecycle.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-900">
          When to Use Provider
        </h2>

        <ul className="space-y-2 text-sm text-slate-700">
          {useCases.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Basic Syntax
          </h2>
          <p className="text-sm text-slate-600">
            Create a simple provider with the{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
              @riverpod
            </code>{" "}
            annotation:
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="config.dart"
          code={`import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'config.g.dart';

@riverpod
String appName(AppNameRef ref) {
  return 'Riverpod Gen Shortcuts';
}

@riverpod
int maxRetries(MaxRetriesRef ref) {
  return 3;
}`}
        />
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Service Provider
          </h2>
          <p className="text-sm text-slate-600">
            Provide service instances to your application:
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="services.dart"
          code={`@riverpod
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
}`}
        />
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Computed Values
          </h2>
          <p className="text-sm text-slate-600">
            Create providers that depend on other providers:
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="computed_values.dart"
          code={`@riverpod
String welcomeMessage(WelcomeMessageRef ref) {
  final appName = ref.watch(appNameProvider);
  final user = ref.watch(currentUserProvider);
  
  return 'Welcome to $appName, \${user.name}!';
}

@riverpod
bool isDarkMode(IsDarkModeRef ref) {
  final settings = ref.watch(appSettingsProvider);
  return settings.theme == AppTheme.dark;
}`}
        />
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Using Providers
          </h2>
          <p className="text-sm text-slate-600">
            Access provider values in your widgets:
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="my_widget.dart"
          code={`class MyWidget extends ConsumerWidget {
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
}`}
        />
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-900">
          Provider Modifiers
        </h2>

        <div className="space-y-3">
          <h3 className="text-base font-semibold text-slate-900">Keep Alive</h3>
          <p className="text-sm text-slate-600">Prevent provider disposal:</p>
        </div>

        <CodeBloack
          language="dart"
          fileName="expensive_service.dart"
          code={`@Riverpod(keepAlive: true)
ExpensiveService expensiveService(ExpensiveServiceRef ref) {
  // This provider will never be disposed
  return ExpensiveService();
}`}
        />

        <div className="space-y-3 pt-2">
          <h3 className="text-base font-semibold text-slate-900">
            Dependencies
          </h3>
          <p className="text-sm text-slate-600">
            Explicitly declare provider dependencies:
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="data_repository.dart"
          code={`@Riverpod(dependencies: [apiServiceProvider, configProvider])
DataRepository dataRepository(DataRepositoryRef ref) {
  final api = ref.watch(apiServiceProvider);
  final config = ref.watch(configProvider);
  
  return DataRepository(api, config);
}`}
        />
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-900">
          Best Practices
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-5">
            <h3 className="text-sm font-semibold text-green-800">Do</h3>
            <ul className="mt-3 space-y-2 text-sm text-green-700">
              {doItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <h3 className="text-sm font-semibold text-red-800">Don&apos;t</h3>
            <ul className="mt-3 space-y-2 text-sm text-red-700">
              {dontItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-900">
          Common Examples
        </h2>

        <div className="space-y-3">
          <h3 className="text-base font-semibold text-slate-900">
            Configuration Provider
          </h3>
        </div>

        <CodeBloack
          language="dart"
          fileName="app_config.dart"
          code={`@riverpod
AppConfig appConfig(AppConfigRef ref) {
  return AppConfig(
    apiUrl: const String.fromEnvironment('API_URL', 
      defaultValue: 'https://api.example.com'
    ),
    enableAnalytics: bool.fromEnvironment('ENABLE_ANALYTICS'),
    debugMode: kDebugMode,
  );
}`}
        />

        <div className="space-y-3 pt-2">
          <h3 className="text-base font-semibold text-slate-900">
            Theme Provider
          </h3>
        </div>

        <CodeBloack
          language="dart"
          fileName="theme.dart"
          code={`@riverpod
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
}`}
        />
      </section>

      <section>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="text-lg font-semibold text-amber-800">
            Next Steps
          </h3>
          <p className="mt-2 text-sm leading-6 text-amber-700">
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
      </section>
    </>
  );
}
