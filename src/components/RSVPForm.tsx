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
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow">
      <form onSubmit={handleSubmit}>
        <h3 className="text-2xl font-semibold mb-4 text-center">
          Konfirmasi Kehadiran
        </h3>

        <input
          name="nama"
          value={form.nama}
          onChange={handleChange}
          placeholder="Nama lengkap"
          required
          className="w-full p-2 mb-4 border rounded"
        />

        <select
          name="hadir"
          value={form.hadir}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
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
          className="w-full p-2 mb-4 border rounded"
          min={1}
        />

        <textarea
          name="ucapan"
          value={form.ucapan}
          onChange={handleChange}
          placeholder="Ucapan atau doa"
          className="w-full p-2 mb-4 border rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-pink-500 text-white p-2 rounded"
        >
          {loading ? "Mengirim..." : "Kirim RSVP"}
        </button>

        {sukses && (
          <p className="text-green-600 mt-4 text-center">
            Terima kasih! RSVP kamu sudah tercatat 😊
          </p>
        )}
      </form>

      {/* Tampilkan daftar RSVP di bawah form */}
      <div className="mt-8">
        <h4 className="text-xl font-semibold mb-4 text-center">Daftar RSVP</h4>
        {rsvps.length === 0 ? (
          <p className="text-center text-gray-600">Belum ada RSVP masuk.</p>
        ) : (
          <ul>
            {rsvps.map(({ id, nama, hadir, jumlah, ucapan }) => (
              <li
                key={id}
                className="mb-4 p-4 border rounded shadow-sm bg-gray-50"
              >
                <p>
                  <strong>Nama:</strong> {nama}
                </p>
                <p>
                  <strong>Hadir:</strong> {hadir}
                </p>
                <p>
                  <strong>Jumlah:</strong> {jumlah}
                </p>
                <p>
                  <strong>Ucapan:</strong> {ucapan || "-"}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
