import DocsShell from "../../components/DocsShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testing Riverpod Providers",
  description: "Learn how to test Riverpod providers with mocks, overrides, and best practices",
};

export default function TestingPage() {
  return (
    <DocsShell>
      <h1>Testing Riverpod Providers</h1>
      <p>
        Learn how to write comprehensive tests for your Riverpod providers using
        ProviderContainer, overrides, and mocking strategies.
      </p>

      <h2>Basic Provider Testing</h2>
      <p>
        Use <code>ProviderContainer</code> to test providers in isolation without
        widget dependencies:
      </p>
      <pre>
        <code>{`import 'package:flutter_test/flutter_test.dart';
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
}`}</code>
      </pre>

      <h2>Async Provider Testing</h2>
      <p>
        Test async providers by awaiting their futures and handling loading/error
        states:
      </p>
      <pre>
        <code>{`import 'package:flutter_test/flutter_test.dart';

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
}`}</code>
      </pre>

      <h2>Mocking Dependencies with Overrides</h2>
      <p>
        Use provider overrides to inject mock dependencies and control provider
        behavior in tests:
      </p>
      <pre>
        <code>{`// Mock repository
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
}`}</code>
      </pre>

      <h2>Widget Testing with Providers</h2>
      <p>
        Test widgets that consume providers using <code>ProviderScope</code>:
      </p>
      <pre>
        <code>{`import 'package:flutter/material.dart';
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
}`}</code>
      </pre>

      <h2>Testing State Changes</h2>
      <p>
        Monitor provider state changes using listeners and expect state
        transitions:
      </p>
      <pre>
        <code>{`void main() {
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
}`}</code>
      </pre>

      <h2>Integration Testing</h2>
      <p>
        Test multiple providers working together and complex interactions:
      </p>
      <pre>
        <code>{`void main() {
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
}`}</code>
      </pre>

      <h2>Testing Best Practices</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-green-100 bg-green-50/50 p-5">
          <div className="mb-2 text-lg">✅</div>
          <h3 className="!mt-0 text-sm font-semibold text-gray-900">Do</h3>
          <ul className="!mb-0 text-xs">
            <li>Test providers in isolation using ProviderContainer</li>
            <li>Use overrides to mock dependencies</li>
            <li>Test both success and error scenarios</li>
            <li>Verify state transitions and side effects</li>
          </ul>
        </div>
        <div className="rounded-lg border border-red-100 bg-red-50/50 p-5">
          <div className="mb-2 text-lg">❌</div>
          <h3 className="!mt-0 text-sm font-semibold text-gray-900">Don't</h3>
          <ul className="!mb-0 text-xs">
            <li>Test UI and provider logic in the same test</li>
            <li>Forget to dispose ProviderContainer</li>
            <li>Rely on real network calls in unit tests</li>
            <li>Test implementation details of generated code</li>
          </ul>
        </div>
      </div>

      <h2>Common Testing Patterns</h2>
      <div className="space-y-4">
        <div className="rounded-lg border border-gray-200 p-4">
          <h3 className="!mt-0 text-sm font-semibold">Golden Master Testing</h3>
          <p className="!mb-0 text-xs text-gray-600">
            Save provider state snapshots and compare against future runs to
            detect unintended changes.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-4">
          <h3 className="!mt-0 text-sm font-semibold">Property-Based Testing</h3>
          <p className="!mb-0 text-xs text-gray-600">
            Use libraries like <code>test_api</code> to generate random inputs
            and verify provider invariants.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-4">
          <h3 className="!mt-0 text-sm font-semibold">Performance Testing</h3>
          <p className="!mb-0 text-xs text-gray-600">
            Measure provider creation time and memory usage to catch performance
            regressions.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
        <h3 className="!mt-0 text-lg font-semibold text-blue-800">
          🧪 Testing Tools
        </h3>
        <p className="!mb-0 text-blue-700">
          Consider using additional testing tools like{" "}
          <code>mockito</code> for mocks, <code>fake_async</code> for time-based
          testing, and <code>integration_test</code> for end-to-end scenarios in
          complex applications.
        </p>
      </div>
    </DocsShell>
  );
}