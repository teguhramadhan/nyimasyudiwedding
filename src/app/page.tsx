import Image from "next/image";
import RSVPForm from "@/components/RSVPForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="py-20 text-center bg-pink-200">
        <h1 className="text-5xl font-bold mb-4">Teguh & Aisyah</h1>
        <p className="text-xl">
          Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Anda untuk
          hadir di hari bahagia kami.
        </p>
      </section>

      {/* Waktu & Tempat */}
      <section className="py-12 bg-white shadow-inner text-center">
        <h2 className="text-3xl font-semibold">Waktu & Tempat</h2>
        <div className="mt-4 text-lg">
          <p>Minggu, 25 Mei 2025</p>
          <p>Pukul 10:00 WIB</p>
          <p className="mt-2">Gedung Serbaguna Cinta Kasih, Bandung</p>
        </div>
      </section>

      {/* Galeri Foto */}
      <section className="py-12 text-center bg-pink-50">
        <h2 className="text-3xl font-semibold mb-6">Galeri Kami</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <Image
            src="/file.svg"
            alt="foto1"
            width={200}
            height={200}
            className="rounded-xl shadow-md"
          />
          <Image
            src="/vercel.svg"
            alt="foto2"
            width={200}
            height={200}
            className="rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* Lokasi */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Lokasi Acara</h2>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=..." // Ganti link sesuai lokasi
            width="350"
            height="250"
            className="rounded-lg border shadow-md"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* RSVP Form */}
      <section className="py-12 bg-pink-100 text-center">
        <RSVPForm />
      </section>

      {/* Footer */}
      <footer className="py-6 text-sm text-center text-gray-500 bg-white border-t">
        &copy; 2025 Teguh & Aisyah | Undangan Digital
      </footer>
    </main>
  );
}
