import { Metadata } from "next";
import CodeBloack from "../../components/CodeBloack";

export const metadata: Metadata = {
  title: "FutureProvider",
  description: "Handle asynchronous operations with FutureProvider in Riverpod",
};

const useCases = [
  "HTTP API calls and REST endpoint consumption",
  "Database queries and data fetching",
  "File system operations",
  "Any operation that returns a Future",
];

const doItems = [
  "Always handle errors appropriately",
  "Use timeouts for network requests",
  "Implement retry logic for transient failures",
  "Use meaningful error types and messages",
  "Cache expensive operations with cacheFor",
];

const dontItems = [
  "Ignore error states in your UI",
  "Make blocking calls in provider functions",
  "Create infinite loops with provider dependencies",
  "Use FutureProvider for frequently changing data",
];

export default function FutureProviderPage() {
  return (
    <>
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          FutureProvider
        </h1>
        <p className="text-base leading-7 text-slate-600">
          FutureProvider is perfect for asynchronous operations like API calls,
          database queries, and file operations. It automatically handles loading
          states, errors, and provides reactive updates.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-900">
          When to Use FutureProvider
        </h2>

        <ul className="space-y-2 text-sm text-slate-700">
          {useCases.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
              {item === "Any operation that returns a Future" ? (
                <>
                  Any operation that returns a{" "}
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                    Future
                  </code>
                </>
              ) : (
                item
              )}
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
            Create a FutureProvider with async functions:
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="users.dart"
          code={`import 'package:riverpod_annotation/riverpod_annotation.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

part 'users.g.dart';

@riverpod
Future<List<User>> userList(UserListRef ref) async {
  final response = await http.get(
    Uri.parse('https://jsonplaceholder.typicode.com/users'),
  );
  
  if (response.statusCode == 200) {
    final List<dynamic> data = json.decode(response.body);
    return data.map((json) => User.fromJson(json)).toList();
  } else {
    throw Exception('Failed to load users');
  }
}`}
        />
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Using FutureProvider in Widgets
          </h2>
          <p className="text-sm text-slate-600">
            Use the{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
              .when()
            </code>{" "}
            method to handle different states:
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="user_list_widget.dart"
          code={`class UserListWidget extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final usersAsync = ref.watch(userListProvider);
    
    return usersAsync.when(
      data: (users) => ListView.builder(
        itemCount: users.length,
        itemBuilder: (context, index) {
          final user = users[index];
          return ListTile(
            title: Text(user.name),
            subtitle: Text(user.email),
            leading: CircleAvatar(child: Text(user.name[0])),
          );
        },
      ),
      loading: () => Center(
        child: CircularProgressIndicator(),
      ),
      error: (error, stackTrace) => Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.error_outline, size: 48, color: Colors.red),
            SizedBox(height: 16),
            Text('Error: $error'),
            ElevatedButton(
              onPressed: () => ref.invalidate(userListProvider),
              child: Text('Retry'),
            ),
          ],
        ),
      ),
    );
  }
}`}
        />
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Family Providers
          </h2>
          <p className="text-sm text-slate-600">
            Use family providers for parameterized async operations:
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="user_detail.dart"
          code={`@riverpod
Future<User> user(UserRef ref, int userId) async {
  final response = await http.get(
    Uri.parse('https://jsonplaceholder.typicode.com/users/$userId'),
  );
  
  if (response.statusCode == 200) {
    return User.fromJson(json.decode(response.body));
  } else {
    throw Exception('User not found');
  }
}

// Usage in widget
class UserDetailPage extends ConsumerWidget {
  final int userId;
  
  UserDetailPage({required this.userId});
  
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final userAsync = ref.watch(userProvider(userId));
    
    return Scaffold(
      appBar: AppBar(title: Text('User Details')),
      body: userAsync.when(
        data: (user) => UserDetailView(user: user),
        loading: () => Center(child: CircularProgressIndicator()),
        error: (error, stack) => ErrorView(error: error),
      ),
    );
  }
}`}
        />
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Error Handling
          </h2>
          <p className="text-sm text-slate-600">
            Implement proper error handling and retry logic:
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="weather.dart"
          code={`@riverpod
Future<WeatherData> weather(WeatherRef ref, String city) async {
  final maxRetries = ref.watch(maxRetriesProvider);
  
  for (int attempt = 0; attempt < maxRetries; attempt++) {
    try {
      final response = await http.get(
        Uri.parse('https://api.weather.com/weather?city=$city'),
        headers: {'Authorization': 'Bearer \${ref.watch(apiKeyProvider)}'},
      ).timeout(Duration(seconds: 10));
      
      if (response.statusCode == 200) {
        return WeatherData.fromJson(json.decode(response.body));
      } else if (response.statusCode == 404) {
        throw CityNotFoundException(city);
      } else {
        throw WeatherApiException('HTTP \${response.statusCode}');
      }
    } on TimeoutException {
      if (attempt == maxRetries - 1) {
        throw WeatherTimeoutException();
      }
      // Wait before retry
      await Future.delayed(Duration(seconds: 2 * (attempt + 1)));
    } catch (e) {
      if (attempt == maxRetries - 1) rethrow;
      await Future.delayed(Duration(seconds: 1));
    }
  }
  
  throw Exception('Max retries exceeded');
}`}
        />
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Caching and Refresh
          </h2>
          <p className="text-sm text-slate-600">
            Control caching behavior and manual refresh:
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="posts.dart"
          code={`@riverpod
Future<List<Post>> posts(PostsRef ref) async {
  // Cache for 5 minutes
  ref.cacheFor(Duration(minutes: 5));
  
  final response = await http.get(
    Uri.parse('https://api.example.com/posts'),
  );
  
  return (json.decode(response.body) as List)
      .map((json) => Post.fromJson(json))
      .toList();
}

// In widget - manual refresh
ElevatedButton(
  onPressed: () {
    ref.invalidate(postsProvider);
  },
  child: Text('Refresh Posts'),
)`}
        />
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Dependent Providers
          </h2>
          <p className="text-sm text-slate-600">
            Chain FutureProviders together:
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="dependent_providers.dart"
          code={`@riverpod
Future<UserProfile> currentUser(CurrentUserRef ref) async {
  final userId = ref.watch(authProvider).userId;
  if (userId == null) throw Exception('User not authenticated');
  
  return ref.watch(userProvider(userId).future);
}

@riverpod
Future<List<Post>> userPosts(UserPostsRef ref) async {
  final user = await ref.watch(currentUserProvider.future);
  final response = await http.get(
    Uri.parse('https://api.example.com/users/\${user.id}/posts'),
  );
  
  return (json.decode(response.body) as List)
      .map((json) => Post.fromJson(json))
      .toList();
}`}
        />

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
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              FutureProvider Loading States Demo
            </div>
          </div>
          <div className="border-t border-slate-200 px-4 py-2 text-xs text-slate-500">
            Watch how FutureProvider automatically handles loading, data, and
            error states
          </div>
        </div>
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
                  {item === "Cache expensive operations with cacheFor" ? (
                    <>
                      Cache expensive operations with{" "}
                      <code className="rounded bg-green-100 px-1.5 py-0.5 text-xs">
                        cacheFor
                      </code>
                    </>
                  ) : (
                    item
                  )}
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

      <section>
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-lg font-semibold text-blue-800">
            Need Real-time Updates?
          </h3>
          <p className="mt-2 text-sm leading-6 text-blue-700">
            For data that changes over time, consider using{" "}
            <a href="/docs/stream-provider" className="font-semibold underline">
              StreamProvider
            </a>{" "}
            instead. For mutable state with async operations, check out{" "}
            <a
              href="/docs/async-notifier-provider"
              className="font-semibold underline"
            >
              AsyncNotifierProvider
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
