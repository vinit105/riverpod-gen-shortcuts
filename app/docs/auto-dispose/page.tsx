import DocsShell from "../../components/DocsShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Dispose",
  description: "Learn how to manage memory dynamically with autoDispose in Riverpod Generator",
};

export default function AutoDisposePage() {
  return (
    <DocsShell
      title="Auto Dispose"
      description="Safeguard against memory leaks and keep your state fresh using Riverpod AutoDispose."
    >
      <div className="prose prose-amber dark:prose-invert max-w-none">
        <p>
          Unlike classic Riverpod where you explicitly write <code>.autoDispose</code>, 
          Riverpod Generator automatically applies auto-disposal to every generated 
          provider by default.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          The Default Behavior
        </h2>
        <p>
          Every provider marked with <code>@riverpod</code> immediately disposes its state 
          when no longer actively watched by a widget or another provider.
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`@riverpod
Future<Cart> shoppingCart(ShoppingCartRef ref) async {
  // Disposed automatically when user navigates away from cart screen!
  return await fetchCart();
}`}</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          Overriding Auto Dispose
        </h2>
        <p>
          To maintain state indefinitely (such as keeping app themes or authentication 
          status in memory), use the <code>keepAlive: true</code> property:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`@Riverpod(keepAlive: true)
String globalAppConfig(GlobalAppConfigRef ref) {
  return 'Never Disposed';
}`}</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          Benefits of Auto Dispose
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Memory safety:</strong> Pages holding heavy data chunks automatically clear from RAM when closed.</li>
          <li><strong>Freshness:</strong> You don&apos;t have to worry about old cached data showing up next time you open a screen.</li>
          <li><strong>Simplified debugging:</strong> You can track precisely what&apos;s currently active.</li>
        </ul>

      </div>
    </DocsShell>
  );
}