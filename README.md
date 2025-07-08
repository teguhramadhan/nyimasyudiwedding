# 💌 Undangan Digital Pernikahan

Selamat datang di repository **Undangan Digital Pernikahan**!  
Proyek ini merupakan aplikasi web interaktif untuk mengelola RSVP tamu undangan secara online, dengan desain elegan dan nuansa budaya yang hangat.

---

## ✨ Fitur Utama

- 🎨 **Tampilan Elegan** — Desain bertema gold dengan sentuhan dekoratif.
- 📝 **Form RSVP** — Pengunjung dapat mengisi nama, konfirmasi kehadiran, jumlah tamu, dan ucapan.
- 🔁 **Realtime Update** — Ucapan yang dikirim langsung tampil tanpa perlu refresh (powered by Firestore).
- 📜 **Daftar Ucapan** — Menampilkan semua ucapan dari tamu undangan secara estetik.
- 📱 **Responsif** — Tampilan menyesuaikan perangkat mobile maupun desktop.

---

## 🔧 Teknologi yang Digunakan

- [Next.js](https://nextjs.org/) — Framework React modern
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS styling
- [Firebase Firestore](https://firebase.google.com/products/firestore) — Database realtime untuk RSVP
- TypeScript — Supaya lebih aman dan jelas secara tipe data
- Vercel — Untuk deployment super cepat (opsional)

---

## 🚀 Cara Menjalankan Proyek

### 1. Clone Repository

```bash
git clone https://github.com/namakamu/undangan-digital.git
cd undangan-digital
```

Instalasi Dependensi
```bash
npm install
```

Konfigurasi Firebase
Buat file .env.local dan isi dengan konfigurasi Firebase milikmu:
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

Jalankan Proyek di Lokal
```bash
npm run dev
```
Akses proyek di http://localhost:3000

## Struktur Folder

![image](https://github.com/user-attachments/assets/86e08275-b6b7-44fc-9016-145cda00998b)


Screenshot Project

![image](https://github.com/user-attachments/assets/e2b9aea9-45d0-4be6-a8f7-19af91c3c025) ![image](https://github.com/user-attachments/assets/dc0e25f6-fa0c-4878-ac09-761aa87ac52d)
![image](https://github.com/user-attachments/assets/dfe2d5f2-aacf-474b-9d19-aede3f49d482) ![image](https://github.com/user-attachments/assets/209e4ad8-115d-47be-b98b-3a0df5ac4413)





🤝 Kontribusi
Pull request sangat diterima! Jika kamu ingin membantu mengembangkan tema, fitur RSVP tambahan, atau integrasi lainnya, silakan fork dulu dan buat PR yaa 🤗
