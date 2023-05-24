// Function to calculate the area (luas) of a square
function hitungLuas() {
  // Get the input value for sisi-luas
  var sisi = document.getElementById("sisi-luas").value;

  // Validate the input
  if (sisi === "" || sisi <= 0) {
    alert("Masukkan nilai sisi yang valid!");
    return;
  }

  // Calculate the area
  var luas = sisi * sisi;

  // Display the result
  document.getElementById("output-luas").innerHTML = "Luas: " + luas;
}

// Function to calculate the perimeter (keliling) of a square
function hitungKeliling() {
  // Get the input value for sisi-keliling
  var sisi = document.getElementById("sisi-keliling").value;

  // Validate the input
  if (sisi === "" || sisi <= 0) {
    alert("Masukkan nilai sisi yang valid!");
    return;
  }

  // Calculate the perimeter
  var keliling = 4 * sisi;

  // Display the result
  document.getElementById("output-keliling").innerHTML = "Keliling: " + keliling;
}

// Event listener for the "Hitung Luas" button
document.getElementById("hitung-luas").addEventListener("click", hitungLuas);

// Event listener for the "Hitung Keliling" button
document.getElementById("hitung-keliling").addEventListener("click", hitungKeliling);
