import Image from "next/image";
import Datewedding from "@/components/Datewedding";
import Groomandbride from "@/components/Groomandbride";
import RSVPForm from "@/components/RSVPForm";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b font-sans">
      {/* Hero Section */}
      <section>
        <Hero />
      </section>

      <section>
        <Datewedding />
      </section>

      <section>
        <Groomandbride />
      </section>

      {/* RSVP Form */}
      {/* <section aria-label="Form Konfirmasi Kehadiran RSVP">
        <RSVPForm />
      </section> */}

      {/* Footer */}
      {/* <footer className="py-6 text-sm text-center text-gray-500 bg-white border-t">
        &copy; 2025 Teguh &amp; Aisyah | Undangan Digital
      </footer> */}
    </main>
  );
}
