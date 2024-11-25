import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - BGRemoval.in',
  description: 'Terms of service and usage guidelines for BGRemoval.in',
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Usage Terms</h2>
          <p className="mb-4">
            By using BGRemoval.in, you agree to these terms:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use the service for lawful purposes only</li>
            <li>Do not attempt to abuse or overload our systems</li>
            <li>Respect other users and their content</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Service Limitations</h2>
          <p className="mb-4">
            Please be aware of the following limitations:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Maximum file size: 10MB per image</li>
            <li>Supported formats: JPG, PNG, WEBP</li>
            <li>Processing time may vary based on image complexity</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p className="mb-4">
            You retain all rights to your uploaded images. We do not claim ownership of your content.
          </p>
        </section>
      </div>
    </main>
  );
}