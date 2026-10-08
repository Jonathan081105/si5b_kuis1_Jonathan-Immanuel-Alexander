# Kuis 1 PAW - Jonathan Immanuel Alexander

Repository ini berisi kode untuk Kuis 1 Pemrograman Aplikasi Web (PAW). Proyek ini merupakan RESTful API sederhana yang dibangun menggunakan **Node.js** dan **Express.js**.

## 📌 Deskripsi Proyek
Proyek ini mengimplementasikan struktur dasar aplikasi Express.js dengan beberapa fitur utama:
- **Routing:** Memiliki rute dasar `/` dan `/items` (menggunakan modular routing).
- **Middleware:** Menggunakan `cors`, `express.json` untuk body parsing, serta custom logger middleware.
- **Error Handling:** Memiliki penanganan error terpusat (`notFound` dan `errorHandler`).
- **Environment Variables:** Konfigurasi port dan variabel lainnya dikelola dengan `dotenv`.

## 🚀 Teknologi yang Digunakan
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [CORS](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)

## 📂 Struktur Direktori Utama
- `express-api/` - Folder utama untuk aplikasi Express API.
  - `controllers/` - Logika bisnis untuk mengelola request dan response.
  - `models/` - Struktur dan pengelolaan data.
  - `routes/` - Definisi endpoint API (contoh: rute `/items`).
  - `middlewares/` - Custom middleware (seperti `logger` dan penanganan error).
  - `index.js` - File *entry point* untuk menjalankan server aplikasi.
- `tugas1-restful-2428240080/` - Folder referensi tugas sebelumnya (terlampir dalam proyek).

## 🛠️ Cara Menjalankan Aplikasi

1. **Clone repository ini** (jika belum):
   ```bash
   git clone https://github.com/Jonathan081105/si5b_kuis1_Jonathan-Immanuel-Alexander.git
   cd "si5b_kuis1_Jonathan-Immanuel-Alexander/express-api"
   ```

2. **Instal dependensi**:
   ```bash
   npm install
   ```

3. **Konfigurasi Environment**:
   Pastikan Anda membuat file `.env` atau menyesuaikan `PORT`.
   ```env
   PORT=3000
   ```

4. **Jalankan Server**:
   ```bash
   node index.js
   ```
   Server akan berjalan di `http://localhost:3000`.

## 🧪 Endpoint API Dasar
- `GET /` - Mengembalikan pesan "Welcome to Express API".
- Rute-rute lain tersedia di bawah endpoint `/items`.

---
*Dibuat oleh:* **Jonathan Immanuel Alexander** (SI5B).
