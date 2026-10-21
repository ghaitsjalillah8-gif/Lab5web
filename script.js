// Praktikum 5: JavaScript Dasar dan Manipulasi HTML

function latihan1() {
  document.getElementById("pesan").textContent = "Hello World";
  document.getElementById("hasil1").textContent = "Hello World berhasil ditampilkan.";
  console.log("Hello World");
}

function latihan2() {
  const namaPengguna = prompt("Masukkan nama Anda:", "");
  if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
  } else {
    alert("Nama belum diisi.");
  }
}

function latihan3() {
  const a = 9;
  const b = 4;
  const hasil = [
    "Penjumlahan: " + (a + b),
    "Pengurangan: " + (a - b),
    "Perkalian: " + (a * b),
    "Pembagian: " + (b !== 0 ? a / b : "Tidak dapat dibagi nol"),
    "Modulus: " + (a % b)
  ];
  console.log(...hasil);
  document.getElementById("hasil3").textContent = hasil.join("\n");
}

function latihan4() {
  const inputNilai = document.getElementById("nilai").value;
  const nilai = Number(inputNilai);
  const hasil = document.getElementById("hasil4");

  if (inputNilai.trim() === "" || !Number.isFinite(nilai) || nilai < 0 || nilai > 100) {
    hasil.textContent = "Input nilai tidak valid. Masukkan angka 0–100.";
  } else if (nilai >= 60) {
    hasil.textContent = "Lulus";
  } else {
    hasil.textContent = "Belum lulus";
  }
}

function latihan5() {
  const input = document.getElementById("pilihan").value;
  const namaBilangan = {
    "1": "Bilangan satu",
    "2": "Bilangan dua",
    "3": "Bilangan tiga",
    "4": "Bilangan empat",
    "5": "Bilangan lima"
  };
  document.getElementById("hasil5").textContent =
    namaBilangan[input] || "Pilihan tidak tersedia";
}

function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");

  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}

function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => item.addEventListener("change", hitungTotal));

function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

function hitungKalkulator() {
  const inputTugas = document.getElementById("tugas").value;
  const inputUTS = document.getElementById("uts").value;
  const inputUAS = document.getElementById("uas").value;
  const hasil = document.getElementById("hasilKalkulator");

  if ([inputTugas, inputUTS, inputUAS].some((v) => v.trim() === "")) {
    hasil.textContent = "Semua kolom nilai wajib diisi.";
    return;
  }

  const tugas = Number(inputTugas);
  const uts = Number(inputUTS);
  const uas = Number(inputUAS);

  if ([tugas, uts, uas].some((v) => !Number.isFinite(v) || v < 0 || v > 100)) {
    hasil.textContent = "Setiap nilai harus berada pada rentang 0–100.";
    return;
  }

  const akhir = hitungNilaiAkhir(tugas, uts, uas);
  const predikat = tentukanPredikat(akhir);
  const status = akhir >= 60 ? "Lulus" : "Belum lulus";

  hasil.textContent = `Nilai akhir: ${akhir.toFixed(2)} | Predikat: ${predikat} | Status: ${status}`;
}
