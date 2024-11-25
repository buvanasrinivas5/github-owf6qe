import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - BGRemoval.in',
  description: 'Privacy policy for BGRemoval.in - Learn how we protect your data and privacy.',
};

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide directly to us when using our services:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Images you upload for background removal</li>
            <li>Usage data and analytics</li>
            <li>Device and browser information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and improve our background removal service</li>
            <li>Analyze and optimize our website performance</li>
            <li>Protect against fraud and abuse</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your data:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>SSL encryption for all data transfers</li>
            <li>Regular security audits</li>
            <li>Limited data retention periods</li>
          </ul>
        </section>
      </div>
    </main>
  );
}