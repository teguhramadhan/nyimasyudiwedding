"use client";
import { useState } from "react";

const GiftCard = ({ logo, title, number, name }: any) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-white/60 backdrop-blur-md border border-gold p-6 flex items-center gap-6 hover:scale-[1.02] transition shadow-md">
      <img src={logo} alt={title} className="w-16 h-16 object-contain" />
      <div className="flex-1 text-left">
        <h4 className="text-xl font-bold text-gold">{title}</h4>
        <p className="text-gray-800 text-lg font-bold">{number}</p>
        {name && <p className="text-sm text-gray-600">a.n {name}</p>}
      </div>
      <button
        onClick={handleCopy}
        className="bg-gold/30 border border-gold text-orange-500 hover:border-gold px-3 py-3 rounded-md text-sm transition font-medium flex items-center gap-1"
      >
        {copied ? (
          "Tersalin!"
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default function Gifts() {
  return (
    <section
      className="h-screen mt-48 lg:mt-0 flex items-center justify-center bg-cover px-6 py-12"
      style={{ backgroundImage: "url('/images/ornaments/ornaments1.png')" }}
    >
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4 font-cinzelDecorative">
          Kirim Hadiah 💝
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Doa restu Anda merupakan hadiah terbaik, namun jika ingin mengirim
          hadiah, berikut informasi yang bisa digunakan.
        </p>

        {/* Container Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
          <GiftCard
            logo="/images/utils/ewallet/bca.png"
            title="BCA"
            number="123-456-7890"
            name="Teguh & Partner"
          />
          <GiftCard
            logo="/images/utils/ewallet/gopay.png"
            title="GoPay"
            number="0812-3456-7890"
          />
          <GiftCard
            logo="/images/utils/ewallet/dana.png"
            title="Dana"
            number="0812-3456-7890"
          />
          <GiftCard
            logo="/images/utils/ewallet/ovo.png"
            title="OVO"
            number="0812-3456-7890"
          />
        </div>
      </div>
    </section>
  );
}
