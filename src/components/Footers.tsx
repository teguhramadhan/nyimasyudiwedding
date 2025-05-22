"use client";

export default function Footers() {
  return (
    <footer className="bg-white/30 border-t border-gold py-8 text-center">
      <div className="px-4">
        <h4 className="text-xl font-cinzelDecorative text-gold mb-2">
          Terima kasih atas perhatian anda
        </h4>
        <p className="text-md text-gray-700 font-slabo">
          Kami yang berbahagia,
        </p>
        <p className="text-lg font-semibold text-gold font-cinzelDecorative mt-1">
          Nyimas & Yudi
        </p>

        <div className="mt-4 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Undangan Digital by Teguh.
        </div>
      </div>
    </footer>
  );
}
