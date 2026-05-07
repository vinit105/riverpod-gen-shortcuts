import { Metadata } from "next";
import CodeBloack from "../../components/CodeBloack";

export const metadata: Metadata = {
  title: "Testing Riverpod Providers",
  description:
    "Learn how to test Riverpod providers with mocks, overrides, and best practices",
};

const doItems = [
  "Test providers in isolation using ProviderContainer",
  "Use overrides to mock dependencies",
  "Test both success and error scenarios",
  "Verify state transitions and side effects",
];

const dontItems = [
  "Test UI and provider logic in the same test",
  "Forget to dispose ProviderContainer",
  "Rely on real network calls in unit tests",
  "Test implementation details of generated code",
];

const testingPatterns = [
  {
    title: "Golden Master Testing",
    description:
      "Save provider state snapshots and compare against future runs to detect unintended changes.",
  },
  {
    title: "Property-Based Testing",
    description:
      "Use libraries like test_api to generate random inputs and verify provider invariants.",
  },
  {
    title: "Performance Testing",
    description:
      "Measure provider creation time and memory usage to catch performance regressions.",
  },
];

export default function TestingPage() {
  return (
    <>
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Testing Riverpod Providers
        </h1>
        <p className="text-base leading-7 text-slate-600">
          Learn how to write comprehensive tests for your Riverpod providers
          using ProviderContainer, overrides, and mocking strategies.
        </p>
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Basic Provider Testing
          </h2>
          <p className="text-sm text-slate-600">
            Use{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
              ProviderContainer
            </code>{" "}
            to test providers in isolation without widget dependencies:
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="counter_provider_test.dart"
          code={`import 'package:flutter_test/flutter_test.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

void main() {
  group('Counter Provider Tests', () {
    late ProviderContainer container;

    setUp(() {
      container = ProviderContainer();
    });

    tearDown(() {
      container.dispose();
    });

    test('initial state is 0', () {
      expect(container.read(counterProvider), 0);
    });

    test('increment increases count', () {
      container.read(counterProvider.notifier).increment();
      expect(container.read(counterProvider), 1);
    });

    test('decrement decreases count', () {
      container.read(counterProvider.notifier).increment();
      container.read(counterProvider.notifier).increment();
      expect(container.read(counterProvider), 2);

      container.read(counterProvider.notifier).decrement();
      expect(container.read(counterProvider), 1);
    });

    test('reset sets count to 0', () {
      container.read(counterProvider.notifier).increment();
      container.read(counterProvider.notifier).reset();
      expect(container.read(counterProvider), 0);
    });
  });
}`}
        />
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Async Provider Testing
          </h2>
          <p className="text-sm text-slate-600">
            Test async providers by awaiting their futures and handling
            loading/error states:
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="user_provider_test.dart"
          code={`import 'package:flutter_test/flutter_test.dart';

void main() {
  group('User Provider Tests', () {
    late ProviderContainer container;

    setUp(() {
      container = ProviderContainer();
    });

    tearDown(() {
      container.dispose();
    });

    test('fetches user successfully', () async {
      // Trigger the provider
      final future = container.read(userProvider(123).future);
      
      // Wait for completion
      final user = await future;
      
      expect(user.id, 123);
      expect(user.name, isNotEmpty);
    });

    test('handles API errors correctly', () async {
      // Test with invalid ID that triggers error
      expect(
        () => container.read(userProvider(-1).future),
        throwsA(isA<Exception>()),
      );
    });

    test('loading state is handled', () {
      final asyncValue = container.read(userProvider(123));
      
      expect(asyncValue, isA<AsyncLoading>());
    });
  });
}`}
        />
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Mocking Dependencies with Overrides
          </h2>
          <p className="text-sm text-slate-600">
            Use provider overrides to inject mock dependencies and control
            provider behavior in tests:
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="user_service_test.dart"
          code={`// Mock repository
class MockUserRepository extends Mock implements UserRepository {}

void main() {
  group('User Service Tests', () {
    late MockUserRepository mockRepository;
    late ProviderContainer container;

    setUp(() {
      mockRepository = MockUserRepository();
      container = ProviderContainer(
        overrides: [
          // Override the repository provider with mock
          userRepositoryProvider.overrideWithValue(mockRepository),
        ],
      );
    });

    tearDown(() {
      container.dispose();
    });

    test('getUserProfile calls repository correctly', () async {
      // Arrange
      final expectedUser = User(id: 1, name: 'John');
      when(mockRepository.getUser(1))
          .thenAnswer((_) => Future.value(expectedUser));

      // Act
      final user = await container.read(userProfileProvider(1).future);

      // Assert
      expect(user, expectedUser);
      verify(mockRepository.getUser(1)).called(1);
    });

    test('handles repository errors', () async {
      // Arrange
      when(mockRepository.getUser(1))
          .thenThrow(Exception('User not found'));

      // Act & Assert
      expect(
        () => container.read(userProfileProvider(1).future),
        throwsA(isA<Exception>()),
      );
    });
  });
}`}
        />
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Widget Testing with Providers
          </h2>
          <p className="text-sm text-slate-600">
            Test widgets that consume providers using{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
              ProviderScope
            </code>
            :
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="counter_widget_test.dart"
          code={`import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

void main() {
  group('Counter Widget Tests', () {
    testWidgets('displays initial count', (tester) async {
      await tester.pumpWidget(
        ProviderScope(
          child: MaterialApp(
            home: CounterWidget(),
          ),
        ),
      );

      expect(find.text('0'), findsOneWidget);
    });

    testWidgets('increment button increases count', (tester) async {
      await tester.pumpWidget(
        ProviderScope(
          child: MaterialApp(
            home: CounterWidget(),
          ),
        ),
      );

      // Tap increment button
      await tester.tap(find.text('+'));
      await tester.pump();

      expect(find.text('1'), findsOneWidget);
    });

    testWidgets('uses mocked provider', (tester) async {
      final mockCounter = MockCounter();
      when(mockCounter.value).thenReturn(42);

      await tester.pumpWidget(
        ProviderScope(
          overrides: [
            counterProvider.overrideWith((ref) => mockCounter),
          ],
          child: MaterialApp(
            home: CounterWidget(),
          ),
        ),
      );

      expect(find.text('42'), findsOneWidget);
    });
  });
}`}
        />
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Testing State Changes
          </h2>
          <p className="text-sm text-slate-600">
            Monitor provider state changes using listeners and expect state
            transitions:
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="state_change_test.dart"
          code={`void main() {
  group('State Change Tests', () {
    test('listener receives state updates', () {
      final container = ProviderContainer();
      final states = <int>[];

      // Listen to state changes
      container.listen(
        counterProvider,
        (previous, next) => states.add(next),
      );

      // Trigger state changes
      container.read(counterProvider.notifier).increment();
      container.read(counterProvider.notifier).increment();
      container.read(counterProvider.notifier).reset();

      // Verify all state transitions
      expect(states, [1, 2, 0]);
      
      container.dispose();
    });

    test('async state transitions', () async {
      final container = ProviderContainer();
      final states = <AsyncValue<User>>[];

      container.listen(
        userProvider(123),
        (previous, next) => states.add(next),
      );

      // Wait for async completion
      await container.read(userProvider(123).future);

      expect(states.first, isA<AsyncLoading>());
      expect(states.last, isA<AsyncData>());
      
      container.dispose();
    });
  });
}`}
        />
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            Integration Testing
          </h2>
          <p className="text-sm text-slate-600">
            Test multiple providers working together and complex interactions:
          </p>
        </div>

        <CodeBloack
          language="dart"
          fileName="shopping_cart_test.dart"
          code={`void main() {
  group('Shopping Cart Integration', () {
    late ProviderContainer container;

    setUp(() {
      container = ProviderContainer();
    });

    tearDown(() {
      container.dispose();
    });

    test('adding products updates cart and total', () {
      final product = Product(id: '1', name: 'Widget', price: 10.0);
      
      // Add product to cart
      container.read(cartProvider.notifier).addProduct(product);
      
      // Verify cart contents
      final cartItems = container.read(cartProvider);
      expect(cartItems.length, 1);
      expect(cartItems.first.product.id, '1');
      expect(cartItems.first.quantity, 1);
      
      // Verify computed total
      final total = container.read(cartTotalProvider);
      expect(total, 10.0);
    });

    test('removing products updates total', () {
      final product = Product(id: '1', name: 'Widget', price: 10.0);
      
      // Add and remove product
      container.read(cartProvider.notifier).addProduct(product);
      container.read(cartProvider.notifier).removeProduct('1');
      
      // Verify empty cart
      expect(container.read(cartProvider), isEmpty);
      expect(container.read(cartTotalProvider), 0.0);
    });
  });
}`}
        />
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-900">
          Testing Best Practices
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
          Common Testing Patterns
        </h2>

        <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {testingPatterns.map((item) => (
            <div key={item.title} className="p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.title === "Property-Based Testing" ? (
                  <>
                    Use libraries like{" "}
                    <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                      test_api
                    </code>{" "}
                    to generate random inputs and verify provider invariants.
                  </>
                ) : (
                  item.description
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-lg font-semibold text-blue-800">
            Testing Tools
          </h3>
          <p className="mt-2 text-sm leading-6 text-blue-700">
            Consider using additional testing tools like{" "}
            <code className="rounded bg-blue-100 px-1.5 py-0.5 text-xs">
              mockito
            </code>{" "}
            for mocks,{" "}
            <code className="rounded bg-blue-100 px-1.5 py-0.5 text-xs">
              fake_async
            </code>{" "}
            for time-based testing, and{" "}
            <code className="rounded bg-blue-100 px-1.5 py-0.5 text-xs">
              integration_test
            </code>{" "}
            for end-to-end scenarios in complex applications.
          </p>
        </div>
      </section>
    </>
  );
}
