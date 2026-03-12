import DocsShell from "../../components/DocsShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FutureProvider",
  description: "Handle asynchronous operations with FutureProvider in Riverpod",
};

export default function FutureProviderPage() {
  return (
    <DocsShell>
      <h1>FutureProvider</h1>
      <p>
        FutureProvider is perfect for asynchronous operations like API calls,
        database queries, and file operations. It automatically handles loading
        states, errors, and provides reactive updates.
      </p>

      <h2>When to Use FutureProvider</h2>
      <ul>
        <li>HTTP API calls and REST endpoint consumption</li>
        <li>Database queries and data fetching</li>
        <li>File system operations</li>
        <li>Any operation that returns a <code>Future</code></li>
      </ul>

      <h2>Basic Syntax</h2>
      <p>Create a FutureProvider with async functions:</p>
      <pre>
        <code>{`import 'package:riverpod_annotation/riverpod_annotation.dart';
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
}`}</code>
      </pre>

      <h2>Using FutureProvider in Widgets</h2>
      <p>
        Use the <code>.when()</code> method to handle different states:
      </p>
      <pre>
        <code>{`class UserListWidget extends ConsumerWidget {
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
}`}</code>
      </pre>

      <h2>Family Providers</h2>
      <p>Use family providers for parameterized async operations:</p>
      <pre>
        <code>{`@riverpod
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
}`}</code>
      </pre>

      <h2>Error Handling</h2>
      <p>Implement proper error handling and retry logic:</p>
      <pre>
        <code>{`@riverpod
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
}`}</code>
      </pre>

      <h2>Caching and Refresh</h2>
      <p>Control caching behavior and manual refresh:</p>
      <pre>
        <code>{`@riverpod
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
)`}</code>
      </pre>

      <h2>Dependent Providers</h2>
      <p>Chain FutureProviders together:</p>
      <pre>
        <code>{`@riverpod
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
}`}</code>
      </pre>

      <div className="gif-container">
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
        <div className="media-caption">
          Watch how FutureProvider automatically handles loading, data, and error states
        </div>
      </div>

      <h2>Best Practices</h2>
      <div className="space-y-4">
        <div className="rounded-lg border border-green-200 bg-green-50 p-4">
          <h3 className="!mt-0 text-sm font-semibold text-green-800">✅ Do</h3>
          <ul className="!mb-0 text-sm text-green-700">
            <li>Always handle errors appropriately</li>
            <li>Use timeouts for network requests</li>
            <li>Implement retry logic for transient failures</li>
            <li>Use meaningful error types and messages</li>
            <li>Cache expensive operations with <code>cacheFor</code></li>
          </ul>
        </div>

        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <h3 className="!mt-0 text-sm font-semibold text-red-800">❌ Don't</h3>
          <ul className="!mb-0 text-sm text-red-700">
            <li>Ignore error states in your UI</li>
            <li>Make blocking calls in provider functions</li>
            <li>Create infinite loops with provider dependencies</li>
            <li>Use FutureProvider for frequently changing data</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
        <h3 className="!mt-0 text-lg font-semibold text-blue-800">
          🔄 Need Real-time Updates?
        </h3>
        <p className="!mb-0 text-blue-700">
          For data that changes over time, consider using{" "}
          <a href="/docs/stream-provider" className="font-semibold underline">
            StreamProvider
          </a>{" "}
          instead. For mutable state with async operations, check out{" "}
          <a href="/docs/async-notifier-provider" className="font-semibold underline">
            AsyncNotifierProvider
          </a>.
        </p>
      </div>
    </DocsShell>
  );
}