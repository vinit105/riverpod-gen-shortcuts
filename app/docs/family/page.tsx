import DocsShell from "../../components/DocsShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Modifiers",
  description: "Learn how to parameterize providers using family modifiers in Riverpod Generator",
};

export default function FamilyModifiersPage() {
  return (
    <DocsShell
      title="Family Modifiers"
      description="Parameterized dependencies made simple with Riverpod Generator's automatic family support."
    >
      <div className="prose prose-amber dark:prose-invert max-w-none">
        <p>
          In classic Riverpod, you use `.family` to pass parameters into providers. 
          With Riverpod Generator, you simply add arguments to your function or build method.
          The generator automatically handles the complex `family` typing for you.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          Functional Families
        </h2>
        <p>Pass extra arguments natively to functions:</p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'user_profile.g.dart';

@riverpod
Future<User> userProfile(UserProfileRef ref, int userId) async {
  return ref.watch(apiClientProvider).getUser(userId);
}`}</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          Notifier Families
        </h2>
        <p>Families work identically with class-based logic by passing parameters into the <code>build</code> method:</p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`@riverpod
class ProductDetails extends _$ProductDetails {
  @override
  FutureOr<Product> build(String productId) async {
    return ref.watch(productRepositoryProvider).fetchProduct(productId);
  }

  Future<void> updateStock(int newAmount) async {
    // Note: productId is implicitly available as a class field!
    await ref.read(apiClientProvider).updateStock(productId, newAmount);
    // Refresh the specific family member
    ref.invalidateSelf();
  }
}`}</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          Using Families in Widgets
        </h2>
        <p>Simply call the provider like a regular Dart function:</p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`class ProductPage extends ConsumerWidget {
  final String id;

  const ProductPage({required this.id});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // Pass the parameter smoothly
    final productAsync = ref.watch(productDetailsProvider(id));

    return productAsync.when(
      data: (product) => Text(product.name),
      loading: () => CircularProgressIndicator(),
      error: (e, st) => Text('Error: $e'),
    );
  }
}`}</code>
        </pre>

      </div>
    </DocsShell>
  );
}