"use client";

export default function Groomandbride() {
  return (
    <div className="h-screen px-4 lg:px-24 my-12">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl lg:text-6xl font-cinzelDecorative mb-6">
          bride and groom
        </h1>
      </div>

      <div
        className="flex flex-col lg:flex-row justify-center items-center gap-4"
        style={{ backgroundImage: "url('/images/ornaments/ornaments3.png')" }}
      >
        {/* Bride Profile */}
        <div className="w-full border-2 border-dashed border-gold mx-auto text-center py-12 lg:py-48">
          <h1 className="text-xl lg:text-4xl font-cinzelDecorative">
            Nyimas Siti Nuraisyah
          </h1>
          <p className="text-lg lg:text-2xl font-slabo mt-4 mb-2 lg:mt-6 lg:mb-3 text-gray-500">
            Putra dari pasangan
          </p>
          <p className="text-lg lg:text-2xl font-slabo text-gray-500">
            Bpk. Fulan, Ibu Fulana
          </p>
          <h3 className="font-slabo text-2xl mt-6">
            instagram : <a href="#">@nyimasss</a>
          </h3>
          <img
            src="/images/bride_avatar.png"
            alt="Logo pernikahan"
            className="w-[200px] mx-auto mt-12"
          />
        </div>
        {/* Groom Profile */}
        <div className="w-full border-2 border-dashed border-gold mx-auto text-center py-12 lg:py-48">
          <img
            src="/images/groom_avatar.png"
            alt="Logo pernikahan"
            className="w-[200px] mx-auto mb-12"
          />
          <h1 className="text-xl lg:text-4xl font-cinzelDecorative">Yudi</h1>
          <p className="text-lg lg:text-2xl font-slabo mt-4 mb-2 lg:mt-6 lg:mb-3 text-gray-500">
            Putra dari pasangan
          </p>
          <p className="text-lg lg:text-2xl font-slabo text-gray-500">
            Bpk. Fulan, Ibu Fulana
          </p>
          <h3 className="font-slabo text-2xl mt-6">
            instagram : <a href="#">@yudiii</a>
          </h3>
        </div>
      </div>
    </div>
  );
}
