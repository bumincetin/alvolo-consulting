import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import Navbar from '@/components/layout/Navbar';
import AnimatedSection from '@/components/AnimatedSection';

export const runtime = 'edge';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <AnimatedSection>
          <Services />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <Contact />
        </AnimatedSection>
      </main>
    </>
  );
}
