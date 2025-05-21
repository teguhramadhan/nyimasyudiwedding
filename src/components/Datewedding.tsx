"use client";

export default function Datewedding() {
  return (
    <div
      className="px-4 py-4 md:px-12 md:py-12 lg:px-24 lg:py-24 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/ornaments/ornaments3.png')" }}
    >
      <div className="border-2 border-dashed border-orange-500 px-6 py-6 bg-black/5 backdrop-blur-sm">
        {/* Ayat AL-Qur'an */}
        <div className="flex flex-col justify-center items-center gap-6">
          <img
            src="/images/logo_gold.png"
            alt="Logo pernikahan"
            className="w-[140px] md:w-[180px] lg:w-[200px] mx-auto mt-12 mb-6"
          />
          <h1 className="text-lg md:text-3xl lg:text-4xl text-right font-notoNaskhArabic max-w-6xl text-gray-800">
            بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
          </h1>

          <h4 className="text-base md:text-lg lg:text-2xl lg:leading-8 font-slabo max-w-4xl text-justify mt-6 text-gray-800">
            Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
            pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu
            merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan
            kasih sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </h4>

          <p className="font-cinzelDecorative text-sm lg:text-xl">
            - Ar-Rum · Ayat 21 -
          </p>
        </div>

        {/* Save The Date */}
        <div className="flex flex-col justify-center items-center gap-0 mt-24">
          <h1 className="text-xl lg:text-3xl font-slabo text-center">
            Save The Date
          </h1>
          {/* Date Akad */}
          <h2 className="text-4xl lg:text-5xl font-cinzel text-center mt-6">
            AKAD NIKAH
          </h2>
          <div className="text-black pt-4 px-4 text-center">
            <p className="text-xl tracking-wide mb-4 uppercase font-slabo">
              Minggu
            </p>

            <div className="flex justify-center items-center space-x-6 mb-4">
              {/* Bulan */}
              <div className="text-2xl font-semibold font-cinzel">Juni</div>

              {/* Tanggal */}
              <div className="border-l border-r border-black px-6 text-6xl font-bold font-cinzel">
                22
              </div>

              {/* Tahun */}
              <div className="text-2xl font-semibold font-cinzel">2025</div>
            </div>

            <p className="text-sm mb-6 font-slabo">08:00 - 10:00</p>

            <div className="text-base leading-relaxed">
              <p className="font-medium text-2xl font-slabo">
                Rumah Mempelai Perempuan
              </p>
              <p className="font-slabo">
                Jl. Saneke, Kecamatan Kutawaringin Kabupaten Bandung
              </p>
            </div>
          </div>

          {/* Date Resepsi */}
          <h2 className="text-4xl lg:text-5xl font-cinzel text-center mt-6">
            RESEPSi PERNIKAHAN
          </h2>
          <div className="text-black pt-4 px-4 text-center">
            <p className="text-xl tracking-wide mb-4 uppercase font-slabo">
              Minggu
            </p>

            <div className="flex justify-center items-center space-x-6 mb-4">
              {/* Bulan */}
              <div className="text-2xl font-semibold font-cinzel">Juni</div>

              {/* Tanggal */}
              <div className="border-l border-r border-black px-6 text-6xl font-bold font-cinzel">
                22
              </div>

              {/* Tahun */}
              <div className="text-2xl font-semibold font-cinzel">2025</div>
            </div>

            <p className="text-sm mb-6 font-slabo">10:00 - 16:00</p>

            <div className="text-base leading-relaxed">
              <p className="font-medium text-2xl font-slabo">
                Rumah Mempelai Perempuan
              </p>
              <p className="font-slabo">
                Jl. Saneke, Kecamatan Kutawaringin Kabupaten Bandung
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
