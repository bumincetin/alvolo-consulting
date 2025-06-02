import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';

export const runtime = 'edge';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Video Background Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/arkaplan.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Alvolo Consulting
            </h1>
            <p className="text-xl md:text-2xl text-white">
              Your Gateway to Italy
            </p>
          </div>
        </div>
      </div>

      <Hero />
      <Services />
      <Contact />
    </main>
  );
}
