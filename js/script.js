// Ini javascript

// Function to convert Celsius to Fahrenheit
function validateForm() {
  const celsiusInput = document.getElementById("input-suhu").value;
  const fahrenheitOutput = document.getElementById("hasil-suhu");
  const kalkulasiOutput = document.getElementById("kalkulasi-suhu");

  // Input validation
  if (celsiusInput === "") {
    alert("Anda belum input nilai!");
    return;
  }

  // Convert Celsius to Fahrenheit
  const celsius = parseFloat(celsiusInput);
  const fahrenheit = (celsius * 9) / 5 + 32;

  // Set output values
  fahrenheitOutput.value = fahrenheit.toFixed(2); // Output formatted to 2 decimal places
  kalkulasiOutput.value = `${celsius} °C x 9/5 + 32 = ${fahrenheit.toFixed(
    2
  )} °F`;
}

// Function to reset input and output fields
function reset() {
  document.getElementById("input-suhu").value = "";
  document.getElementById("hasil-suhu").value = "";
  document.getElementById("kalkulasi-suhu").value = "";
}
