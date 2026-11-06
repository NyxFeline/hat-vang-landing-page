import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Mission from "@/components/Mission";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Mission />
        {/* Tạm thời để có chỗ cuộn, xóa khi làm Products */}
        <div className="h-[60vh]" />
      </main>
    </>
  );
}