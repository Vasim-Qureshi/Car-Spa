import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Other Components
import ServicePakages from "../utils/ServicePakages.jsx";
import ServiceList from "./admin/ServiceList";
import ServicesExamplePage from "./ServicesExamplePage";
import BookingModal from "../components/BookingModal.jsx";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import TrustBar from "../components/TrustBar.jsx";
import Section from "../components/Section.jsx";
import Services from "../components/Services.jsx";
import Pricing from "../components/Pricing.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Gallery from "../components/Gallery.jsx";
import Testimonials from "../components/Testimonials.jsx";
import FAQ from "../components/Faq.jsx";
import CTA from "../components/CTA.JSX";
import FloatingBook from "../components/FloatingBook.jsx";
import Footer from "../components/Footer.jsx";
// import Carousole from "../components/Carousole.jsx";


// Main Home Page Component
const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    const [booked, setBooked] = useState(false);

    const packages = ServicePakages();

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">

            <Navbar onBook={() => setOpenModal(true)} />
            <Hero onBook={() => setOpenModal(true)} />
            <TrustBar />

            <Section title="Services" subtitle="Interior + Exterior detailing without leaving home">
                <Services />
                <ServicesExamplePage />
                {/* <ServiceList /> */}
            </Section>

            <Section title="Transparent pricing" subtitle="Pick the perfect package for your car">
                <Pricing packages={packages} onBook={() => setOpenModal(true)} />
            </Section>

            <Section title="How it works" subtitle="Hassle-free in three steps">
                <HowItWorks />
            </Section>

            <Section title="Real results" subtitle="Before & after gallery">
                <Gallery />
            </Section>

            <Section title="Happy drivers" subtitle="5-star reviews from customers like you">
                <Testimonials />
            </Section>

            <Section title="FAQ" subtitle="Answers to common questions">
                <FAQ />
            </Section>

            <CTA onBook={() => setOpenModal(true)} />

            <Footer />

            <FloatingBook onClick={() => setOpenModal(true)} />

            <AnimatePresence>
                {openModal && (
                    <BookingModal
                        onClose={() => {
                            setOpenModal(false);
                            setBooked(false);
                        }}
                        onBooked={() => setBooked(true)}
                        booked={booked}
                        packages={packages}
                    />
                )}
            </AnimatePresence>

        </div>
    );
}

export default Home;