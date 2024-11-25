import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import AdBanner from '@/components/AdBanner';
import LoadingSpinner from '@/components/LoadingSpinner';

const ToolSelector = dynamic(() => import('@/components/ToolSelector'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const Features = dynamic(() => import('@/components/Features'), {
  loading: () => <LoadingSpinner />
});

const HowItWorks = dynamic(() => import('@/components/HowItWorks'), {
  loading: () => <LoadingSpinner />
});

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <LoadingSpinner />
});

export const metadata: Metadata = {
  title: 'Free Background Remover - Remove Background from Images Online',
  description: 'Remove background from images for free using our AI-powered tool. Perfect for e-commerce, social media, and professional use.',
  keywords: ['background remover', 'remove background', 'free background removal', 'AI background eraser'],
  openGraph: {
    title: 'Free Background Remover - Remove Background from Images Online',
    description: 'Remove background from images for free using our AI-powered tool.',
    type: 'website',
    url: 'https://bgremoval.in',
  }
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
          </Suspense>
          
          <AdBanner className="my-8" slot="top-banner" />

          <div id="tools" className="mt-12 scroll-mt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <ToolSelector />
            </Suspense>
          </div>

          <AdBanner className="my-12" slot="middle-banner" />
          
          <Suspense fallback={<LoadingSpinner />}>
            <HowItWorks />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <Features />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <Testimonials />
          </Suspense>

          <AdBanner className="my-12" slot="bottom-banner" />
        </div>
      </div>
    </main>
  );
}