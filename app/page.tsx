import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Mission from "@/components/Mission";
import Products from "@/components/Products";
import Farmers from "@/components/Farmers";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Stats />
                <Mission />
                <Products />
                <Farmers />
                <CTABanner />
            </main>
            <Footer />
        </>
    );
}
