"use client";

export default function Hero() {
  return (
    <div>
      {/* Overlay gradasi */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-0"></div>

      {/* Ornamen hanya aktif selama Hero section */}
      <img
        src="/images/ornaments/ornaments1.png"
        alt="Ornamen Hero"
        className="absolute top-0 left-0 aspect-auto w-[350px]  md:w-[140px] md:aspect-auto lg:w-[400px] lg:aspect-auto z-20 pointer-events-none"
      />
      <img
        src="/images/ornaments/ornaments2.png"
        alt="Ornamen Hero"
        className="absolute bottom-0 right-0 w-[350px] aspect-auto  md:w-[140px] md:aspect-auto lg:w-[400px] lg:aspect-auto z-20 pointer-events-none"
      />

      {/* Tombol Buka Undangan */}
      <div className="absolute bottom-12 md:bottom-24 lg:bottom-24 left-1/2 transform -translate-x-1/2 z-50">
        <a
          href="#"
          className="border bg-white text-black hover:bg-black hover:text-white transition-all duration-700 ease-in-out px-4 py-4 md:px-6 md:py-4 lg:px-8 lg:py-6 text-lg font-slabo font-medium"
        >
          Buka Undangan
        </a>
      </div>

      {/* Konten utama di atas overlay */}
      <div className="relative z-30 flex flex-col items-center justify-center px-4 gap-12">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-cinzel">
          UNDANGAN PERNIKAHAN
        </h1>
        <img
          src="/images/logo_white.png"
          alt="Logo pernikahan"
          className="w-[200px] aspect-auto"
        />
        <h1 className="text-2xl max-w-xl font-cinzelDecorative">
          Nyimas & Yudi
        </h1>
      </div>
    </div>
  );
}
