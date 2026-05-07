import { Metadata } from "next";
import CodeBloack from "../../components/CodeBloack";

export const metadata: Metadata = {
  title: "Examples",
  description: "Real-world Riverpod examples and code patterns",
};

const examples = [
  {
    title: "Counter App",
    description:
      "The classic Flutter counter app built with Riverpod state management.",
    fileName: "counter_example.dart",
    code: `// providers/counter.dart
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'counter.g.dart';

@riverpod
class Counter extends _$Counter {
  @override
  int build() => 0;

  void increment() => state++;
  void decrement() => state--;
  void reset() => state = 0;
}

// main.dart
class CounterApp extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final count = ref.watch(counterProvider);
    final counter = ref.read(counterProvider.notifier);

    return Scaffold(
      appBar: AppBar(title: Text('Counter: $count')),
      body: Center(
        child: Column(
          children: [
            Text('$count', style: Theme.of(context).textTheme.headlineMedium),
            Row(
              children: [
                ElevatedButton(
                  onPressed: counter.decrement,
                  child: Text('-'),
                ),
                ElevatedButton(
                  onPressed: counter.reset,
                  child: Text('Reset'),
                ),
                ElevatedButton(
                  onPressed: counter.increment,
                  child: Text('+'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}`,
  },
  {
    title: "HTTP API Integration",
    description:
      "Fetching data from REST APIs with error handling and loading states.",
    fileName: "users_example.dart",
    code: `// models/user.dart
class User {
  final int id;
  final String name;
  final String email;

  User({required this.id, required this.name, required this.email});

  factory User.fromJson(Map<String, dynamic> json) => User(
    id: json['id'],
    name: json['name'],
    email: json['email'],
  );
}

// providers/users.dart
import 'package:http/http.dart' as http;
import 'dart:convert';

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
}

@riverpod
Future<User> user(UserRef ref, int id) async {
  final response = await http.get(
    Uri.parse('https://jsonplaceholder.typicode.com/users/$id'),
  );
  
  if (response.statusCode == 200) {
    return User.fromJson(json.decode(response.body));
  } else {
    throw Exception('User not found');
  }
}

// widgets/user_list.dart
class UserListWidget extends ConsumerWidget {
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
            onTap: () => Navigator.push(
              context,
              MaterialPageRoute(
                builder: (_) => UserDetailPage(userId: user.id),
              ),
            ),
          );
        },
      ),
      loading: () => Center(child: CircularProgressIndicator()),
      error: (error, stack) => Center(
        child: Text('Error: $error'),
      ),
    );
  }
}`,
  },
  {
    title: "Shopping Cart",
    description:
      "Complex state management with multiple related providers and computed values.",
    fileName: "cart_example.dart",
    code: `// models/product.dart
class Product {
  final String id;
  final String name;
  final double price;
  final String imageUrl;

  Product({
    required this.id,
    required this.name,
    required this.price,
    required this.imageUrl,
  });
}

class CartItem {
  final Product product;
  final int quantity;

  CartItem({required this.product, required this.quantity});
}

// providers/cart.dart
@riverpod
class Cart extends _$Cart {
  @override
  List<CartItem> build() => [];

  void addProduct(Product product) {
    final existingIndex = state.indexWhere(
      (item) => item.product.id == product.id,
    );

    if (existingIndex >= 0) {
      // Increase quantity
      final updatedItem = CartItem(
        product: product,
        quantity: state[existingIndex].quantity + 1,
      );
      state = [
        ...state.sublist(0, existingIndex),
        updatedItem,
        ...state.sublist(existingIndex + 1),
      ];
    } else {
      // Add new item
      state = [...state, CartItem(product: product, quantity: 1)];
    }
  }

  void removeProduct(String productId) {
    state = state.where((item) => item.product.id != productId).toList();
  }

  void updateQuantity(String productId, int quantity) {
    if (quantity <= 0) {
      removeProduct(productId);
      return;
    }

    final index = state.indexWhere((item) => item.product.id == productId);
    if (index >= 0) {
      final updatedItem = CartItem(
        product: state[index].product,
        quantity: quantity,
      );
      state = [
        ...state.sublist(0, index),
        updatedItem,
        ...state.sublist(index + 1),
      ];
    }
  }

  void clear() => state = [];
}

// Computed providers
@riverpod
double cartTotal(CartTotalRef ref) {
  final cartItems = ref.watch(cartProvider);
  return cartItems.fold(
    0.0,
    (sum, item) => sum + (item.product.price * item.quantity),
  );
}

@riverpod
int cartItemCount(CartItemCountRef ref) {
  final cartItems = ref.watch(cartProvider);
  return cartItems.fold(
    0,
    (sum, item) => sum + item.quantity,
  );
}`,
  },
  {
    title: "Form Validation",
    description: "Handle form state and validation with Riverpod providers.",
    fileName: "login_form.dart",
    code: `// providers/login_form.dart
class LoginFormState {
  final String email;
  final String password;
  final String? emailError;
  final String? passwordError;
  final bool isLoading;

  LoginFormState({
    this.email = '',
    this.password = '',
    this.emailError,
    this.passwordError,
    this.isLoading = false,
  });

  LoginFormState copyWith({
    String? email,
    String? password,
    String? emailError,
    String? passwordError,
    bool? isLoading,
  }) {
    return LoginFormState(
      email: email ?? this.email,
      password: password ?? this.password,
      emailError: emailError ?? this.emailError,
      passwordError: passwordError ?? this.passwordError,
      isLoading: isLoading ?? this.isLoading,
    );
  }

  bool get isValid => 
    email.isNotEmpty && 
    password.isNotEmpty && 
    emailError == null && 
    passwordError == null;
}

@riverpod
class LoginForm extends _$LoginForm {
  @override
  LoginFormState build() => LoginFormState();

  void updateEmail(String email) {
    state = state.copyWith(
      email: email,
      emailError: _validateEmail(email),
    );
  }

  void updatePassword(String password) {
    state = state.copyWith(
      password: password,
      passwordError: _validatePassword(password),
    );
  }

  String? _validateEmail(String email) {
    if (email.isEmpty) return 'Email is required';
    if (!email.contains('@')) return 'Invalid email format';
    return null;
  }

  String? _validatePassword(String password) {
    if (password.isEmpty) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    return null;
  }

  Future<void> submit() async {
    if (!state.isValid) return;

    state = state.copyWith(isLoading: true);

    try {
      // Simulate API call
      await Future.delayed(Duration(seconds: 2));
      // Handle success
    } catch (e) {
      // Handle error
    } finally {
      state = state.copyWith(isLoading: false);
    }
  }
}`,
  },
];

export default function ExamplesPage() {
  return (
    <>
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Examples
        </h1>
        <p className="text-base leading-7 text-slate-600">
          Learn Riverpod through real-world examples. Each example includes full
          source code, explanation, and best practices.
        </p>
      </section>

      {examples.map((example) => (
        <section key={example.title} className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">
              {example.title}
            </h2>
            <p className="text-sm leading-6 text-slate-600">
              {example.description}
            </p>
          </div>

          <CodeBloack
            language="dart"
            fileName={example.fileName}
            code={example.code}
          />
        </section>
      ))}

      <section>
        <div className="rounded-xl border border-green-200 bg-green-50 p-6">
          <h3 className="text-lg font-semibold text-green-800">
            More Examples
          </h3>
          <p className="mt-2 text-sm leading-6 text-green-700">
            Looking for more examples? Check out our{" "}
            <a href="https://github.com" className="font-semibold underline">
              GitHub repository
            </a>{" "}
            for complete sample applications including authentication, database
            integration, and complex UI patterns.
          </p>
        </div>
      </section>
    </>
  );
}
