import DocsShell from "../../components/DocsShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NotifierProvider",
  description: "Manage complex synchronous state with Notifier in Riverpod",
};

export default function NotifierProviderPage() {
  return (
    <DocsShell
      title="NotifierProvider"
      description="NotifierProvider replaces StateNotifierProvider in the newer Riverpod versions, managing complex class-based state synchronously."
    >
      <div className="prose prose-amber dark:prose-invert max-w-none">
        <p>
          A <code>Notifier</code> handles state logic synchronously. It&apos;s the recommended
          alternative to <code>StateNotifier</code> because it removes boilerplate, 
          supports code generation out of the box, and provides direct access to <code>ref</code>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          When to Use Notifier
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Managing complex, synchronous class-based state (e.g., a shopping cart or form inputs)</li>
          <li>Replacing StateProvider with more constrained business logic</li>
          <li>Encapsulating repetitive state manipulation methods</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          Basic Syntax
        </h2>
        <p>Define a Notifier and map its logic using the Riverpod Generator:</p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'cart.g.dart';

@riverpod
class Cart extends _$Cart {
  @override
  List<Product> build() {
    // Initial state is an empty cart
    return [];
  }

  void addProduct(Product product) {
    // State is immutable, so we create a new list
    state = [...state, product];
  }

  void removeProduct(String productId) {
    state = state.where((p) => p.id != productId).toList();
  }
}`}</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          Using Notifier in Widgets
        </h2>
        <p>
          To access the Notifier methods, use <code>ref.read(provider.notifier)</code>:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`class ShoppingCart extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final cart = ref.watch(cartProvider);

    return ListView.builder(
      itemCount: cart.length,
      itemBuilder: (context, index) {
        final product = cart[index];
        return ListTile(
          title: Text(product.name),
          trailing: IconButton(
            icon: Icon(Icons.delete),
            onPressed: () => ref.read(cartProvider.notifier).removeProduct(product.id),
          ),
        );
      },
    );
  }
}`}</code>
        </pre>

        <div className="mt-8 rounded-lg border border-red-200 bg-red-50 p-6">
          <h3 className="!mt-0 text-lg font-semibold text-red-800">
            ⚠️ Important Rule
          </h3>
          <p className="!mb-0 text-red-700">
            States in Riverpod are meant to be immutable. Never mutate an object or list 
            directly (e.g., <code>state.add(item)</code>). Always assign a fresh object/collection 
            (e.g., <code>state = [...state, item]</code>).
          </p>
        </div>
      </div>
    </DocsShell>
  );
}