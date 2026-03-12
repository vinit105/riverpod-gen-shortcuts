import DocsShell from "../components/DocsShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the Riverpod Gen Shortcuts project and team",
};

export default function AboutPage() {
  return (
    <DocsShell>
      <h1>About Us</h1>
      <p>
        Riverpod Gen Shortcuts is a comprehensive toolkit and documentation
        resource designed to accelerate Flutter development with Riverpod state
        management. Our mission is to make Riverpod more accessible and
        productive for developers of all skill levels.
      </p>

      <h2>What We Do</h2>
      <p>
        We provide code generation shortcuts, IDE snippets, comprehensive
        documentation, and best practices to help you build robust Flutter
        applications faster. Our tools eliminate boilerplate code while
        maintaining type safety and following Riverpod conventions.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>Smart Code Generation:</strong> Automated provider creation
          with build_runner integration
        </li>
        <li>
          <strong>IDE Snippets:</strong> Quick shortcuts for all provider types
          in VS Code, IntelliJ, and Android Studio
        </li>
        <li>
          <strong>Comprehensive Docs:</strong> Step-by-step guides with examples,
          GIFs, and video tutorials
        </li>
        <li>
          <strong>Best Practices:</strong> Testing strategies, performance tips,
          and migration guides
        </li>
      </ul>

      <h2>Community</h2>
      <p>
        This project is open source and community-driven. We welcome
        contributions, feedback, and suggestions from Flutter developers
        worldwide. Join our growing community to share knowledge and help
        improve the Riverpod ecosystem.
      </p>

      <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-6">
        <h3 className="!mt-0 text-lg font-semibold text-amber-800">
          Get Involved
        </h3>
        <p className="!mb-0 text-amber-700">
          Found a bug? Have a feature request? Want to contribute? Check out our
          GitHub repository and join the conversation. Every contribution helps
          make Flutter development better for everyone.
        </p>
      </div>
    </DocsShell>
  );
}