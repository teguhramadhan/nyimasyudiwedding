"use client";

export default function Hero() {
  return (
    <div
      className="relative py-32 text-center text-white bg-cover bg-center lg:bg-center bg-no-repeat h-[100dvh]"
      style={{ backgroundImage: "url('/images/hero_img1.png')" }}
      aria-label="Bagian Hero Undangan overflow-hidden text-white"
    >
      {/* Overlay gradasi */}
      <div className="absolute inset-0 bg-black/40 z-10 h-screen" />

      {/* Ornamen */}
      <img
        src="/images/ornaments/ornaments1.png"
        alt="Ornamen Hero"
        className="absolute top-0 left-0 w-[350px] md:w-[140px] lg:w-[400px] z-20 pointer-events-none"
      />
      <img
        src="/images/ornaments/ornaments2.png"
        alt="Ornamen Hero"
        className="absolute bottom-0 right-0 w-[350px] md:w-[140px] lg:w-[400px] z-20 pointer-events-none"
      />

      {/* Konten Utama */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-cinzel mb-6">
          UNDANGAN PERNIKAHAN
        </h1>
        <img
          src="/images/logo_white.png"
          alt="Logo pernikahan"
          className="w-[200px] mx-auto"
        />
        <h1 className="text-2xl mx-auto font-cinzelDecorative mt-6">
          Nyimas & Yudi
        </h1>
        <h2 className="font-slabo">22 JUNI 2025</h2>
        <div className="mt-12">
          <h2 className="font-slabo mb-3">Kepada YTH.</h2>
          <p className="font-cinzel text-xl">Bpk [Disini nama nya dinamis]</p>
        </div>
      </div>

      {/* Tombol Buka Undangan */}
      <div className="absolute bottom-12 md:bottom-24 w-full z-50 flex justify-center">
        <a
          href="#"
          className="border border-gold bg-gold text-white hover:bg-gray-950 hover:text-white transition-all duration-700 ease-in-out px-6 py-4 md:px-8 md:py-5 text-xl font-slabo font-medium"
        >
          Buka Undangan
        </a>
      </div>
    </div>
  );
}
