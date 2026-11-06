import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Mission from "@/components/Mission";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Mission />
        <Products />
        {/* Tạm thời để có chỗ cuộn, xóa khi làm CTA Banner */}
        <div className="h-[40vh]" />
      </main>
    </>
  );
}