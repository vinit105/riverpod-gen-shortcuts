import DocsShell from "../../components/DocsShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "StreamProvider",
  description: "Consume streams and real-time data with StreamProvider in Riverpod",
};

export default function StreamProviderPage() {
  return (
    <DocsShell
      title="StreamProvider"
      description="StreamProvider seamlessly integrates Dart Streams into your Flutter applications."
    >
      <div className="prose prose-amber dark:prose-invert max-w-none">
        <p>
          StreamProvider is ideal for data that produces values over time. It wraps the
          underlying <code>Stream</code> in an <code>AsyncValue</code>, allowing you to gracefully
          handle loading and error states without using <code>StreamBuilder</code>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          When to Use StreamProvider
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Listening to WebSocket events or Server-Sent Events (SSE)</li>
          <li>Real-time database updates like Firebase Firestore or Supabase</li>
          <li>Location updates or sensor data</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          Basic Syntax
        </h2>
        <p>Simply return a <code>Stream</code> from a function annotated with <code>@riverpod</code>:</p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'location.g.dart';

@riverpod
Stream<Location> userLocation(UserLocationRef ref) async* {
  final service = ref.watch(locationServiceProvider);
  yield* service.getLocationStream();
}`}</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          Using StreamProvider in Widgets
        </h2>
        <p>
          StreamProvider yields an <code>AsyncValue</code> just like FutureProvider, so you can use 
          <code>.when()</code> to render different UI states:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`class LocationTracker extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final locationAsync = ref.watch(userLocationProvider);
    
    return locationAsync.when(
      data: (location) => Text('Lat: \${location.lat}, Lng: \${location.lng}'),
      loading: () => CircularProgressIndicator(),
      error: (error, stack) => Text('Error getting location: $error'),
    );
  }
}`}</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-900 group-hover:text-amber-800">
          Converting Streams to Futures
        </h2>
        <p>You can listen to the latest state synchronously or get the next emitted event by appending <code>.future</code>:</p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`ElevatedButton(
  onPressed: () async {
    // Wait for the next location emitted by the stream
    final nextLocation = await ref.read(userLocationProvider.future);
    print(nextLocation);
  },
  child: Text('Get current location'),
)`}</code>
        </pre>
      </div>
    </DocsShell>
  );
}