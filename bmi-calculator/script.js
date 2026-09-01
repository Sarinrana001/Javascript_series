const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (isNaN(height) || height <= 0) {
    results.innerHTML = "Please enter a valid height.";

  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please enter a valid weight.";

  } else {
    const bmi = weight / ((height * height) / 10000);

    if (bmi < 18.6) {
      results.innerHTML = `Your BMI is: ${bmi.toFixed(2)}. You are underweight.`;

    } else if (bmi <= 24.9) {
      results.innerHTML = `Your BMI is: ${bmi.toFixed(2)}. Your weight is normal.`;

    } else {
      results.innerHTML = `Your BMI is: ${bmi.toFixed(2)}. You are overweight.`;
    }
  }
});