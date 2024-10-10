// Function submit
function validateForm() {
  const celsiusInput = document.getElementById("input-suhu").value;
  const fahrenheitOutput = document.getElementById("hasil-suhu");
  const kalkulasiOutput = document.getElementById("kalkulasi-suhu");

  // Validasi input
  if (celsiusInput === "") {
    alert("Anda belum input nilai!");
    return;
  }

  // Convert Celsius to Fahrenheit
  const fahrenheit = (celsius * 9) / 5 + 32;
  fahrenheitOutput.value = fahrenheit.toFixed(2); // Output formatted to 2 decimal places

  // Output Cara Kalkulasi
  kalkulasiOutput.value = `${celsius} °C x 9/5 + 32 = ${fahrenheit.toFixed(
    2
  )} °F`;
}

// Function reset
function reset() {
  document.getElementById("input-suhu").value = "";
  document.getElementById("hasil-suhu").value = "";
  document.getElementById("kalkulasi-suhu").value = "";
}

// Function reverse
