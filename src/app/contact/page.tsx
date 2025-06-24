"use client";

import Navbar from '@/components/layout/Navbar';
// import Footer from '@/components/layout/Footer'; // Remove this import
import Contact from '@/components/sections/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
    </div>
  );
} 