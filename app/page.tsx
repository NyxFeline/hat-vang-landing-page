import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Tạm thời để có chỗ cuộn, xóa khi làm các section sau */}
        <div className="h-screen pt-16" />
      </main>
    </>
  );
}