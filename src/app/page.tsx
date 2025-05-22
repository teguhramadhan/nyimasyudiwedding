import Image from "next/image";
import Hero from "@/components/Hero";
import Datewedding from "@/components/Datewedding";
import Groomandbride from "@/components/Groomandbride";
import Story from "@/components/Story";
import RSVPForm from "@/components/RSVPForm";
import Gifts from "@/components/Gifts";
import Footers from "@/components/Footers";

export default function Home() {
  return (
    <main className="min-h-screen font-slabo">
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

      <section>
        <Story />
      </section>

      <section>
        <RSVPForm />
      </section>

      <section>
        <Gifts />
      </section>

      <section>
        <Footers />
      </section>

      {/* Footer */}
      {/* <footer className="py-6 text-sm text-center text-gray-500 bg-white border-t">
        &copy; 2025 Teguh &amp; Aisyah | Undangan Digital
      </footer> */}
    </main>
  );
}
