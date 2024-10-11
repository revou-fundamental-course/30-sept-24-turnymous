let isCelsiusToFahrenheit = true;

/**
 * Fungsi untuk mengonversi suhu berdasarkan mode yang aktif.
 * Mengambil nilai dari input suhu, melakukan perhitungan,
 * dan menampilkan hasil serta cara kalkulasi di textarea.
 */
function convertTemperature() {
  const inputSuhu = document.getElementById("input-suhu").value;

  // Validasi input
  function showCustomAlert(message) {
    Swal.fire({
      title: "Peringatan",
      text: message,
      icon: "warning",
      confirmButtonText: "OK",
    });
  }

  if (inputSuhu === "") {
    showCustomAlert("Silakan masukkan nilai suhu sebelum melakukan konversi.");
    return;
  }

  let result, formula;

  if (isCelsiusToFahrenheit) {
    // Menghitung konversi dari Celsius ke Fahrenheit
    result = (inputSuhu * 9) / 5 + 32;
    formula = `${inputSuhu}°C x 9/5 + 32 = ${result}°F`;
  } else {
    // Menghitung konversi dari Fahrenheit ke Celsius
    result = ((inputSuhu - 32) * 5) / 9;
    formula = `${inputSuhu}°F - 32 x 5/9 = ${result}°C`;
  }

  // Menampilkan hasil konversi dan cara kalkulasi di textarea
  document.getElementById("hasil-suhu").value = result;
  document.getElementById("kalkulasi-suhu").value = formula;
}

/**
 * Fungsi untuk mereset semua input dan output ke nilai awal.
 */
function reset() {
  document.getElementById("input-suhu").value = "";
  document.getElementById("hasil-suhu").value = "";
  document.getElementById("kalkulasi-suhu").value = "";
}

/**
 * Fungsi untuk membalikkan mode konversi.
 * Mengubah label input, instruksi, dan cara konversi sesuai dengan mode yang aktif.
 */
function reverseConversion() {
  // Mengosongkan hasil dan kalkulasi saat mode dibalik
  document.getElementById("hasil-suhu").value = "";
  document.getElementById("kalkulasi-suhu").value = "";

  // Mengosongkan input saat tombol reverse ditekan
  document.getElementById("input-suhu").value = "";

  isCelsiusToFahrenheit = !isCelsiusToFahrenheit;

  const inputLabel = document.getElementById("input-label");
  const instruction = document.getElementById("instruction");
  const hasilLabel = document
    .getElementById("fahrenheit")
    .querySelector("label");
  const conversionMethod = document.querySelector("h2");
  const kalkulasiSection = document.querySelector(".text-color article");

  // Mengupdate label, instruksi, dan cara konversi berdasarkan mode konversi
  if (isCelsiusToFahrenheit) {
    inputLabel.innerText = "Celcius (°C) :";
    instruction.innerText =
      "Masukkan suhu derajat Celcius (°C) ke kotak dibawah, lalu klik tombol konversi untuk mendapatkan hasil konversi dalam bentuk Fahrenheit (°F).";
    hasilLabel.innerText = "Fahrenheit (°F) :"; // Mengubah label hasil
  } else {
    inputLabel.innerText = "Fahrenheit (°F) :";
    instruction.innerText =
      "Masukkan suhu derajat Fahrenheit (°F) ke kotak dibawah, lalu klik tombol konversi untuk mendapatkan hasil konversi dalam bentuk Celcius (°C).";
    hasilLabel.innerText = "Celcius (°C) :"; // Mengubah label hasil
  }
  // Mereset input dan output untuk menghindari nilai lama yang tersisa
  reset(); // Mengosongkan input dan output
}
