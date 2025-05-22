"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

type RSVPFormData = {
  nama: string;
  hadir: "Ya" | "Tidak";
  jumlah: number;
  ucapan: string;
  id?: string; // id opsional, buat data dari Firestore
};

export default function RSVPForm() {
  const [form, setForm] = useState<RSVPFormData>({
    nama: "",
    hadir: "Ya",
    jumlah: 1,
    ucapan: "",
  });
  const [loading, setLoading] = useState(false);
  const [sukses, setSukses] = useState(false);
  const [rsvps, setRsvps] = useState<RSVPFormData[]>([]);

  // Listener realtime Firestore, load data RSVP
  useEffect(() => {
    const q = query(collection(db, "rsvp"), orderBy("nama"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data: RSVPFormData[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...(doc.data() as Omit<RSVPFormData, "id">) });
      });
      setRsvps(data);
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    if (name === "jumlah") {
      setForm({ ...form, [name]: Number(value) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "rsvp"), form);
      setSukses(true);
      setForm({
        nama: "",
        hadir: "Ya",
        jumlah: 1,
        ucapan: "",
      });
    } catch {
      alert("Gagal mengirim RSVP");
    } finally {
      setLoading(false);
      setTimeout(() => setSukses(false), 3000); // hilangkan pesan sukses setelah 3 detik
    }
  };

  return (
    <div
      className="w-full rounded shadow mt-12 h-screen"
      style={{ backgroundImage: "url('/images/ornaments/ornaments3.png')" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:px-96 py-12 h-full">
        {/* KIRI: Daftar Ucapan */}
        <div className="md:w-1/2">
          <h4 className="text-2xl font-semibold mb-4 text-center font-cinzelDecorative text-gold">
            Ucapan untuk kedua mempelai
          </h4>
          <div className="max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gold/70 scrollbar-track-transparent hover:scrollbar-thumb-gold">
            {rsvps.length === 0 ? (
              <p className="text-center text-gray-600">
                Sepertinya belum ada ucapan masuk, ayo jadi yang pertama
                mengucapkan selamat untuk kedua mempelai🥰.
              </p>
            ) : (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gold/70">
                {rsvps.map(({ id, nama, hadir, jumlah, ucapan }) => (
                  <li
                    key={id}
                    className="bg-white/80 border border-gold p-4 relative"
                  >
                    {/* Ornamen hiasan */}
                    <div className="absolute top-4 right-4">
                      <img
                        src="/images/ornaments/ornaments2.png"
                        alt="Ornamen"
                        className="w-12 h-12"
                      />
                    </div>

                    <div className="space-y-1">
                      {/* Ganti <li> ini jadi <div> */}
                      <div className="p-4 relative">
                        <h5 className="text-lg font-semibold text-gold mb-4">
                          {nama}
                        </h5>
                        <div className="space-y-1">
                          {/* Status hadir dengan badge warna */}
                          <div className="flex gap-3 items-center my-4">
                            <span
                              className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                                hadir === "Ya"
                                  ? "bg-green-200 text-green-800"
                                  : "bg-red-200 text-red-800"
                              }`}
                            >
                              {hadir === "Ya" ? (
                                <>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                  Hadir
                                </>
                              ) : (
                                <>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M6 18L18 6M6 6l12 12"
                                    />
                                  </svg>
                                  Tidak Hadir
                                </>
                              )}
                            </span>

                            {/* Badge jumlah orang */}
                            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-gold/30 text-gold font-semibold text-sm">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                                  clipRule="evenodd"
                                />
                                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                              </svg>

                              {jumlah}
                            </span>
                          </div>

                          <p className="italic text-gray-600 mt-2 border-t pt-2 text-lg font-slabo">
                            “{ucapan || "Tidak ada ucapan."}”
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* KANAN: Form RSVP */}
        <div className="md:w-1/2">
          <h3 className="text-2xl text-gold font-semibold mb-4 text-center font-cinzelDecorative">
            Konfirmasi Kehadiran
          </h3>
          <div className="border border-dashed border-gold px-6 py-8 bg-white/30 rounded">
            <form onSubmit={handleSubmit}>
              <input
                name="nama"
                value={form.nama}
                onChange={handleChange}
                placeholder="Nama lengkap"
                required
                className="w-full p-2 mb-4 border border-gold bg-gold/10 placeholder:text-gray-600"
              />

              <select
                name="hadir"
                value={form.hadir}
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gold bg-gold/10 placeholder:text-gray-600"
              >
                <option value="Ya">Hadir</option>
                <option value="Tidak">Tidak Hadir</option>
              </select>

              <input
                name="jumlah"
                type="number"
                value={form.jumlah}
                onChange={handleChange}
                placeholder="Jumlah orang"
                required
                className="w-full p-2 mb-4 border border-gold bg-gold/10 placeholder:text-gray-600"
                min={1}
              />

              <textarea
                name="ucapan"
                value={form.ucapan}
                onChange={handleChange}
                placeholder="Ucapan atau doa"
                className="w-full p-2 mb-4 border border-gold bg-gold/10 placeholder:text-gray-600"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gold text-orange-700 hover:bg-gold/70 hover:text-orange-800 py-4 text-lg font-semibold transition-all duration-300 ease-in-out"
              >
                {loading ? "Sedang mengirim ucapan..." : "Kirim Ucapan Anda"}
              </button>

              {sukses && (
                <p className="text-green-600 mt-4 text-center">
                  Terima kasih! Ucapan kamu sudah tersampaikan.. 😊
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
