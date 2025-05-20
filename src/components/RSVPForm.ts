"use client";

import { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function RSVPForm() {
  const [form, setForm] = useState({
    nama: "",
    hadir: "Ya",
    jumlah: 1,
    ucapan: "",
  });
  const [loading, setLoading] = useState(false);
  const [sukses, setSukses] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "rsvp"), form);
      setSukses(true);
    } catch (err) {
      alert("Gagal mengirim RSVP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-4 bg-white rounded shadow"
    >
      <h3 className="text-2xl font-semibold mb-4 text-center">
        Konfirmasi Kehadiran
      </h3>

      <input
        name="nama"
        onChange={handleChange}
        placeholder="Nama lengkap"
        required
        className="w-full p-2 mb-4 border rounded"
      />

      <select
        name="hadir"
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      >
        <option value="Ya">Hadir</option>
        <option value="Tidak">Tidak Hadir</option>
      </select>

      <input
        name="jumlah"
        type="number"
        onChange={handleChange}
        placeholder="Jumlah orang"
        required
        className="w-full p-2 mb-4 border rounded"
      />

      <textarea
        name="ucapan"
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
  );
}
