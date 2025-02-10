import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Hero from "@/components/Hero";  // Keep Hero non-dynamic as it's above the fold
import LoadingSpinner from '@/components/ui/LoadingSpinner';

// Dynamically import components that are below the fold
const Grid = dynamic(() => import("@/components/ui/Grid"), {
  loading: () => <LoadingSpinner />,
  ssr: false  
});

const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  loading: () => <LoadingSpinner />,
  ssr: false  
});

const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <LoadingSpinner />,
  ssr: false  
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <LoadingSpinner />,
  ssr: false  
});

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center 
    items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        
        {/* Hero is not dynamically imported as it's above the fold */}
        <Hero />

        {/* Wrap dynamic imports in Suspense boundaries */}
        <Suspense fallback={<LoadingSpinner />}>
          <Grid />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <RecentProjects />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}


