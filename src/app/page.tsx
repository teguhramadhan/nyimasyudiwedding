import Image from "next/image";
import Datewedding from "@/components/Datewedding";
import RSVPForm from "@/components/RSVPForm";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b font-sans">
      {/* Hero Section */}
      <section
        className="py-32 text-center text-white bg-cover bg-center lg:bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: "url('/images/hero_img1.png')" }}
        aria-label="Bagian Hero Undangan"
      >
        <Hero />
      </section>

      <section className="bg-black">
        <Datewedding />
      </section>

      {/* Waktu & Tempat */}
      <section
        className="py-12 bg-white shadow-inner text-center"
        aria-label="Informasi Waktu dan Tempat Acara"
      >
        <h2 className="text-3xl font-semibold mb-4">Waktu &amp; Tempat</h2>
        <div className="text-lg space-y-1">
          <p>Minggu, 25 Mei 2025</p>
          <p>Pukul 10:00 WIB</p>
          <p>Gedung Serbaguna Cinta Kasih, Bandung</p>
        </div>
      </section>

      {/* Galeri Foto */}
      <section
        className="py-12 bg-pink-50 text-center"
        aria-label="Galeri Foto Pernikahan"
      >
        <h2 className="text-3xl font-semibold mb-6">Galeri Kami</h2>
        <div className="flex justify-center flex-wrap gap-6 max-w-4xl mx-auto">
          <Image
            src="/file.svg"
            alt="Foto dekorasi pernikahan"
            width={200}
            height={200}
            className="rounded-xl shadow-md"
            priority
          />
          <Image
            src="/vercel.svg"
            alt="Foto pasangan pengantin"
            width={200}
            height={200}
            className="rounded-xl shadow-md"
            priority
          />
        </div>
      </section>

      {/* Lokasi Acara */}
      <section
        className="py-12 bg-white text-center"
        aria-label="Lokasi Acara Pernikahan"
      >
        <h2 className="text-3xl font-semibold mb-4">Lokasi Acara</h2>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=..." // Ganti dengan link Google Maps lokasi asli
            width="350"
            height="250"
            className="rounded-lg border shadow-md"
            allowFullScreen
            loading="lazy"
            aria-label="Peta lokasi Gedung Serbaguna Cinta Kasih"
          />
        </div>
      </section>

      {/* RSVP Form */}
      <section
        className="py-12 bg-pink-100 text-center"
        aria-label="Form Konfirmasi Kehadiran RSVP"
      >
        <RSVPForm />
      </section>

      {/* Footer */}
      <footer className="py-6 text-sm text-center text-gray-500 bg-white border-t">
        &copy; 2025 Teguh &amp; Aisyah | Undangan Digital
      </footer>
    </main>
  );
}
