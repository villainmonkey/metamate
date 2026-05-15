"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] selection:bg-purple-100 selection:text-purple-900">
      <Nav />

      <section className="pt-48 pb-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-[40px] shadow-sm border border-gray-100">
          <div className="mb-12">
            <h1 className="text-4xl font-medium tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-gray-500 text-sm font-medium">Effective Date: May 15, 2026 | MetaMate Stealth Beta (v0.1)</p>
          </div>

          <div className="space-y-10 text-gray-600 leading-relaxed text-[15px]">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                MetaMate ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and secure your data as you interact with the MetaMate stealth beta platform. Because MetaMate deals with autonomous AI identity and persistent memory architectures, we have instituted rigorous data sovereignty protocols to protect your digital consciousness.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Beta Signup Data</h2>
              <p className="mb-4">
                During the stealth beta phase, we collect specific information to curate our founding user base:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Identity Information:</strong> Name, email address, and X/Twitter handle.</li>
                <li><strong>Professional Context:</strong> Occupation and user classification (Founder, Researcher, etc.).</li>
                <li><strong>Intent Data:</strong> Your expressed reasons for joining the beta and interest in the ecosystem.</li>
              </ul>
              <p className="mt-4">
                This data is used exclusively to evaluate beta applications, communicate rollout phases, and provision genesis accounts. It is never sold to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. AI Interaction & Persistent Memory Concepts</h2>
              <p className="mb-4">
                MetaMate's core value proposition relies on the continuous indexing of behavioral and contextual data. If you are selected to mint a MetaMate, please note:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Contextual Vectors:</strong> Conversations, preferences, and decisions are encrypted and stored in your isolated vector database.</li>
                <li><strong>A2A Data Transfer:</strong> During Agent-to-Agent interactions, only the minimum required contextual payload is exchanged based on rules you define.</li>
                <li><strong>Sovereignty:</strong> You retain the cryptographic right to wipe your MetaMate's persistent memory at any time.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Analytics and Cookies</h2>
              <p>
                We use privacy-respecting analytics tools to monitor the performance of our landing pages and application infrastructure. This includes standard cookie deployment to manage session states, track conversion funnels for the beta form, and ensure site security. We do not use third-party advertising tracking cookies during the stealth beta phase.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Security Principles</h2>
              <p>
                Our infrastructure is built on zero-trust principles. We utilize cryptographic identity graphs to ensure that your MetaMate cannot be hijacked or coerced into taking unauthorized actions. All vector data is encrypted at rest and in transit. However, as an experimental beta platform, we emphasize that users participate at their own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Communication Permissions</h2>
              <p>
                By submitting a beta application, you consent to receive email communications regarding your application status, platform updates, and exclusive community invites. You may opt out of non-critical updates at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
              <p>
                For questions regarding this Privacy Policy or your data, please contact us at <a href="mailto:privacy@metamate.com" className="text-purple-600 font-bold hover:underline">privacy@metamate.com</a>.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
