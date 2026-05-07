import DocsShell from "../../components/DocsShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AsyncNotifierProvider",
  description: "Manage complex asynchronous state with AsyncNotifier in Riverpod",
};

export default function AsyncNotifierProviderPage() {
  return (
    <DocsShell
      title="AsyncNotifierProvider"
      description="AsyncNotifier is powerful. It allows handling complex state that has an asynchronous initialization phase or requires mutating operations and reloading."
    >
      <div className="prose prose-amber dark:prose-invert max-w-none">
        <p>
          AsyncNotifier combines the flexibility of <code>Notifier</code> with the asynchronous
          capabilities of <code>FutureProvider</code>. It manages states wrapped in an 
          <code>AsyncValue</code> and handles background loading and data mutations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          When to Use AsyncNotifier
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Authentication state with login/logout operations</li>
          <li>Fetching and creating database records sequentially</li>
          <li>Refreshing or retrying data fetches manually</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          Basic Syntax
        </h2>
        <p>Create an <code>AsyncNotifier</code> using the generator:</p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'todos.g.dart';

@riverpod
class Todos extends _$Todos {
  @override
  FutureOr<List<Todo>> build() async {
    // Perform initial fetch
    return await ref.watch(apiServiceProvider).fetchTodos();
  }

  Future<void> addTodo(Todo todo) async {
    // Set state to loading while keeping previous data (optimistic/background update)
    state = const AsyncValue.loading();
    
    // Add todo via API, then replace state with new valid data
    state = await AsyncValue.guard(() async {
      final newTodo = await ref.read(apiServiceProvider).addTodo(todo);
      final prevTodos = state.valueOrNull ?? [];
      return [...prevTodos, newTodo];
    });
  }
}`}</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          State Mutations with AsyncValue.guard
        </h2>
        <p>
          Notice the use of <code>AsyncValue.guard</code> above. This utility simplifies 
          executing an asynchronous callback, catching errors, and automatically returning 
          an <code>AsyncData</code> or <code>AsyncError</code>. It handles stack traces so 
          you keep detailed error tracking.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          Using AsyncNotifier in Widgets
        </h2>
        <p>Similar to FutureProvider, use the <code>.when()</code> method:</p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`class TodoListWidget extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // Read the async value
    final todosAsync = ref.watch(todosProvider);
    
    return todosAsync.when(
      data: (todos) => ListView.builder(
        itemCount: todos.length,
        itemBuilder: (context, index) {
          return ListTile(title: Text(todos[index].title));
        },
      ),
      loading: () => Center(child: CircularProgressIndicator()),
      error: (error, stack) => Text('Error: $error'),
    );
  }
}`}</code>
        </pre>

      </div>
    </DocsShell>
  );
}