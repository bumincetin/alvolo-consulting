import Navbar from '@/components/layout/Navbar'; // Assuming Navbar is at this path
// import Footer from '@/components/layout/Footer'; // Uncomment and adjust path if you have a Footer

export default function RealEstateAgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
} 